import { Line, parse } from "@progfay/scrapbox-parser";
import type { GetStaticPropsContext, NextPage } from "next";
import Link from "next/link";
import { Lines } from "../components/Lines";

const Home: NextPage<{ lines: Line[] }> = ({ lines }) => {
  return (
    <div>
      <Lines lines={lines} />
    </div>
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
