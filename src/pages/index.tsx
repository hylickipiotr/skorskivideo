import { Field, Form, Formik } from "formik";
import NextLink from "next/link";
import React from "react";
import BackgroundVideo from "../components/BackgroundVideo/BackgroundVideo";
import MyGallery from "../components/MyGallery/MyGallery";
import Header from "../components/Header/Header";
import VideoCard from "../components/VideoCard/VideoCard";
import Layout from "../layouts/Layout";
import { Photos } from "../utils/photos";
import { SocialItems } from "../utils/socialItems";
import { VideoCards } from "../utils/videoCards";
import { FaqItems } from "../utils/faqItems";

const IndexPage = () => (
  <Layout title="Next.js + Typescript + Tailwind" lang="pl-PL">
    <BackgroundVideo
      sources={[
        {
          src: "https://www.w3schools.com/howto/rain.mp4",
          type: "video/mp4",
        },
      ]}
      imgSrc="https://interactive-examples.mdn.mozilla.net/media/examples/plumeria.jpg"
      options={{
        autoPlay: true,
        loop: true,
        muted: true,
      }}
    />
    <div
      className="container mx-auto grid grid-flow-row row-gap-8 md:row-gap-16 py-16 px-4"
      style={{ gridTemplateColumns: "minmax(0, 1fr)" }}
    >
      {/* O NAS MOBILE */}
      <div className="md:hidden">
        <Header>O nas</Header>
        <div className="mt-8 max-w-xs ">
          <img src="https://images.pexels.com/photos/5192248/pexels-photo-5192248.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
        </div>
        <div className="mt-8">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut
            odio interdum quam molestie auctor. Pellentesque volutpat magna ac
            tellus tempor blandit. Nulla neque nunc, malesuada in neque quis,
            malesuada rutrum magna. Quisque lorem lacus, tincidunt ac felis in,
            gravida ultrices velit. Etiam at finibus augue. Mauris nibh felis,
            hendrerit eu diam et, mattis lacinia tortor. Nam auctor fermentum
            nunc a gravida.
          </p>
          <p className="mt-4">
            Nulla venenatis dapibus fringilla. Pellentesque non nisi
            pellentesque purus pretium condimentum. Vivamus maximus quam nec
            massa mollis semper. Vestibulum tempus lectus mauris, sit amet
            interdum nunc vestibulum quis. Sed eu enim lacinia augue rhoncus
            efficitur. Ut at tellus in nisi commodo dictum. Interdum et
            malesuada fames ac ante ipsum primis in faucibus. Integer lacus
            odio, maximus vitae lacus vel, lobortis eleifend mauris. Praesent
            pharetra volutpat elit, ac laoreet tellus pharetra eget. Suspendisse
            potenti. Maecenas at neque eget urna tincidunt accumsan. Etiam
            gravida rutrum malesuada.
          </p>
        </div>
      </div>
      {/* O NAS DESKTOP */}
      <div className="hidden md:grid flex-col grid-cols-3">
        <div className="col-span-1">
          <img src="https://images.pexels.com/photos/5192248/pexels-photo-5192248.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
        </div>
        <div className="col-span-2 md:ml-16 mt-4">
          <Header>O nas</Header>
          <div className="mt-8">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              ut odio interdum quam molestie auctor. Pellentesque volutpat magna
              ac tellus tempor blandit. Nulla neque nunc, malesuada in neque
              quis, malesuada rutrum magna. Quisque lorem lacus, tincidunt ac
              felis in, gravida ultrices velit. Etiam at finibus augue. Mauris
              nibh felis, hendrerit eu diam et, mattis lacinia tortor. Nam
              auctor fermentum nunc a gravida.
            </p>
            <p className="mt-4">
              Nulla venenatis dapibus fringilla. Pellentesque non nisi
              pellentesque purus pretium condimentum. Vivamus maximus quam nec
              massa mollis semper. Vestibulum tempus lectus mauris, sit amet
              interdum nunc vestibulum quis. Sed eu enim lacinia augue rhoncus
              efficitur. Ut at tellus in nisi commodo dictum. Interdum et
              malesuada fames ac ante ipsum primis in faucibus. Integer lacus
              odio, maximus vitae lacus vel, lobortis eleifend mauris. Praesent
              pharetra volutpat elit, ac laoreet tellus pharetra eget.
              Suspendisse potenti. Maecenas at neque eget urna tincidunt
              accumsan. Etiam gravida rutrum malesuada.
            </p>
          </div>
        </div>
      </div>
      {/* Filmowanie */}
      <div>
        <div className="flex w-full justify-between items-baseline">
          <Header>Filmowanie</Header>
          <div className="hidden md:block  transform hover:-translate-y-1 hover:scale-105 transition-all ease-in-out duration-200">
            <NextLink href="/filmowanie">
              <button className="underline">Zobacz więcej</button>
            </NextLink>
          </div>
        </div>
        <div className="grid grid-flow-col grid-rows-3 md:grid-flow-row md:grid-cols-3 md:grid-rows-none gap-8 mt-12">
          {VideoCards.map((videoCard) => (
            <VideoCard key={videoCard.title} {...videoCard} />
          ))}
        </div>
        <div className="md:hidden mt-8">
          <NextLink href="/filmowanie">
            <button className="bg-yellow-500 w-full py-2 px-4 font-bold text-yellow-700 hover:bg-yellow-700 hover:text-white transition-colors ease-in-out duration-200">
              Zobacz więcej
            </button>
          </NextLink>
        </div>
      </div>
      {/* Fotografia */}
      <div>
        <div className="flex w-full justify-between items-baseline">
          <Header>Fotografia</Header>
          <div className="hidden md:block  transform hover:-translate-y-1 hover:scale-105 transition-all ease-in-out duration-200">
            <NextLink href="/fotografia">
              <button className="underline">Zobacz więcej</button>
            </NextLink>
          </div>
        </div>
        <div className="mt-12">
          <MyGallery photos={Photos} />
        </div>
        <div className="md:hidden mt-8">
          <NextLink href="/fotografia">
            <button className="bg-yellow-500 w-full py-2 px-4 font-bold text-yellow-700 hover:bg-yellow-700 hover:text-white transition-colors ease-in-out duration-200">
              Zobacz więcej
            </button>
          </NextLink>
        </div>
      </div>
      {/* FAQ */}
      <div>
        <Header>FAQ</Header>
        <div className="grid grid-flow-row row-gap-6 mt-12">
          {FaqItems.map(({ answer, question }) => (
            <div className="grid grid-flow-col grid-cols-12 col-gap-8">
              <div className="font-medium col-span-5">{question}</div>
              <div className="text-gray-800 col-span-7">{answer}</div>
            </div>
          ))}
        </div>
      </div>
      {/* Kontakt */}
      <div>
        <Header>Kontakt</Header>
        <div className="grid grid-flow-row gap-16 md:grid-flow-col md:grid-cols-2 mt-8">
          <div>
            <p>
              Est ullamco deserunt eiusmod non do qui est quis. Deserunt ut esse
              irure labore dolore aute ullamco sunt irure exercitation labore
              non. Excepteur ea fugiat mollit deserunt amet consectetur irure
              Lorem.
            </p>
            <div className="mt-12 ml-4 grid row-gap-6">
              {SocialItems.map(({ href, icon, name }) => (
                <NextLink key={name} href={href}>
                  <div className="flex cursor-pointer">
                    <div className="fill-current text-black">{icon}</div>
                    <p className="ml-2 capitalize">{name}</p>
                  </div>
                </NextLink>
              ))}
            </div>
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
                    <button type="submit" className="py-2 px-4 bg-yellow-500">
                      Wyślij
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
