"use client";
import React, { useRef, useState } from "react";
import ButtonNoHref from "./ButtonNoHref";

const CameraCampture = () => {
  const [image, setImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Trigger the hidden input element here
  const handleStartCapture = () => {
    fileInputRef.current?.click();
  };

  const handleRedoCapture = () => {
    setImage(null);
  };

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
        <div className="flex flex-col justify-center items-center">
          <label>
            <ButtonNoHref onClick={handleStartCapture} text="Start Capture" />
            <input
              type="file"
              accept="image/*"
              capture="environment"
              style={{ display: "none" }}
              ref={fileInputRef}
              onChange={handleCapture}
            />
          </label>
        </div>
      )}

      {image && (
        <div className="flex flex-col justify-center items-center">
          <h3>Captured Image:</h3>
          <img
            className="w-[50%]"
            src={image}
            alt="captured"
            style={{ width: "50%" }}
          />
          <ButtonNoHref onClick={handleRedoCapture} text="Redo Capture" />
        </div>
      )}
    </div>
  );
};

export default CameraCampture;
