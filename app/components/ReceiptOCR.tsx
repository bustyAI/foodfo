"use client";
import React from "react";

// Components
import Loading from "./Loading";

// Hooks
import useReceiptOCR from "../hooks/useReceiptOCR";

// API calls
import { processOcrData } from "@/utils/api";

const ReceiptOCR = ({ image }: { image: string }) => {
  const { ocrText, receiptData, isProcessing } = useReceiptOCR(image);

  const handleGemini = async () => {
    const processedOcrData = await processOcrData(ocrText);
  };

  return (
    <div className="flex flex-col items-center w-full">
      {isProcessing && (
        <div className="flex flex-row m-4">
          <Loading />
        </div>
      )}
      {!isProcessing && (
        <button className="bg-orange-400 rounded-md p-3" onClick={handleGemini}>
          Store Data
        </button>
      )}
    </div>
  );
};

export default ReceiptOCR;
