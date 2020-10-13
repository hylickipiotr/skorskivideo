import { useApolloClient } from "@apollo/client";
import { NextPage } from "next";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Header from "../components/Header/Header";
import MyGallery from "../components/MyGallery/MyGallery";
import MyLoader from "../components/MyLoader/MyLoader";
import {
  Photo,
  PhotosQueryVariables,
  usePhotosCountPublishedQuery,
  usePhotosQuery,
} from "../generated/graphql";
import Layout from "../layouts/Layout";
import { createMediaUrl } from "../utils/createMediaUrl";
import { createSizes } from "../utils/createSizes";
import { createSrcSet } from "../utils/createSrcSet";
import { useResetStore } from "../utils/useResetStore";
import { withApollo } from "../utils/withApollo";

const initPhotoQueryVariables: PhotosQueryVariables = {
  limit: 15,
};

const PhotoPage: NextPage = () => {
  const client = useApolloClient();
  useResetStore(client);
  const { data: photosData, fetchMore: fetchMorePhotos } = usePhotosQuery({
    variables: initPhotoQueryVariables,
  });

  const { data: photosCountPublishedData } = usePhotosCountPublishedQuery();

  const loadedPhotosCount = photosData?.photos?.length as number;
  const hasMore =
    (photosCountPublishedData?.photosCountPublished as number) >
    loadedPhotosCount;

  const handleLoadMore = async () => {
    fetchMorePhotos({
      variables: {
        ...initPhotoQueryVariables,
        start: loadedPhotosCount,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        return Object.assign({}, prev, {
          photos: [
            ...(prev.photos as Photo[]),
            ...(fetchMoreResult.photos as Photo[]),
          ],
        });
      },
    });
  };

  return (
    <Layout title="SórskiVideo | Video" lang="pl-PL">
      <div
        className="container mx-auto grid grid-flow-row row-gap-8 pt-40 pb-16 px-4 xl:px-12"
        style={{ gridTemplateColumns: "minmax(0, 1fr)" }}
      >
        <div>
          <Header>Fotografia</Header>
        </div>
        {photosData?.photos && (
          <div>
            <InfiniteScroll
              dataLength={photosData.photos.length}
              next={handleLoadMore}
              hasMore={hasMore}
              loader={<MyLoader />}
            >
              <MyGallery
                photos={photosData.photos.map((photo) => ({
                  key: photo?.id,
                  src: createMediaUrl(photo?.image?.url as string),
                  srcSet: createSrcSet({
                    ...photo?.image?.formats,
                    original: {
                      url: photo?.image?.url,
                      width: photo?.image?.width,
                    },
                  }),
                  sizes: createSizes(photo?.image?.width || 0),
                  width: photo?.image?.width || 1,
                  height: photo?.image?.height || 1,
                  alt: photo?.title,
                }))}
                thumbnails={photosData.photos.map((photo) => ({
                  key: photo?.id,
                  src: createMediaUrl(
                    photo?.image?.formats.small.url as string
                  ),
                  width: photo?.image?.width || 1,
                  height: photo?.image?.height || 1,
                  alt: photo?.title,
                }))}
              />
            </InfiniteScroll>
          </div>
        )}
      </div>
    </Layout>
  );
};
export default withApollo({ ssr: true })(PhotoPage);
