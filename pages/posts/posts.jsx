import React from "react";
import Link from "next/dist/client/link";
import Head from "next/head";
import Layout from "../../components/layout";

const Posts = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>First Post</title>
        </Head>
        <h1>Best First Post</h1>
        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
      </Layout>
    </>
  );
};

export default Posts;
