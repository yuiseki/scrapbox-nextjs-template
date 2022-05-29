import { Line, parse } from "@progfay/scrapbox-parser";
import { NextPage } from "next";
import { ScrapboxPageView } from "../components/layout/ScrapboxPageView";

export const Home: NextPage<{ lines: Line[] }> = ({ lines }) => {
  if (!lines) {
    return <div>loading...</div>;
  }

  return <ScrapboxPageView title="Home" lines={lines} />;
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
