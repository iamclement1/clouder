import React from "react";
import Head from "next/head";

type Props = {
  title?: string;
  keywords?: string;
  description?: string;
};

export const Meta = ({
  title = "Clouder",
  keywords = "A medical portfolio",
  description = "Get the latest news in web dev",
}: Props) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
};
