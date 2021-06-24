import Head from "next/head";
import ArticleList from "../components/ArticleList";
import Layout from "../components/Layout";
import Image from "next/image";
import styles from "../styles/Layout.module.css";

export default function Home({ articles }) {
  return (
    <div>
      <Head>
        <title>DIY How-Tos</title>
        <meta name="keywords" content="homeownership, diy" />
      </Head>
      <ArticleList articles={articles} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=6`
  );
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
