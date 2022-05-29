import { Line, parse } from "@progfay/scrapbox-parser";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Lines } from "../components/Lines";

const Home: NextPage<{ lines: Line[] }> = ({ lines }) => {
  return (
    <>
      <Head>
        <title>Home | {process.env.siteName}</title>
      </Head>
      <Lines lines={lines} />
      <footer>
        <div>
          Use this at GitHub :{" "}
          <Link href="https://github.com/yuiseki/scrapbox-nextjs-template">
            <a target="_blank" rel="noreferrer">
              yuiseki/scrapbox-nextjs-template
            </a>
          </Link>
        </div>
      </footer>
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
