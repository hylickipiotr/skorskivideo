import { useApolloClient } from "@apollo/client";
import { title } from "process";
import React, { useState } from "react";
import Header from "../components/Header/Header";
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
import { useResetStore } from "../utils/useResetStore";
import { withApollo } from "../utils/withApollo";

const initVideoQueryVariables: VideosQueryVariables = {
  limit: 3,
};

const VideoPage = () => {
  const client = useApolloClient();
  useResetStore(client);
  const [activeCard, setActiveCard] = useState("Wszystkie");
  const { data: videoPageData } = useVideoPageQuery();
  const { data: tagsData } = useTagsQuery();
  const {
    data: videosData,
    refetch: refetchVideos,
    loading: loadingVideos,
    fetchMore: fetchMoreVideos,
  } = useVideosQuery({
    variables: initVideoQueryVariables,
  });
  const {
    data: videosCountPublishedData,
    refetch: refetchVideosCountPublishedData,
  } = useVideosCountPublishedQuery();

  const loadedVideosCount = videosData?.videos?.length as number;
  const isMore =
    (videosCountPublishedData?.videosCountPublished as number) >
    loadedVideosCount;

  console.log(
    loadedVideosCount,
    videosCountPublishedData?.videosCountPublished
  );

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
    <Layout title="SórskiVideo | Video" lang="pl-PL">
      <div
        className="container mx-auto grid grid-flow-row row-gap-8 md:row-gap-24 pt-40 pb-16 px-4 xl:px-12"
        style={{ gridTemplateColumns: "minmax(0, 1fr)" }}
      >
        <div className="md:grid flex-col grid-cols-12 col-gap-16">
          <div
            className={`${
              videoPageData?.videoPage?.image ? "col-span-7" : "col-span-12"
            }`}
          >
            <Header>Video</Header>
            <div className="mt-8 font-secondary leading-relaxed">
              <RichText>{videoPageData?.videoPage?.description}</RichText>
            </div>
          </div>
          {videoPageData?.videoPage?.image && (
            <div className="col-span-5">
              <img
                src={createMediaUrl(
                  videoPageData.videoPage.image.formats.large.url
                )}
                alt={videoPageData.videoPage.image.alternativeText || ""}
                title={videoPageData.videoPage.image.caption || ""}
              />
            </div>
          )}
        </div>
        <div className="grid row-gap-8">
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
            <div>
              <div
                className={`grid grid-flow-row md:grid-cols-3 md:grid-rows-none col-gap-8 row-gap-12`}
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
          )}
          {isMore && (
            <div className="flex justify-center">
              <button
                onClick={() => handleLoadMore()}
                className={`py-2 px-4 font-semibold ${
                  !loadingVideos ? "bg-yellow-500" : "bg-gray-700 text-gray-300"
                }`}
              >
                {!loadingVideos ? "Ładuj więcej" : "Ładowanie..."}
              </button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};
export default withApollo({ ssr: true })(VideoPage);
