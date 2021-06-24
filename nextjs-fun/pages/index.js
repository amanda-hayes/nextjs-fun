import Head from "next/head";
import Layout from "../components/Layout";
import Image from "next/image";
import styles from "../styles/Layout.module.css";

export default function Home({ articles }) {
  console.log(articles);
  return (
    <div>
      <Head>
        <title>DIY How-Tos</title>
        <meta name="keywords" content="homeownership, diy" />
      </Head>
      <h1>Welcome!</h1>
      <p>
        Here you will find no-nonsense tips and tricks for completing all of
        your home projects.
      </p>
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
