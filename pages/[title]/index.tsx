import { useRouter } from "next/router";
import { Line, parse } from "@progfay/scrapbox-parser";
import { GetStaticPropsContext } from "next";
import { Lines } from "../../components/Lines";
import Link from "next/link";
import Head from "next/head";

const Page: React.FC<{ lines: Line[] }> = ({ lines }) => {
  const router = useRouter();
  const { title } = router.query;

  if (!lines) {
    return <div>loading...</div>;
  }

  return (
    <>
      <Head>
        <title>
          {title} | {process.env.siteName}
        </title>
      </Head>
      <h2>{title}</h2>
      <Lines lines={lines} />
      <footer>
        <div>
          Edit this page on Scrapbox :{" "}
          <Link
            href={
              "https://scrapbox.io/" + process.env.scrapboxProject + "/" + title
            }
          >
            <a target="_blank" rel="noreferrer">
              {process.env.scrapboxProject}/{title}
            </a>
          </Link>
        </div>
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

export async function getStaticPaths() {
  const res = await fetch(
    "https://scrapbox.io/api/pages/" +
      process.env.scrapboxProject +
      "?skip=0&sort=updated&limit=100&q="
  );
  const json = await res.json();
  const paths = json.pages.map((page: { title: string }) => {
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

export default Page;
