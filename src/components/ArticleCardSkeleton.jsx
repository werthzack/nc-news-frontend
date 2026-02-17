export default function ArticleCardSkeleton() {
  return (
    <div className="article-card skeleton-card">
      {/* Image Skeleton */}
      <div className="article-image-container">
        <div className="skeleton skeleton-image"></div>
        <div className="article-category-badge">
          <div className="skeleton skeleton-badge"></div>
        </div>
      </div>

      {/* Content Skeleton */}
      <div className="article-content">
        <div className="skeleton skeleton-title"></div>
        <div className="skeleton skeleton-title skeleton-title-short"></div>

        <div className="article-tags">
          <div className="skeleton skeleton-tag"></div>
          <div className="skeleton skeleton-tag"></div>
          <div className="skeleton skeleton-tag"></div>
        </div>

        <div className="article-meta">
          <div className="article-meta-left">
            <div className="skeleton skeleton-meta"></div>
            <div className="skeleton skeleton-meta"></div>
          </div>
          <div className="skeleton skeleton-meta"></div>
        </div>
      </div>
    </div>
  );
}
