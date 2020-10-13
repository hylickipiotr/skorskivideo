import { useApolloClient } from "@apollo/client";
import { IconName } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NextLink from "next/link";
import React from "react";
import { Element } from "react-scroll";
import BackgroundVideo from "../components/BackgroundVideo/BackgroundVideo";
import ContactForm from "../components/ContactForm/ContactForm";
import Header from "../components/Header/Header";
import MyGallery from "../components/MyGallery/MyGallery";
import RichText from "../components/RichText/RichText";
import VideoCard from "../components/VideoCard/VideoCard";
import { ROUTES } from "../constans/router";
import {
  Tag,
  useFaqsQuery,
  useHomeQuery,
  usePhotosQuery,
  useSocialsQuery,
  useVideosQuery,
} from "../generated/graphql";
import Layout from "../layouts/Layout";
import { createMediaUrl } from "../utils/createMediaUrl";
import { createSizes } from "../utils/createSizes";
import { createSrcSet } from "../utils/createSrcSet";
import { useResetStore } from "../utils/useResetStore";
import { withApollo } from "../utils/withApollo";

const IndexPage = () => {
  const client = useApolloClient();
  useResetStore(client);
  const { data: homePageData } = useHomeQuery();
  const { data: socialsData } = useSocialsQuery();

  const { data: faqsData } = useFaqsQuery({
    variables: {
      sort: "created_at:DESC",
      limit: 30,
    },
  });

  const { data: videosData } = useVideosQuery({
    variables: {
      limit: 3,
    },
  });

  const { data: photosData } = usePhotosQuery({
    variables: {
      limit: 5,
    },
  });

  return (
    <Layout title="SórskiVideo" lang="pl-PL">
      <BackgroundVideo
        source={
          homePageData?.home?.backgroundVideo && {
            src: createMediaUrl(homePageData.home.backgroundVideo.url),
            type: homePageData.home.backgroundVideo.mime as string,
          }
        }
        image={{
          src: createMediaUrl(
            homePageData?.home?.backgroundImage?.url as string
          ),
          title: homePageData?.home?.backgroundImage?.caption as string,
          alt: homePageData?.home?.backgroundImage?.alternativeText as string,
          srcSet: createSrcSet({
            ...homePageData?.home?.backgroundImage?.formats,
            original: {
              url: homePageData?.home?.backgroundImage?.url,
              width: homePageData?.home?.backgroundImage?.width,
            },
          }),
          sizes: createSizes(homePageData?.home?.backgroundImage?.width || 0),
        }}
        options={{
          autoPlay: true,
          loop: true,
          muted: true,
        }}
      />
      <div
        className="container mx-auto grid grid-flow-row row-gap-8 md:row-gap-16 py-16 px-4 xl:px-12"
        style={{ gridTemplateColumns: "minmax(0, 1fr)" }}
      >
        {/* O NAS */}
        <Element name="onas" className="grid flex-col grid-cols-12">
          <div className="md:hidden col-span-12">
            <Header>O nas</Header>
          </div>
          <div className="col-span-12 md:col-span-5 mt-8 md:mt-0">
            <img
              src={createMediaUrl(
                homePageData?.home?.aboutUsImage?.url as string
              )}
              srcSet={createSrcSet({
                ...homePageData?.home?.aboutUsImage?.formats,
                original: {
                  url: homePageData?.home?.aboutUsImage?.url,
                  width: homePageData?.home?.aboutUsImage?.width,
                },
              })}
              sizes={createSizes(homePageData?.home?.aboutUsImage?.width || 0)}
              alt={homePageData?.home?.aboutUsImage?.alternativeText || ""}
              title={homePageData?.home?.aboutUsImage?.caption || ""}
            />
          </div>
          <div className="col-span-12 md:col-span-7 md:ml-16 mt-4 md:mt-0">
            <div className="hidden md:block">
              <Header>O nas</Header>
            </div>
            <div className="md:mt-8 font-secondary leading-relaxed">
              <RichText>{homePageData?.home?.aboutUsContent}</RichText>
            </div>
          </div>
        </Element>
        {/* Filmowanie */}
        {videosData?.videos && (
          <Element name="video">
            <div className="flex w-full justify-between items-start">
              <Header>Filmowanie</Header>
              <div className="hidden md:block">
                <NextLink href={ROUTES.VIDEO}>
                  <button className="font-semibold border-2 border-black px-4 py-2 hover:bg-yellow-500 translate duration-200 ease-in-out">
                    Zobacz więcej
                  </button>
                </NextLink>
              </div>
            </div>
            <div
              className={`grid md:grid-flow-row md:grid-cols-3 md:grid-rows-none gap-8 mt-12`}
            >
              {videosData.videos.map(
                (video) =>
                  video && (
                    <VideoCard
                      key={video.id}
                      sourceUrl={video.url}
                      tags={video.tags as Tag[]}
                      {...video}
                      thumbnail={{
                        url: createMediaUrl(video.thumbnail?.formats.small.url),
                        alt: video.thumbnail?.alternativeText,
                        title: video.thumbnail?.caption,
                      }}
                    />
                  )
              )}
            </div>
            <div className="md:hidden mt-8">
              <NextLink href={ROUTES.VIDEO}>
                <button className="bg-yellow-500 w-full px-4 py-2">
                  Zobacz więcej
                </button>
              </NextLink>
            </div>
          </Element>
        )}
        {/* Fotografia */}
        {photosData?.photos && (
          <Element name="fotografia">
            <div className="flex w-full justify-between items-start">
              <Header>Fotografia</Header>
              <div className="hidden md:block">
                <NextLink href={ROUTES.PHOTO}>
                  <button className="font-semibold border-2 border-black px-4 py-2 hover:bg-yellow-500 translate duration-200 ease-in-out">
                    Zobacz więcej
                  </button>
                </NextLink>
              </div>
            </div>
            <div className="mt-12">
              <MyGallery
                photos={photosData.photos.map((photo) => {
                  return {
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
                  };
                })}
              />
            </div>
            <div className="md:hidden mt-8">
              <NextLink href={ROUTES.PHOTO}>
                <button className="bg-yellow-500 w-full px-4 py-2">
                  Zobacz więcej
                </button>
              </NextLink>
            </div>
          </Element>
        )}
        {/* FAQ */}
        {faqsData?.faqs && (
          <Element name="faq">
            <Header>FAQ</Header>
            <div className="grid md:grid-cols-12 gap-8 md:gap-6 mt-12">
              {faqsData?.faqs?.map(
                (faq) =>
                  faq && (
                    <div
                      key={faq.id}
                      className="md:col-span-6 bg-yellow-100 border-l-4 border-solid border-yellow-500 pl-4 pt-4 pb-3"
                    >
                      <div className="font-secondary font-semibold md:col-span-5">
                        {faq.question}
                      </div>
                      <div className="text-gray-700 font-secondary leading-relaxed md:col-span-7">
                        <RichText>{faq.answer}</RichText>
                      </div>
                    </div>
                  )
              )}
            </div>
          </Element>
        )}
        {/* Kontakt */}
        <Element name="kontakt">
          <Header>Kontakt</Header>
          <div className="grid grid-flow-row gap-16 md:grid-flow-col md:grid-cols-2 mt-8">
            <div className="font-secondary leading-relaxed">
              <RichText>{homePageData?.home?.contactContent}</RichText>
              {socialsData?.socials && (
                <div className="mt-12 ml-4 grid row-gap-6">
                  {socialsData.socials.map((social) => (
                    <div key={social?.id}>
                      <a href={social?.url as string}>
                        <div className="inline-flex items-center cursor-pointer">
                          <div className="flex justify-center items-center h-4 w-4">
                            <FontAwesomeIcon
                              key={social?.id}
                              icon={["fab", social?.icon as IconName]}
                              className="text-xl text-gray-900"
                              style={
                                social?.colorHex
                                  ? { color: social.colorHex }
                                  : {}
                              }
                            />
                          </div>
                          <p className="ml-4 capitalize">{social?.label}</p>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <ContactForm />
          </div>
        </Element>
      </div>
    </Layout>
  );
};
export default withApollo({ ssr: true })(IndexPage);
