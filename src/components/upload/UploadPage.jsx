import  { useState } from "react";
import "./UploadPage.css";

const UploadPage = () => {
  const [title, setTitle] = useState("");
  const [abstract, setAbstract] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      title,
      abstract,
      file,
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

        <button type="submit" className="upload-button">
          UPLOAD
        </button>
      </form>
    </div>
  );
};

export default UploadPage;
