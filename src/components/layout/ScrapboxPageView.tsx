import { Line } from "@progfay/scrapbox-parser";
import Head from "next/head";
import Link from "next/link";
import { Lines } from "../scrapbox/Lines";

export const ScrapboxPageView: React.FC<{ title: string; lines: Line[] }> = ({
  title,
  lines,
}) => {
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
          Scrapboxで編集 :{" "}
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
          GitHubで使う :{" "}
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
