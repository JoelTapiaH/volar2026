import React from "react";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const Bold = ({ children }) => <span style={{fontWeight: "bold" }}>{children}</span>;

const UnderlinePink = ({ children }) => <span style={{ color: "var(--darkPurple)", fontWeight: "bold" }}>{children}</span>;

const PurpleContentful = (richText) => {
  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
      [MARKS.UNDERLINE]: (text) => <UnderlinePink>{text}</UnderlinePink>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => {
        if (node.content.some((item) => item.nodeType === "text" && item.value.includes("$"))) {
          // Check for '/' in text nodes and replace with <br>
          return node.content.map((item, index) => {
            if (item.nodeType === "text" && item.value.includes("$")) {
              const parts = item.value.split("$");
              const elements = parts.reduce((acc, part, i) => {
                acc.push(part);
                if (i < parts.length - 1) {
                  acc.push(<br key={i} />);
                }
                return acc;
              }, []);
              return <React.Fragment key={index}>{elements}</React.Fragment>;
            } else {
              return children[index];
            }
          });
        } else {
          return <p>{children}</p>;
        }
      },
    },
  };

  return documentToReactComponents(richText, options);
};

export default PurpleContentful;
