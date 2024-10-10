
import "./SearchPage.css";

const SearchPage = () => {
  return (
    <div className="search-page">
      {/* Hero Section with Search Bar */}
      <div className="hero-section">
        <div className="search-bar-container">
          <input
            type="text"
            placeholder="search by topic, author, year, or keywords"
            className="search-input"
          />
          <button className="search-button">SEARCH</button>
        </div>
      </div>

      {/* Search Results Section */}
      <div className="results-section">
        <h2>Results(4)</h2>
        <div className="thesis-list">
          {Array(4).fill(null).map((_, index) => (
            <div className="thesis-item" key={index}>
              <h3>Defense Technical Information Center (DTIC)</h3>
              <p>Author</p>
              <div className="thesis-actions">
                <button>Abstract</button>
                <button>Read</button>
                <button>Review</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
