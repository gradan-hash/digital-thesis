
import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-text">
          <h1>Thesis hub</h1>
          <p>
            A one stop repository of digital collections of academic theses and
            dissertations made available for public access and use.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="content-section">
        {/* Featured Section */}
        <div className="featured-section">
          <h2>Featured</h2>
          <div className="thesis-list">
            {Array(4)
              .fill(null)
              .map((_, index) => (
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

        {/* Updates Section */}
        <div className="updates-section">
          <h2>Updates</h2>
          <div className="updates-list">
            {Array(5)
              .fill(null)
              .map((_, index) => (
                <div className="update-item" key={index}>
                  <h3>What is Lorem Ipsum</h3>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
