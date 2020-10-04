import BackgroundVideo from "../components/BackgroundVideo/BackgroundVideo";
import Layout from "../layouts/Layout";

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
    <p className="text-lg">Hello Next.js 👋</p>
  </Layout>
);

export default IndexPage;
