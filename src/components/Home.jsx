import { fetchArticles, fetchTopics } from "../../utils/api";
import { use, useEffect, useState } from "react";
import Articles from "./Articles";
import Topics from "./Topics";

export default function Home() {
  const [articles, updateArticles] = useState([]);
  const [page, updatePage] = useState(0);
  const [topics, updateTopics] = useState(["All"]);
  const [currentTopic, updateSelectedTopic] = useState("All");

  useEffect(() => {
    fetchArticles().then((data) => {
      const articles =
        currentTopic === 0
          ? data
          : data.filter((article) => article.topic === topics[currentTopic]);
      updateArticles(articles);
    });
  }, []);

  useEffect(() => {
    fetchTopics().then((data) => {
      const topics = ["All", ...data.map((topic) => topic.slug)];
      updateTopics(topics);
    });
  }, []);

  // return (
  //   <main>
  //     <div className="overview">
  //       <section>
  //         <h2>Latest articles & recent updates</h2>
  //         <h3>Stay informed with the most recent updates</h3>
  //       </section>
  //       <section>
  //         <input type="text" placeholder="Search for article" />
  //         <button>Search</button>
  //       </section>
  //     </div>
  //     <Topics topics={topics} />
  //     <Articles articles={articles} />
  //     <div></div>
  //   </main>
  // );

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
              {category}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}
