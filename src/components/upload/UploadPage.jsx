import { useState } from "react";
import "./UploadPage.css";

const UploadPage = () => {
  const [title, setTitle] = useState("");
  const [abstract, setAbstract] = useState("");
  const [file, setFile] = useState(null);
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      title,
      abstract,
      file,
      comment,
      rating,
    });
    setSubmitted(true);
  };

  return (
    <div className="upload-page">
      <h1>Paper Upload Center</h1>

      {/* Submission Guidelines and Template Downloads */}
      <div className="guidelines-section">
        <h2>Submission Guidelines</h2>
        <p>
          Before submitting your thesis, please ensure you adhere to our
          guidelines. You can download the guidelines and templates below.
        </p>
        <div className="guidelines-links">
          <a href="/path-to-guidelines.pdf" download>
            Download Submission Guidelines (PDF)
          </a>
          <a href="/path-to-template.docx" download>
            Download Thesis Template (DOCX)
          </a>
        </div>
      </div>

      {/* Thesis Submission Form */}
      <form onSubmit={handleSubmit} className="upload-form">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter paper title"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="abstract">Abstract</label>
          <textarea
            id="abstract"
            value={abstract}
            onChange={(e) => setAbstract(e.target.value)}
            placeholder="Enter paper abstract"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="file">Upload Paper</label>
          <input
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
            required
          />
        </div>

        <button type="submit" className="upload-button">
          UPLOAD
        </button>
      </form>

      {/* Confirmation and Tracking System */}
      {submitted && (
        <div className="confirmation-section">
          <h2>Submission Confirmation</h2>
          <p>
            Thank you for your submission! Your thesis has been uploaded and is
            under review. You can track your submission status via your profile.
          </p>
        </div>
      )}

      {/* Peer Review Section */}
      <div className="peer-review-section">
        <h2>Peer Review</h2>
        <p className="paper-title">Paper Title</p>
        <p className="paper-abstract">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s...
        </p>

        <div className="form-group">
          <label htmlFor="comment">Leave a Comment</label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Please leave a comment"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="rating">Rating</label>
          <input
            type="text"
            id="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            placeholder="Rate this paper on a scale of 1-10"
            required
          />
        </div>
      </div>
    </div>
  );
};

export default UploadPage;
