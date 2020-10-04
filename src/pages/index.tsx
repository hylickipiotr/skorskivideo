import React from "react";
import BackgroundVideo from "../components/BackgroundVideo/BackgroundVideo";
import Header from "../components/Header/Header";
import Layout from "../layouts/Layout";
import NextLink from "next/link";
import { VideoCards } from "../utils/videoCards";
import VideoCard from "../components/VideoCard/VideoCard";

const IndexPage = () => (
  <Layout title="Next.js + Typescript + Tailwind">
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
    <div className="container mx-auto px-4 py-12 md:px-0 md:py-24">
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
      <div className="mt-16 md:mt-24">
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
            <VideoCard {...videoCard} />
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
    </div>
  </Layout>
);

export default IndexPage;
