import React from "react";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const Bold = ({ children }) => (
  <span style={{ fontWeight: "650", color: "var(--darkTurq)" }}>
    {children}
  </span>
);

const ColorContentful = (richText) => {
  // 1. Verificación más robusta del richText
  if (!richText || !richText.content || !Array.isArray(richText.content)) {
    console.error("Invalid richText data:", richText);
    return null; // O puedes retornar un fallback UI
  }

  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => {
        // 2. Verificación más segura del contenido
        if (!node.content || !Array.isArray(node.content)) return <p>{children}</p>;

        const hasDoubleSlash = node.content.some(
          (item) => item?.nodeType === "text" && item.value?.includes("$")
        );

        if (!hasDoubleSlash) return <p>{children}</p>;

        // 3. Renderizado seguro
        return node.content.map((item, index) => {
          if (item?.nodeType === "text" && item.value?.includes("$")) {
            const parts = item.value.split("$");
            return (
              <React.Fragment key={index}>
                {parts.map((part, i) => (
                  <React.Fragment key={`${index}-${i}`}>
                    {part}
                    {i < parts.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </React.Fragment>
            );
          }
          return children?.[index] || null;
        });
      },
    },
  };

  try {
    return documentToReactComponents(richText, options);
  } catch (error) {
    console.error("Error rendering rich text:", error);
    return null; // O un componente de error
  }
};

export default ColorContentful;