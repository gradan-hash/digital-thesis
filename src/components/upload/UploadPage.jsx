import  { useState } from "react";
import "./UploadPage.css";

const UploadPage = () => {
  const [title, setTitle] = useState("");
  const [abstract, setAbstract] = useState("");
  const [file, setFile] = useState(null);
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      title,
      abstract,
      file,
      comment,
      rating,
    });
  };

  return (
    <div className="upload-page">
      <h1>Paper Upload Center</h1>
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
          <label htmlFor="file">Paper</label>
          <input
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
            required
          />
        </div>

        {/* Peer Review Section */}
        <div className="peer-review-section">
          <h2>Peer Review</h2>
          <p className="paper-title">Paper Title</p>
          <p className="paper-abstract">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s...
          </p>

          <div className="form-group">
            <label htmlFor="comment">Comment</label>
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

        <button type="submit" className="upload-button">
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default UploadPage;
