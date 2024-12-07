"use client";
import React, { useRef, useState } from "react";

const CameraCampture = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [image, setImage] = useState<string>("");
  const [cameraActive, setCameraActive] = useState<boolean>(false);

  const startCamera = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    if (videoRef.current) {
      videoRef.current.srcObject = stream;
      videoRef.current.play();
      setCameraActive(true);
    }
  };

  const captureImage = () => {
    if (videoRef.current && canvasRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      const video = videoRef.current;

      if (context) {
        canvas.width = video.width;
        canvas.height = video.height;
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        setImage(canvas.toDataURL("image/png"));

        const stream = video.srcObject as MediaStream;
        stream.getTracks().forEach((track) => track.stop());
        setCameraActive(false);
      }
    }
  };

  return (
    <div className="flex flex-col">
      {!cameraActive && !image && (
        <button onClick={startCamera}>Start Camera</button>
      )}
      {cameraActive && (
        <div>
          <video ref={videoRef} style={{ width: "100%" }} />
          <button onClick={captureImage}>Capture</button>
        </div>
      )}
      <canvas ref={canvasRef} style={{ display: "none" }} />
      {image && (
        <div>
          <h3>Captured Image:</h3>
          <img src={image} alt="Captured" style={{ width: "100%" }} />
        </div>
      )}
    </div>
  );
};

export default CameraCampture;
