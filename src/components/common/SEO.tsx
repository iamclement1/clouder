import React from "react";
import Head from "next/head";

interface SeoProps {
  templateTitle?: string;
  robots?: string;
}

const defaultMeta = {
  title: "Clouder",
  description: "Easy Way To Your Medical Portfolio",
  image:
    "http://localhost:3001/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.b935b7de.png&w=640&q=75",
};

export default function Seo(props: SeoProps) {
  const meta = {
    ...defaultMeta,
    ...props,
  };
  meta.title = props.templateTitle
    ? `${props.templateTitle} | ${meta.title}`
    : meta.title;

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="robots" content={meta.robots} />
      <meta name="description" content={meta.description} />

      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta
        name="msapplication-TileImage"
        content="/favicon/ms-icon-144x144.png"
      />
      <meta name="theme-color" content="#ffffff" />
      {/* <link
        rel="shortcut icon"
        href="@/assets/images/MTN_2022_Logo_Yellow.png"
        type="image/x-icon"
      /> */}
    </Head>
  );
}
