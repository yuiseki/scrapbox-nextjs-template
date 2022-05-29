import { Line } from "@progfay/scrapbox-parser";
import { Nodes } from "./Nodes";

export const Lines: React.FC<{ lines: Line[] }> = ({ lines }) => {
  return (
    <>
      {lines.map((line, idx) => {
        if (line.nodes?.length > 0) {
          return (
            <div
              key={idx}
              style={{
                padding: "5px " + line.indent * 20 + "px",
              }}
            >
              <Nodes depth={0} nodes={line.nodes} />
            </div>
          );
        } else {
          return <div key={idx} />;
        }
      })}
    </>
  );
};
