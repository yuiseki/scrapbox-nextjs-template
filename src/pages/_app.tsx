import "../styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useEffect, useState } from "react";
import pages from "../../public/data/pages.json";

function MyApp({ Component, pageProps, router }: AppProps) {
  const [pinnedPages, setPinnedPages] = useState<string[]>([]);
  useEffect(() => {
    const title = pages.pages
      .filter((page: { pin: number }) => {
        return 0 < page.pin;
      })
      .map((page: { title: string }) => {
        return page.title;
      });
    setPinnedPages(title);
  }, []);
  return (
    <div className="root">
      <h1>{process.env.siteName}</h1>
      <nav>
        <ul>
          {pinnedPages.map((page) => {
            switch (page) {
              case "index":
                return (
                  <li key={page}>
                    <Link href="/">
                      <a
                        role="button"
                        className={
                          router.pathname === "/"
                            ? "btn btn-primary"
                            : "btn btn-outline-primary"
                        }
                      >
                        Home
                      </a>
                    </Link>
                  </li>
                );
              default:
                return (
                  <li key={page}>
                    <Link href={"/" + page}>
                      <a
                        role="button"
                        className={
                          router.pathname === "/" + page
                            ? "btn btn-primary"
                            : "btn btn-outline-primary"
                        }
                      >
                        {page}
                      </a>
                    </Link>
                  </li>
                );
            }
          })}
        </ul>
      </nav>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
