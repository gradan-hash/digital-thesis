import "./AboutPage.css";
import image1 from "../../assets/image2.jpeg";
import person1 from "../../assets/person1.jpeg";
import person2 from "../../assets/person2.jpeg";
import person3 from "../../assets/person3.jpeg";
import person4 from "../../assets/peson4.jpeg";

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-text">
          <h1>Our Mission</h1>
          <p>
            A one stop repository of digital collections of academic theses and
            dissertations made available for public access and use.
          </p>
        </div>
      </div>

      {/* Who we are Section */}
      <div className="who-we-are-section">
        <h2>Who we are</h2>
        <div className="who-we-are-content">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <img src={image1} alt="Person Reading" className="who-we-are-image" />
        </div>
      </div>

      {/* Our Team Section */}
      <div className="our-team-section">
        <h2>Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src={person1} alt="Jane Doe" className="team-photo" />
            <h3>Jane Doe</h3>
            <p>Frontend Engineer</p>
          </div>
          <div className="team-member">
            <img src={person2} alt="John Doe" className="team-photo" />
            <h3>John Doe</h3>
            <p>Backend Engineer</p>
          </div>
          <div className="team-member">
            <img src={person3} alt="Foo Bar" className="team-photo" />
            <h3>Foo Bar</h3>
            <p>Database Admin</p>
          </div>
          <div className="team-member">
            <img src={person4} alt="Lorem Ipsum" className="team-photo" />
            <h3>Lorem Ipsum</h3>
            <p>Data Analyst</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
