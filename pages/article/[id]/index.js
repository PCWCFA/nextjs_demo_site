import { Link } from "next/link";
import { server } from "../../../config";
import Meta from "../../../components/Meta";

const article = (article) => {
  return (
    <>
      <Meta
        title={article.article.title}
        description={article.article.excerpt}
      />
      <h1>{article.article.title}</h1>
      <p> {article.article.body}</p>
    </>
  );
};

// This will get each page as they are required by the user.
/*
export const getServerSideProps = async (context) => {
  console.log("----------\nid", context.params.id);
  const res = await fetch(
    `http://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );

  const article = await res.json();
  console.log("---------------\narticle", article);

  return {
    props: { article },
  };
};*/

// This will get all the posts from the server at build
/*
export const getStaticProps = async (context) => {
  console.log("----------\nid", context.params.id);
  const res = await fetch(
    `http://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );

  const article = await res.json();
  console.log("---------------\narticle", article);

  return {
    props: { article },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`http://jsonplaceholder.typicode.com/posts/`);
  const articles = await res.json();

  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths: paths,
    fallback: false,
  };
};
*/

// Fetch from this app's own API
export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/articles/${context.params.id}`);
  const article = await res.json();
  return {
    props: { article },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();
  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths: paths,
    fallback: false,
  };
};

export default article;
