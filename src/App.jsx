import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header.jsx";
import Card from "./components/Card.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />

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
        <div className="category">
          <button>All</button>
          <button>Sports</button>
          <button>Games</button>
        </div>
        <div className="article-grid">
          <Card />
          <Card />
        </div>

        <div></div>
      </main>
    </>
  );
}

export default App;
