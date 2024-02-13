import React, { useState } from "react";
import './uploadForm.css'

function UploadForm({ onUpload }) {
  const [selectedFile, setSelectedFile] = useState(null);

  const [error, Seterror] = useState(null);

  const allowedTypes = ["images/jpeg", "image/png"];

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    const file = e.target.files[0];
    if (file && allowedTypes.includes(file.type)) {
      setSelectedFile(file);
      Seterror(null);
    } else {
      setSelectedFile(null);
      Seterror("Please Select a Valid Image File(JPG or PNG)");
    }
  };

  const handleSubmit = () => {
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        const imageDataUrl = reader.result;
        onUpload(imageDataUrl);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      <button onClick={handleSubmit} disabled={!selectedFile}>
        Upload
      </button>
    </div>
  );
}

export default UploadForm;
