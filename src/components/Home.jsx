import { fetchArticles, fetchTopics } from "../../utils/api";
import { use, useEffect, useState } from "react";
import { capitalize } from "../../utils/text";
import ArticleCardSkeleton from "./ArticleCardSkeleton";
import ArticleCard from "./ArticleCard";
import Sort from "./Sort";

export default function Home() {
  const [currentArticles, updateArticles] = useState([]);
  const [page, setCurrentPage] = useState(0);
  const [topics, updateTopics] = useState(["All"]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState("date");
  const [currentTopic, updateSelectedTopic] = useState("All");
  const [sortOrder, setSortOrder] = useState("desc");
  const [hasError, setHasError] = useState(false);

  const ITEMS_PER_PAGE = 6;

  const getArticles = async () => {
    setIsLoading(true);
    setHasError(false);

    try {
      const data = await fetchArticles();
      updateArticles(data);
    } catch (error) {
      console.error("Failed to fetch articles:", error);
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getArticles();
  }, []);

  const handleRetry = () => {
    getArticles();
  };

  useEffect(() => {
    fetchTopics().then((data) => {
      const topics = ["All", ...data.map((topic) => topic.slug)];
      updateTopics(topics);
    });
  }, []);

  const toggleSortOrder = () => {
    setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
    setCurrentPage(1);
  };

  const handleSortByChange = (value) => {
    setSortBy(value);
    setCurrentPage(1);
  };

  return (
    <main className="max-width-container main-content">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-text">
          <h1>Latest Stories & Trending Highlights</h1>
          <p>Stay informed with the most recent updates</p>
        </div>

        <div className="search-container">
          <input
            type="text"
            placeholder="Search the case"
            className="search-input"
          />
          <button className="search-button">Search</button>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="category-tabs-container">
        <div className="category-tabs">
          {topics.map((category) => (
            <button
              key={category}
              onClick={() => updateSelectedTopic(category)}
              className={`category-tab ${currentTopic === category ? "active" : ""}`}
            >
              {capitalize(category)}
            </button>
          ))}
        </div>
      </div>

      {/* Sort Controls */}
      <Sort
        handleSortByChange={handleSortByChange}
        toggleSortOrder={toggleSortOrder}
        sortBy={sortBy}
        sortOrder={sortOrder}
      />

      {/* Article Grid */}
      <div className="articles-grid">
        {isLoading ? (
          Array.from({ length: ITEMS_PER_PAGE }, (_, i) => (
            <ArticleCardSkeleton key={i} />
          ))
        ) : hasError ? (
          <div className="error-state">
            <div className="error-icon">
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                width="64"
                height="64"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h2>Failed to Load Articles</h2>
            <p>
              We encountered an error while loading the articles. Please try
              again.
            </p>
            <button onClick={handleRetry} className="retry-button">
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                width="20"
                height="20"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              Retry
            </button>
          </div>
        ) : (
          currentArticles.map((article) => (
            <ArticleCard
              key={article.id}
              id={article.id}
              category={capitalize(article.topic)}
              title={article.title}
              imageUrl={article.article_img_url}
              author={article.author}
              votes={article.votes}
              comment_count={article.comment_count}
              date={article.date}
            />
          ))
        )}
      </div>
    </main>
  );
}
