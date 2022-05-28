import { useRouter } from "next/router";
import { parse } from "@progfay/scrapbox-parser";

const Nodes = ({ depth, nodes }) => {
  return (
    <>
      {nodes.map((node, idx) => {
        console.log(node);
        switch (node.type) {
          case "plain":
            return (
              <span style={{ fontSize: "1em" }} key={depth + "-" + idx}>
                {node.text}
              </span>
            );
          case "strong":
            return (
              <span
                key={depth + "-" + idx}
                style={{
                  fontWeight: "bold",
                  fontSize: "1em",
                }}
              >
                <Nodes depth={depth++} nodes={node.nodes} />
              </span>
            );
          case "decoration":
            const size = parseInt(node.decos[0].substr(2));
            return (
              <span
                key={depth + "-" + idx}
                style={{
                  fontWeight: "bold",
                  fontSize: size === 1 ? "1em" : size * 0.5 + "em",
                }}
              >
                <Nodes depth={depth++} nodes={node.nodes} />
              </span>
            );
          case "image":
            return (
              <span
                key={depth + "-" + idx}
                style={{
                  display: "inline-block",
                  width: "300px",
                  height: "300px",
                }}
              >
                <img width={300} alt="" src={node.src} />
              </span>
            );
          case "link":
            return (
              <a
                key={depth + "-" + idx}
                href={node.href}
                target="_blank"
                rel="noreferrer"
                style={{ fontSize: "1em" }}
              >
                {node.content.length !== 0 ? node.content : node.href}
              </a>
            );
          default:
            break;
        }
      })}
    </>
  );
};

const Page = ({ lines }) => {
  const router = useRouter();
  const { title } = router.query;

  if (!lines) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <h1>{title}</h1>
      {lines.map((line, idx) => {
        console.log();
        if (line.nodes?.length > 0) {
          return (
            <div
              key={idx}
              style={{
                padding: "5px " + line.indent * 10 + "px",
              }}
            >
              <Nodes depth={0} nodes={line.nodes} />
            </div>
          );
        } else {
          return <div key={idx} />;
        }
      })}
    </div>
  );
};

export async function getStaticPaths() {
  console.log("getStaticPaths");
  const res = await fetch(
    "https://scrapbox.io/api/pages/yuiseki?skip=0&sort=updated&limit=100&q="
  );
  const json = await res.json();
  const paths = json.pages.map((page) => {
    return "/" + encodeURIComponent(page.title);
  });
  return { paths: paths, fallback: true };
}

export async function getStaticProps({ params }) {
  console.log("getStaticProps");
  const res = await fetch(
    "https://scrapbox.io/api/pages/yuiseki/" + params.title + "/text"
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
