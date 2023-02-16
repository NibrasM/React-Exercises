import logo from "./logo.svg";
import "./App.css";
import ArticleList from "./components/ArticleList";
import AddArticle from "./components/AddArticle";

import { useState } from "react";

function App() {
  const OriginalArticles = [
    {
      id: 1,
      title: "React Props Tutorial",
      author: "John Doe",
      date: "2022-02-15",
    },
    {
      id: 2,
      title: "10 Tips for Writing Clean Code",
      author: "Jane Smith",
      date: "2022-02-14",
    },
    {
      id: 3,
      title: "The Benefits of Pair Programming",
      author: "Bob Johnson",
      date: "2022-02-13",
    },
  ];

  const [articles, setArticles] = useState(OriginalArticles);

  console.log(articles);

  return (
    <div>
      <ArticleList articles={articles} />
      <AddArticle articles={articles} setArticles={setArticles} />
    </div>
  );
}

export default App;
