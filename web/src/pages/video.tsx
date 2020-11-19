import { useApolloClient } from "@apollo/client";
import { NextPage } from "next";
import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Header from "../components/Header/Header";
import MyLoader from "../components/MyLoader/MyLoader";
import RichText from "../components/RichText/RichText";
import TagCard, { IOnClickTagCard } from "../components/TagCard/TagCard";
import VideoCard from "../components/VideoCard/VideoCard";
import {
  Tag,
  useTagsQuery,
  useVideoPageQuery,
  useVideosCountPublishedQuery,
  useVideosQuery,
  Video,
  VideosQueryVariables,
} from "../generated/graphql";
import Layout from "../layouts/Layout";
import { createMediaUrl } from "../utils/createMediaUrl";
import { createSizes } from "../utils/createSizes";
import { createSrcSet } from "../utils/createSrcSet";
import { useResetStore } from "../utils/useResetStore";
import { withApollo } from "../utils/withApollo";

const initVideoQueryVariables: VideosQueryVariables = {
  limit: 15,
};

const VideoPage: NextPage = () => {
  const client = useApolloClient();
  useResetStore(client);
  const [activeCard, setActiveCard] = useState("Wszystkie");
  const { data: videoPageData } = useVideoPageQuery();
  const { data: tagsData } = useTagsQuery();
  const {
    data: videosData,
    refetch: refetchVideos,
    fetchMore: fetchMoreVideos,
  } = useVideosQuery({
    variables: initVideoQueryVariables,
  });
  const {
    data: videosCountPublishedData,
    refetch: refetchVideosCountPublishedData,
  } = useVideosCountPublishedQuery();

  const loadedVideosCount = videosData?.videos?.length as number;
  const hasMore =
    (videosCountPublishedData?.videosCountPublished as number) >
    loadedVideosCount;

  const handleTagCardClick = async ({ tag, isActive }: IOnClickTagCard) => {
    if (isActive) return;

    const refetchVariables: VideosQueryVariables = {
      ...initVideoQueryVariables,
      where: {
        tags: {
          name: tag === "Wszystkie" ? [] : [tag],
        },
      },
    };

    const { error } = await refetchVideos(refetchVariables);
    await refetchVideosCountPublishedData({
      tagName: tag === "Wszystkie" ? null : tag,
    });

    if (error) {
      console.error(error);
      return;
    }
    setActiveCard(tag);
  };

  const handleLoadMore = async () => {
    fetchMoreVideos({
      variables: {
        ...initVideoQueryVariables,
        start: loadedVideosCount,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        return Object.assign({}, prev, {
          videos: [
            ...(prev.videos as Video[]),
            ...(fetchMoreResult.videos as Video[]),
          ],
        });
      },
    });
  };

  return (
    <Layout title="SkórskiVideo | Video" lang="pl-PL">
      <div
        className="container mx-auto grid grid-flow-row gap-y-8 md:gap-y-24 pt-40 pb-16 px-4 xl:px-12"
        style={{ gridTemplateColumns: "minmax(0, 1fr)" }}
      >
        <div>
          <div>
            <Header>Video</Header>
          </div>
          <div className="md:grid flex-col grid-cols-12 gap-x-16 mt-8">
            <div
              className={`${
                videoPageData?.videoPage?.image ? "col-span-7" : "col-span-12"
              }`}
            >
              <div className="font-secondary leading-relaxed">
                <RichText>{videoPageData?.videoPage?.description}</RichText>
              </div>
            </div>
            {videoPageData?.videoPage?.image && (
              <div className="col-span-5">
                <img
                  src={createMediaUrl(videoPageData.videoPage.image.url)}
                  srcSet={createSrcSet({
                    ...videoPageData.videoPage.image.formats,
                    original: {
                      url: videoPageData.videoPage.image.url,
                      width: videoPageData.videoPage.image.width,
                    },
                  })}
                  sizes={createSizes(videoPageData.videoPage.image.width || 0)}
                  alt={videoPageData.videoPage.image.alternativeText || ""}
                  title={videoPageData.videoPage.image.caption || ""}
                />
              </div>
            )}
          </div>
        </div>
        <div className="grid gap-y-8">
          {tagsData?.tags && (
            <div className="flex flex-wrap gap-4">
              <TagCard
                tag={"Wszystkie"}
                onClick={handleTagCardClick}
                isActive={activeCard === "Wszystkie"}
              />
              {tagsData.tags.map((tag) => (
                <TagCard
                  key={tag?.id}
                  tag={tag?.name as string}
                  onClick={handleTagCardClick}
                  isActive={activeCard === tag?.name}
                />
              ))}
            </div>
          )}

          {videosData?.videos && (
            <InfiniteScroll
              dataLength={videosData.videos.length}
              next={handleLoadMore}
              hasMore={hasMore}
              loader={<MyLoader />}
            >
              <div>
                <div
                  className={`grid grid-flow-row md:grid-cols-3 md:grid-rows-none gap-x-8 gap-y-12`}
                >
                  {videosData.videos.map(
                    (video) =>
                      video && (
                        <VideoCard
                          {...video}
                          key={video.id}
                          sourceUrl={video.url}
                          showTags={true}
                          thumbnail={{
                            url: createMediaUrl(
                              video.thumbnail?.formats.small.url
                            ),
                            alt: video.thumbnail?.alternativeText,
                            title: video.thumbnail?.caption,
                          }}
                          tags={video.tags as Tag[]}
                        />
                      )
                  )}
                </div>
              </div>
            </InfiniteScroll>
          )}
        </div>
      </div>
    </Layout>
  );
};
export default withApollo({ ssr: true })(VideoPage);
