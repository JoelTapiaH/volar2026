import Head from "next/head";

interface SEOHeadProps {
  title?: string;
  description?: string;
}

export default function SEOHead({ title, description }: SEOHeadProps) {
  const fullTitle = title ? `${title} | Volar` : "Volar";

  return (
    <Head>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
    </Head>
  );
}
