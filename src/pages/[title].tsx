import { useRouter } from "next/router";
import { Line, parse } from "@progfay/scrapbox-parser";
import { GetStaticPropsContext, NextPage } from "next";
import { ScrapboxPageView } from "../components/layout/ScrapboxPageView";
import pages from "../../public/data/pages.json";

export const ScrapboxPage: NextPage<{ lines: Line[] }> = ({ lines }) => {
  const router = useRouter();
  const { title } = router.query;

  if (!lines) {
    return <div>loading...</div>;
  }

  return <ScrapboxPageView title={title as string} lines={lines} />;
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
