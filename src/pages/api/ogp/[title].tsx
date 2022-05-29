// https://zenn.dev/tdkn/articles/c52a0cc7bea561

import ReactDOM from "react-dom/server";
import * as playwright from "playwright-aws-lambda";
import React from "react";
import { NextApiRequest, NextApiResponse } from "next";

const styles = `
  html, body {
    height: 100%;
    display: grid;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 24px;
  }

  h1 {
    margin: auto;
    padding: 0 30px;
    font-size: 3em;
  }

  h2 {
    margin: auto;
    padding: 0 30px;
    font-size: 2em;
  }

  div.logo {
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 10px;
    right: 10px;
  }

  div.logo span {
    font-size: 1.5em;
    margin: 0 20px;
  }
`;

const Content: React.FC<{ title: string }> = ({ title }) => {
  const logoPath =
    "" + process.env.siteOrigin + process.env.basePath + "/logo-mini.jpg";
  if (title.length === 0 || title === "index") {
    return (
      <html>
        <head>
          <style>{styles}</style>
        </head>
        <body>
          <h1>
            <span>{process.env.siteName}</span>
          </h1>
          <h2>
            <img src={logoPath} />
          </h2>
        </body>
      </html>
    );
  } else {
    return (
      <html>
        <head>
          <style>{styles}</style>
        </head>
        <body>
          <h2>{title}</h2>
          <div className="logo">
            <span>{process.env.siteName}</span>
            <img src={logoPath} />
          </div>
        </body>
      </html>
    );
  }
};

const Handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const viewport = { width: 1200, height: 630 };

  const browser = await playwright.launchChromium({ headless: true });
  const page = await browser.newPage({ viewport });

  const { title } = req.query;
  const fixedTitle = (title as string).replace(/(.*)\.png$/, "$1");
  const markup = ReactDOM.renderToStaticMarkup(<Content title={fixedTitle} />);
  const html = `<!doctype html>${markup}`;

  await page.setContent(html, { waitUntil: "domcontentloaded" });
  const image = await page.screenshot({ type: "png" });
  await browser.close();

  //res.setHeader("Cache-Control", "s-maxage=31536000, stale-while-revalidate");
  res.setHeader("Content-Type", "image/png");
  res.end(image);
};

export default Handler;
