import { Line, parse } from "@progfay/scrapbox-parser";
import { NextPage } from "next";
import Head from "next/head";
import { ScrapboxPageView } from "../components/layout/ScrapboxPageView";

export const Home: NextPage<{ lines: Line[] }> = ({ lines }) => {
  const absoluteUrl = "" + process.env.siteOrigin + process.env.basePath;
  const pageTitle = "Home | " + process.env.siteName;
  const ogImageUrl =
    "" + process.env.siteOrigin + process.env.basePath + "/index.png";

  if (!lines) {
    return <div>loading...</div>;
  }

  return (
    <>
      <Head>
        <title>{"Home | " + process.env.siteName}</title>
        <meta property="og:type" content="article" />
        <meta property="og:url" content={absoluteUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageTitle} />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:image:alt" content="" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
          crossOrigin="anonymous"
        />
      </Head>
      <ScrapboxPageView rawTitle="index" displayTitle="Home" lines={lines} />
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch(
    "https://scrapbox.io/api/pages/" +
      process.env.scrapboxProject +
      "/index/text"
  );
  const text = await res.text();
  const lines = parse(text);
  return {
    props: {
      lines,
    },
  };
}

export default Home;
