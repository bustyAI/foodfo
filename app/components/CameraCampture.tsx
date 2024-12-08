"use client";
import React, { useState } from "react";

const CameraCampture = () => {
  const [image, setImage] = useState<string | null>(null);

  const handleCapture = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div>
      {!image && (
        <label>
          <button>Start Capture</button>
          <input
            type="file"
            accept="image/*"
            capture="environment"
            style={{ display: "none" }}
            onChange={handleCapture}
          />
        </label>
      )}

      {image && (
        <div>
          <h3>Captured Image:</h3>
          <img src={image} alt="captured" style={{ width: "100%" }} />
        </div>
      )}
    </div>
  );
};

export default CameraCampture;
