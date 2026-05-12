import React from "react";
import Head from "next/head";
import useContentful from "../../../utils/useContentful";

const FooterID = "58imnflvliRZe777xbsxA6";

export default function SST() {
  const { data } = useContentful({ id: FooterID });

  if (!data || !data.fields) return null;

  const field = data.fields.contactSST;
  const pdfUrl: string | null = field?.fields?.file?.url
    ? `https:${field.fields.file.url}`
    : null;

  const viewerUrl = pdfUrl
    ? `https://docs.google.com/viewer?url=${encodeURIComponent(pdfUrl)}&embedded=true`
    : null;

  return (
    <>
      <Head>
        <title>SST — Volar</title>
        <meta name="robots" content="noindex" />
      </Head>
      <div style={{ width: "100%", height: "calc(100vh - 80px)", display: "flex", flexDirection: "column" }}>
        {viewerUrl ? (
          <iframe src={viewerUrl} style={{ flex: 1, border: "none", width: "100%", height: "100%" }} title="SST" />
        ) : (
          <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", color: "gray" }}>
            Documento no disponible.
          </div>
        )}
      </div>
    </>
  );
}
