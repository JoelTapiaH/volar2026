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

  const viewerUrl = pdfUrl
    ? `https://docs.google.com/viewer?url=${encodeURIComponent(pdfUrl)}&embedded=true`
    : null;

  return (
    <>
      <Head>
        <title>Derecho Arco — Volar</title>
        <meta name="robots" content="noindex" />
      </Head>
      <div style={{ width: "100%", height: "100vh", display: "flex", flexDirection: "column" }}>
        <div style={{ padding: "1em 2em", background: "var(--Softturq)", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5em" }}>
          <h1 style={{ color: "var(--darkTurq)", margin: 0, fontSize: "clamp(16px, 2vw, 24px)" }}>
            Derecho Arco
          </h1>
          {pdfUrl && (
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundColor: "var(--darkTurq)", color: "white", padding: "0.5em 1.2em", borderRadius: "8px", textDecoration: "none", fontSize: "clamp(13px, 1.5vw, 16px)", fontWeight: 600 }}
            >
              Abrir PDF ↗
            </a>
          )}
        </div>
        {viewerUrl ? (
          <iframe src={viewerUrl} style={{ flex: 1, border: "none", width: "100%" }} title="Derecho Arco" />
        ) : (
          <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", color: "gray" }}>
            Documento no disponible.
          </div>
        )}
      </div>
    </>
  );
}
