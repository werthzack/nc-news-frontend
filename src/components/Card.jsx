import { Link } from "react-router-dom";
import { formatRelativeTime } from "../../utils/time";

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
  );
}

function Card({ article }) {
  return (
    <div key={article.article_id} className="card">
      <img
        src={article.article_img_url}
        alt="Organize Basic Set (Walnut)"
      ></img>
      <div className="article-info">
        <div>
          <span>
            {article.topic.charAt(0).toUpperCase() + article.topic.slice(1)}
          </span>
          <Link to={`articles/${article.article_id}`}>{article.title}?</Link>
        </div>
        <div className="details">
          <Icon />
          <Link
            onClick={(e) => {
              e.stopPropagation();
            }}
            to={`/authors/${article.author}`}
          >
            {article.author}
          </Link>
          <p>Votes: {article.votes}</p>
          <p>Comments: {article.comment_count}</p>
          <p>Date: {formatRelativeTime(article.created_at)}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
