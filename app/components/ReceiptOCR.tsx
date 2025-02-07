"use client";
import React from "react";

// Components
import Loading from "./Loading";

// Hooks
import useReceiptOCR from "../hooks/useReceiptOCR";

// API calls
import { processOcrData } from "@/utils/api";

const ReceiptOCR = ({
  image,
  refreshPantry,
}: {
  image: string;
  refreshPantry: () => Promise<void>;
}) => {
  const { ocrText, receiptData, isProcessing } = useReceiptOCR(image);

  const handleGemini = async () => {
    const processedOcrData = await processOcrData(ocrText);
    refreshPantry();
    console.log("Data:", processedOcrData);
  };

  return (
    <div className="flex flex-col items-center w-full">
      {isProcessing && (
        <div className="flex flex-row m-4">
          <Loading />
        </div>
      )}
      {!isProcessing && (
        <button
          className="bg-orange-400 rounded-md m-2 p-2"
          onClick={handleGemini}
        >
          Store Data
        </button>
      )}
    </div>
  );
};

export default ReceiptOCR;
