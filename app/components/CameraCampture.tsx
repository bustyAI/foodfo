"use client";
import React, { useRef, useState } from "react";

const CameraCampture = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [image, setImage] = useState<string>("");

  const startCamera = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    if (videoRef.current) {
      videoRef.current.srcObject = stream;
      videoRef.current.play();
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
      }
    }
  };

  return (
    <div className=" flex flex-col">
      <video ref={videoRef} style={{ width: "100%" }} />
      <button onClick={startCamera}>Start Camera</button>
      <button onClick={captureImage}>Capture</button>
      <canvas ref={canvasRef} style={{ display: "none" }} />
      {image && <img src={image} alt="Captured" />}
    </div>
  );
};

export default CameraCampture;
