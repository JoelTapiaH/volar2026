import React from "react";
import Head from "next/head";
import useContentful from "../../../utils/useContentful";

const FooterID = "58imnflvliRZe777xbsxA6";

export default function DerechoArco() {
  const { data } = useContentful({ id: FooterID });

  if (!data || !data.fields) return null;

  const field = data.fields.contactDerechoArco;
  const pdfUrl: string | null = field?.fields?.file?.url
    ? `https:${field.fields.file.url}`
    : null;

  return (
    <>
      <Head>
        <title>Derecho Arco — Volar</title>
        <meta name="robots" content="noindex" />
      </Head>
      <div style={{ width: "100%", height: "100vh", display: "flex", flexDirection: "column" }}>
        <div style={{ padding: "1em 2em", background: "var(--Softturq)" }}>
          <h1 style={{ color: "var(--darkTurq)", margin: 0, fontSize: "clamp(16px, 2vw, 24px)" }}>
            Derecho Arco
          </h1>
        </div>
        {pdfUrl ? (
          <iframe src={pdfUrl} style={{ flex: 1, border: "none", width: "100%" }} title="Derecho Arco" />
        ) : (
          <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", color: "gray" }}>
            Documento no disponible.
          </div>
        )}
      </div>
    </>
  );
}
