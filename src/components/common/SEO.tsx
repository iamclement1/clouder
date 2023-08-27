import Head from "next/head";
import React from "react";

interface SEOProps {
  title?: string;
  description?: string;
  robots?: string;
  image?: string;
}

const defaultSEO: SEOProps = {
  title: "Clouder",
  description: "Easy Way To Your Medical Portfolio",
  //   url: "clouder.com",
  //   type: "progressive web app",
  robots: "follow, index",
  image: "/src/assests/images/logo.png",
};
const SEO: React.FC<SEOProps> = (props) => {
  const meta: SEOProps = {
    ...defaultSEO,
    ...props,
  };
  meta.title = props.title ? `${props.title} ` : meta.title;
  return (
    <Head>
      <title key="title">{meta.title}</title>
      <meta name="robots" content={meta.robots} />
      <meta content={meta.description} name="description" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/src/assests/images/logo.png"
      />
    </Head>
  );
};

export default SEO;
