export default function Sort({
  handleSortByChange,
  toggleSortOrder,
  sortBy,
  sortOrder,
}) {
  return (
    <div className="sort-controls">
      <span className="sort-label">Sort by:</span>
      <div className="sort-select-wrapper">
        <select
          value={sortBy}
          onChange={(e) => handleSortByChange(e.target.value)}
          className="sort-select"
        >
          <option value="date">Date</option>
          <option value="votes">Votes</option>
          <option value="comment_count">Comments</option>
        </select>
        <svg
          className="sort-select-icon"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      <button onClick={toggleSortOrder} className="sort-order-button">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
          />
        </svg>
        {sortOrder === "asc" ? "Ascending" : "Descending"}
      </button>

      {/* <span className="sort-label">Filter by Author:</span>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search the case"
          className="search-input"
        />
      </div> */}
    </div>
  );
}
