import { Field, Form, Formik } from "formik";
import NextLink from "next/link";
import React from "react";
import BackgroundVideo from "../components/BackgroundVideo/BackgroundVideo";
import MyGallery from "../components/MyGallery/MyGallery";
import Header from "../components/Header/Header";
import VideoCard from "../components/VideoCard/VideoCard";
import Layout from "../layouts/Layout";
import { SocialItems } from "../utils/socialItems";
import { Element } from "react-scroll";
import {
  useFaqsQuery,
  useHomeQuery,
  usePhotosQuery,
  useSocialsQuery,
  useVideosQuery,
} from "../generated/graphql";
import { isServer } from "../utils/isServer";
import { withApollo } from "../utils/withApollo";
import { IconName } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IndexPage = () => {
  const { data: homeData } = useHomeQuery();
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
            src: homeData?.home?.backgroundVideoUrl as string,
            type: "video/mp4",
          },
        ]}
        imgSrc={homeData?.home?.backgroundImageUrl}
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
            <img src={homeData?.home?.aboutUsImageUrl} />
          </div>
          <div className="mt-8">
            <p className="font-secondary">{homeData?.home?.aboutUsContent}</p>
          </div>
        </div>
        {/* O NAS DESKTOP */}
        <Element name="onas" className="hidden md:grid flex-col grid-cols-12">
          <div className="col-span-5">
            <img src={homeData?.home?.aboutUsImageUrl} />
          </div>
          <div className="col-span-7 md:ml-16 mt-4">
            <Header>O nas</Header>
            <div className="mt-8">
              <p className="font-secondary leading-relaxed">
                {homeData?.home?.aboutUsContent}
              </p>
            </div>
          </div>
        </Element>
        {/* Filmowanie */}
        {videosData?.videos && (
          <Element name="video">
            <div className="flex w-full justify-between items-baseline">
              <Header>Filmowanie</Header>
              <div className="hidden md:block  transform hover:-translate-y-1 hover:scale-105 transition-all ease-in-out duration-200">
                <NextLink href="/filmowanie">
                  <button className="underline font-semibold">
                    Zobacz więcej
                  </button>
                </NextLink>
              </div>
            </div>
            <div
              className={`grid grid-flow-col md:grid-flow-row md:grid-cols-3 md:grid-rows-none gap-8 mt-12`}
            >
              {videosData.videos.map(
                (video) =>
                  video && (
                    <VideoCard
                      key={video.id}
                      sourceUrl={video.url}
                      {...video}
                    />
                  )
              )}
            </div>
            <div className="md:hidden mt-8">
              <NextLink href="/filmowanie">
                <button className="bg-yellow-500 w-full py-2 px-4 font-semibold hover:bg-yellow-700 transition-colors ease-in-out duration-200">
                  Zobacz więcej
                </button>
              </NextLink>
            </div>
          </Element>
        )}
        {/* Fotografia */}
        {photosData?.photos && (
          <Element name="fotografia">
            <div className="flex w-full justify-between items-baseline">
              <Header>Fotografia</Header>
              <div className="hidden md:block  transform hover:-translate-y-1 hover:scale-105 transition-all ease-in-out duration-200">
                <NextLink href="/fotografia">
                  <button className="underline font-semibold">
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
              <NextLink href="/fotografia">
                <button className="bg-yellow-500 w-full py-2 px-4 font-semibold hover:bg-yellow-700 transition-colors ease-in-out duration-200">
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
            <div className="grid grid-flow-row row-gap-8 md:row-gap-6 mt-12">
              {faqsData?.faqs?.map(
                (faq) =>
                  faq && (
                    <div
                      key={faq.id}
                      className="grid row-gap-2 md:grid-flow-col md:grid-cols-12 md:col-gap-8"
                    >
                      <div className="font-semibold text-lg md:col-span-5">
                        {faq.question}
                      </div>
                      <div className="text-gray-800 font-secondary leading-relaxed md:col-span-7">
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
                {homeData?.home?.contactContent}
              </p>
              {socialsData?.socials && (
                <div className="mt-12 ml-4 grid row-gap-6">
                  {socialsData.socials.map((social) => (
                    <NextLink key={social?.id} href={social?.url as string}>
                      <div className="flex items-center cursor-pointer text-black">
                        <div className="flex justify-center items-center h-4 w-4">
                          <FontAwesomeIcon
                            key={social?.id}
                            icon={["fab", social?.icon as IconName]}
                            className="text-xl"
                          />
                        </div>
                        <p className="ml-4 capitalize">{social?.label}</p>
                      </div>
                    </NextLink>
                  ))}
                </div>
              )}
            </div>
            <div className="p-4 bg-gray-300">
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
                      className="border-gray-500 border-solid border-2 p-2"
                    />
                    <Field
                      name="message"
                      component="textarea"
                      placeholder="W czy możemy Ci pomóc?"
                      className="border-gray-500 border-solid border-2 p-2 h-auto"
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
