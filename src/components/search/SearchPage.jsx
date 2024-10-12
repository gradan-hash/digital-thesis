import  { useState } from "react";
import "./SearchPage.css";

const SearchPage = () => {
  // State for search inputs
  const [topic, setTopic] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  const [keywords, setKeywords] = useState("");
  const [results, setResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  // Simulated data for theses
  const thesisData = [
    {
      title: "Defense Technical Information Center (DTIC)",
      author: "Jane Doe",
      year: "2023",
      abstract: "A study on defense information systems.",
    },
    {
      title: "Quantum Computing Advances",
      author: "John Smith",
      year: "2022",
      abstract: "A deep dive into quantum computing.",
    },
    {
      title: "Artificial Intelligence in Healthcare",
      author: "Alice Johnson",
      year: "2021",
      abstract: "The role of AI in healthcare.",
    },
    {
      title: "Open Access Repository",
      author: "Michael Brown",
      year: "2020",
      abstract: "Exploring the benefits of open access publications.",
    },
    // More sample data can be added here
  ];

  // Handler for the search functionality
  const handleSearch = () => {
    // Filter the thesisData based on search criteria
    const filteredResults = thesisData.filter((thesis) => {
      return (
        (!topic || thesis.title.toLowerCase().includes(topic.toLowerCase())) &&
        (!author ||
          thesis.author.toLowerCase().includes(author.toLowerCase())) &&
        (!year || thesis.year === year) &&
        (!keywords ||
          thesis.abstract.toLowerCase().includes(keywords.toLowerCase()))
      );
    });
    setResults(filteredResults);
    setCurrentPage(1); // Reset to the first page when a new search is made
  };

  // Pagination logic (assuming 2 results per page)
  const resultsPerPage = 2;
  const totalPages = Math.ceil(results.length / resultsPerPage);
  const displayedResults = results.slice(
    (currentPage - 1) * resultsPerPage,
    currentPage * resultsPerPage
  );

  return (
    <div className="search-page">
      {/* Hero Section with Search Bar */}
      <div className="hero-section">
        <div className="search-bar-container">
          <input
            type="text"
            placeholder="Search by topic"
            className="search-input"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />
          <input
            type="text"
            placeholder="Search by author"
            className="search-input"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <input
            type="text"
            placeholder="Search by year"
            className="search-input"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
          <input
            type="text"
            placeholder="Search by keywords"
            className="search-input"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
          />
          <button className="search-button" onClick={handleSearch}>
            SEARCH
          </button>
        </div>
      </div>

      {/* Search Results Section */}
      <div className="results-section">
        <h2>Results ({results.length})</h2>
        <div className="thesis-list">
          {displayedResults.map((thesis, index) => (
            <div className="thesis-item" key={index}>
              <h3>{thesis.title}</h3>
              <p>Author: {thesis.author}</p>
              <p>Year: {thesis.year}</p>
              <div className="thesis-actions">
                <button>Abstract</button>
                <button>Read</button>
                <button>Review</button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="pagination">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}>
              Previous
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}>
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
