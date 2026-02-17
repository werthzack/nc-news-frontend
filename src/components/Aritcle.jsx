import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchArticleById } from "../../utils/api";
import { formatDate } from "../../utils/time";

export default function Article() {
  const { article_id } = useParams();
  const [article, updateArticle] = useState({});

  useEffect(() => {
    fetchArticleById(article_id).then((article) => {
      updateArticle(article);
    });
  }, []);

  return (
    <main className="article">
      <div>
        <Link to="/">
          <button>← Back to articles</button>
        </Link>
      </div>
      <div>
        <p className="topic">{article.topic}</p>
        <p className="title">{article.title}</p>
      </div>
      <div className="info">
        <p>{article.author}</p>
        <p>{formatDate(article.created_at)}</p>
        <p>{article.votes}</p>
      </div>
      <div className="content">
        <img src={article.article_img_url}></img>
        <p style={{ whiteSpace: "pre-line" }}>{article.body}</p>
      </div>
      <div className="comments"></div>
    </main>
  );
}
