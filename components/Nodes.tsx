import { Node } from "@progfay/scrapbox-parser";
import Link from "next/link";

export const Nodes: React.FC<{ depth: number; nodes: Node[] }> = ({
  depth,
  nodes,
}) => {
  return (
    <>
      {nodes.map((node, idx) => {
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
                  maxWidth: "300px",
                  maxHeight: "300px",
                }}
              >
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  alt=""
                  src={node.src}
                />
              </span>
            );
          case "link":
            switch (node.pathType) {
              case "relative":
                return (
                  <Link
                    key={depth + "-" + idx}
                    href={"/" + node.href}
                    style={{ fontSize: "1em" }}
                  >
                    <a>
                      {node.content.length !== 0 ? node.content : node.href}
                    </a>
                  </Link>
                );
              case "absolute":
                return (
                  <Link
                    key={depth + "-" + idx}
                    href={node.href}
                    style={{ fontSize: "1em" }}
                  >
                    <a target="_blank" rel="noreferrer">
                      {node.content.length !== 0 ? node.content : node.href}
                    </a>
                  </Link>
                );
              default:
                break;
            }
          default:
            break;
        }
      })}
    </>
  );
};
