"use client";
import React, { useRef, useState } from "react";
import ButtonNoHref from "./ButtonNoHref";
import ReceiptOCR from "./ReceiptOCR";

const CameraCapture = ({
  refreshPantry,
}: {
  refreshPantry: () => Promise<void>;
}) => {
  const [image, setImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

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
      reader.onerror = () => alert("Failed to read file. Please try again.");
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
          <img className="w-[20%]" src={image} alt="captured-image" />
          <ButtonNoHref onClick={handleRedoCapture} text="Redo Capture" />
          <ReceiptOCR image={image} refreshPantry={refreshPantry} />
        </div>
      )}
    </div>
  );
};

export default CameraCapture;
