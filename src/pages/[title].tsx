import { useRouter } from "next/router";
import { Line, parse } from "@progfay/scrapbox-parser";
import { GetStaticPropsContext, NextPage } from "next";
import { ScrapboxPageView } from "../components/layout/ScrapboxPageView";
import pages from "../../public/data/pages.json";
import Head from "next/head";

export const ScrapboxPage: NextPage<{ lines: Line[] }> = ({ lines }) => {
  const router = useRouter();
  const { title } = router.query;

  const absoluteUrl =
    "" + process.env.siteOrigin + process.env.basePath + "/" + title;
  const pageTitle = title + " | " + process.env.siteName;
  const ogImageUrl =
    "" + process.env.siteOrigin + process.env.basePath + "/index.png";

  if (!lines) {
    return <div>loading...</div>;
  }

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta property="og:type" content="article" />
        <meta property="og:url" content={absoluteUrl} />
        <meta property="og:description" content={pageTitle} />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:image:alt" content="" />
      </Head>
      <ScrapboxPageView
        rawTitle={title as string}
        displayTitle={title as string}
        lines={lines}
      />
    </>
  );
};

export async function getStaticPaths() {
  const paths = pages.pages.map((page: { title: string }) => {
    return "/" + encodeURIComponent(page.title);
  });
  return { paths: paths, fallback: false };
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  if (!params) {
    return {
      props: {
        lines: undefined,
      },
    };
  }
  const res = await fetch(
    "https://scrapbox.io/api/pages/" +
      process.env.scrapboxProject +
      "/" +
      params.title +
      "/text"
  );
  const text = await res.text();
  const lines = parse(text);

  return {
    props: {
      lines,
    },
  };
}

export default ScrapboxPage;
