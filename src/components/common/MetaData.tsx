import Head from "next/head";
import React from "react";

interface MetaDataProps {
  title?: string;
  //   templateTitle?: string;
  siteName?: string;
  description?: string;
  url?: string;
  type?: string;
  robots?: string;
  image?: string;
}

const defaultMeta: MetaDataProps = {
  title: "Clouder",
  siteName: "Clouder",
  description: "Easy Way To Your Medical Portfolio",
  url: "clouder.com",
  type: "progressive web app",
  robots: "follow, index",
  image: "/src/assests/images/logo.png",
};

const MetaData: React.FC<MetaDataProps> = (props) => {
  const meta: MetaDataProps = {
    ...defaultMeta,
    ...props,
  };
  meta.title = props.title ? `${props.title} | ${meta.siteName}` : meta.title;
  return (
    <div>
      {" "}
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content={meta.robots} />
        <meta content={meta.description} name="description" />

        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="/favicon/ms-icon-144x144.png"
        />
        <meta name="theme-color" content="#ffffff" />
      </Head>
    </div>
  );
};

export default MetaData;
