import ArticleList from "../components/ArticleList";
import { server } from "../config/";

export default function Home(articles) {
  return (
    <div>
      <title> Webdev News </title>
      <ArticleList articles={articles.articles} />
    </div>
  );
}

// query this app's own API
export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};

/*
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
*/
