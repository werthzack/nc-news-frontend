import { fetchArticles, fetchTopics } from "../../utils/api";
import { useEffect, useState } from "react";
import Articles from "./Articles";
import Topics from "./Topics";

export default function Home() {
  const [articles, updateArticles] = useState([]);
  const [page, updatePage] = useState(0);
  const [topics, updateTopics] = useState(["All"]);
  const [currentTopic, updateCurrent] = useState(0);

  useEffect(() => {
    fetchArticles().then((data) => {
      const topics =
        currentTopic === 0
          ? data
          : data.filter((article) => article.topic === topics[currentTopic]);
    }),
      currentTopic;

    fetchTopics().then((data) => {
      const topics = data.map((topic) => topic.slug);
      updateTopics(["All", ...topics]);
    });
  }, []);

  return (
    <main>
      <div className="overview">
        <section>
          <h2>Latest articles & recent updates</h2>
          <h3>Stay informed with the most recent updates</h3>
        </section>
        <section>
          <input type="text" placeholder="Search for article" />
          <button>Search</button>
        </section>
      </div>
      <Topics topics={topics} />
      <Articles articles={articles} />
      <div></div>
    </main>
  );
}
