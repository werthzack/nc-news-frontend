import { Link } from "react-router-dom";
import Card from "./Card";

export default function Articles({ articles }) {
  return (
    <div className="article-grid">
      {articles.map((article) => {
        return <Card article={article} />;
      })}
    </div>
  );
}
