"use client";
import React from "react";

// Components
import Loading from "./Loading";

// Hooks
import useReceiptOCR from "../hooks/useReceiptOCR";

const ReceiptOCR = ({ image }: { image: string }) => {
  const { ocrText, receiptData, isProcessing } = useReceiptOCR(image);

  return (
    <div className="flex flex-col items-center w-full">
      <h3>OCR Results:</h3>
      {isProcessing && (
        <div className="flex flex-row m-4">
          <Loading />
        </div>
      )}
      {!isProcessing && ocrText && (
        <textarea
          value={ocrText}
          readOnly
          className="w-full h-[800px] border p-2"
        />
      )}
      {!isProcessing && receiptData && (
        <h3 className="mt-6">Total: ${receiptData}</h3>
      )}
    </div>
  );
};

export default ReceiptOCR;
