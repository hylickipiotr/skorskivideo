import { useApolloClient } from "@apollo/client";
import { IconName } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Field, Form, Formik } from "formik";
import NextLink from "next/link";
import React from "react";
import { Element } from "react-scroll";
import BackgroundVideo from "../components/BackgroundVideo/BackgroundVideo";
import Header from "../components/Header/Header";
import MyGallery from "../components/MyGallery/MyGallery";
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
import { isServer } from "../utils/isServer";
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
      limit: 10,
    },
    skip: isServer(),
  });

  return (
    <Layout title="SórskiVideo" lang="pl-PL">
      <BackgroundVideo
        sources={[
          {
            src: homePageData?.home?.backgroundVideoUrl as string,
            type: "video/mp4",
          },
        ]}
        imgSrc={homePageData?.home?.backgroundImageUrl}
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
        {/* O NAS MOBILE */}
        <div className="md:hidden">
          <Header>O nas</Header>
          <div className="mt-8 ">
            <img src={homePageData?.home?.aboutUsImageUrl} />
          </div>
          <div className="mt-8">
            <p className="font-secondary">
              {homePageData?.home?.aboutUsContent}
            </p>
          </div>
        </div>
        {/* O NAS DESKTOP */}
        <Element name="onas" className="hidden md:grid flex-col grid-cols-12">
          <div className="col-span-5">
            <img src={homePageData?.home?.aboutUsImageUrl} />
          </div>
          <div className="col-span-7 md:ml-16 mt-4">
            <Header>O nas</Header>
            <div className="mt-8">
              <p className="font-secondary leading-relaxed">
                {homePageData?.home?.aboutUsContent}
              </p>
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
                photos={photosData.photos.map((photo) => ({
                  src: photo?.url || "",
                  width: photo?.width || 1,
                  height: photo?.height || 1,
                  alt: photo?.title,
                }))}
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
                      // className="grid row-gap-2 md:grid-flow-col md:grid-cols-12 md:col-gap-8"
                    >
                      <div className="font-secondary font-semibold md:col-span-5">
                        {faq.question}
                      </div>
                      <div className="text-gray-700 font-secondary leading-relaxed md:col-span-7">
                        {faq.answer}
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
            <div>
              <p className="font-secondary leading-relaxed">
                {homePageData?.home?.contactContent}
              </p>
              {socialsData?.socials && (
                <div className="mt-12 ml-4 grid row-gap-6">
                  {socialsData.socials.map((social) => (
                    <NextLink key={social?.id} href={social?.url as string}>
                      <div className="flex items-center cursor-pointer">
                        <div className="flex justify-center items-center h-4 w-4">
                          <FontAwesomeIcon
                            key={social?.id}
                            icon={["fab", social?.icon as IconName]}
                            className="text-xl text-gray-900"
                            style={
                              social?.colorHex ? { color: social.colorHex } : {}
                            }
                          />
                        </div>
                        <p className="ml-4 capitalize">{social?.label}</p>
                      </div>
                    </NextLink>
                  ))}
                </div>
              )}
            </div>
            <div className="p-4 bg-gray-100">
              <Formik
                initialValues={{
                  email: "",
                  message: "",
                }}
                onSubmit={(values) => console.log("form sumbited:", values)}
              >
                {({}) => (
                  <Form className="grid grid-flow-row gap-4">
                    <Field
                      type="email"
                      name="email"
                      placeholder="Twój email"
                      className="border-gray-300 border-solid border-2 p-2"
                    />
                    <Field
                      name="message"
                      component="textarea"
                      placeholder="W czy możemy Ci pomóc?"
                      className="border-gray-300 border-solid border-2 p-2 h-auto"
                      rows="10"
                    />
                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className="py-2 px-4 bg-yellow-500 font-semibold"
                      >
                        Wyślij
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </Element>
      </div>
    </Layout>
  );
};
export default withApollo({ ssr: true })(IndexPage);
