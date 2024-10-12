import "./Homepage.css";

const Homepage = () => {
  // Simulated data for the featured theses
  const featuredTheses = [
    {
      title: "Defense Technical Information Center (DTIC)",
      author: "Jane Doe",
      abstract: "A study on defense information systems and their impact.",
    },
    {
      title: "Open Access Repository",
      author: "John Smith",
      abstract: "Exploring the benefits of open access publications.",
    },
    {
      title: "Thesis on Quantum Computing",
      author: "Alice Johnson",
      abstract: "An overview of quantum computing advancements in 2023.",
    },
    {
      title: "Artificial Intelligence in Healthcare",
      author: "Dr. Emily Brown",
      abstract: "The role of AI in transforming the healthcare industry.",
    },
  ];

  // Simulated data for the updates
  const updates = [
    {
      title: "New Thesis Submissions Now Open!",
      description:
        "You can now submit your thesis for the upcoming academic year. Check the guidelines before submission.",
    },
    {
      title: "Top 10 Most Downloaded Theses of 2023",
      description:
        "Explore the list of the top 10 most downloaded theses this year. Congratulations to the authors!",
    },
    {
      title: "Thesis Review Feature Released",
      description:
        "We have introduced a new feature where you can leave reviews and feedback on theses you’ve read.",
    },
    {
      title: "Thesis Hub Reaches 1 Million Downloads",
      description:
        "Our platform has reached a significant milestone of 1 million downloads. Thank you to all contributors!",
    },
    {
      title: "Improved Search Functionality",
      description:
        "Our search functionality has been revamped to provide more accurate and faster results.",
    },
  ];

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
            {featuredTheses.map((thesis, index) => (
              <div className="thesis-item" key={index}>
                <h3>{thesis.title}</h3>
                <p>{thesis.author}</p>
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
            {updates.map((update, index) => (
              <div className="update-item" key={index}>
                <h3>{update.title}</h3>
                <p>{update.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
