import ImageWithFallback from "../fallback/ImageWithFallback";

function NavigateToArticle(id) {
  // Handle article click, e.g., navigate to article details page
}

export default function ArticleCard({
  imageUrl,
  title,
  category,
  author,
  votes,
  comment_count,
  date,
  id,
}) {
  return (
    <article onClick={(e) => NavigateToArticle(id)} className="article-card">
      {/* Image */}
      <div className="article-image-container">
        <ImageWithFallback
          src={imageUrl}
          alt={title}
          className="article-image"
        />
        <div className="article-category-badge">
          <span className="category-badge">{category}</span>
        </div>
      </div>

      {/* Content */}
      <div className="article-content">
        <h3 className="article-title">{title}</h3>

        {/* Meta Information */}
        <div className="article-meta">
          <div className="article-meta-left">
            <div className="meta-item">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <span>{author}</span>
            </div>
            <div className="meta-item">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 11l5-5m0 0l5 5m-5-5v12"
                />
              </svg>
              <span>{votes}</span>
            </div>
            <div className="meta-item">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              <span>{comment_count}</span>
            </div>
          </div>
          {date && (
            <div className="meta-date">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span>{date}</span>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
