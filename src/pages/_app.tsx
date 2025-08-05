import { type AppType } from "next/dist/shared/lib/utils";
import Head from "next/head";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>AdaptED</title>
        <meta
          name="description"
          content="AdaptED - A web app written with React, TypeScript, Next.js, TailwindCSS, and Zustand."
        />
        <link rel="icon" href="/3665909.png" />
        <meta name="theme-color" content="#1E90FF" />
        <link rel="manifest" href="/app.webmanifest" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
