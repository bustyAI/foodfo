"use client";
import React from "react";

// Hooks
import useReceiptOCR from "../hooks/useReceiptOCR";

const ReceiptOCR = ({ image }: { image: string }) => {
  const { ocrText, receiptData, isProcessing } = useReceiptOCR(image);

  return (
    <div className="flex flex-col items-center w-full">
      <h3>OCR Results:</h3>
      {isProcessing && <p>Processing image...</p>}
      {!isProcessing && ocrText && (
        <textarea
          value={ocrText}
          readOnly
          className="w-full h-[800px] border p-2"
        />
      )}
      <h3>Total:</h3>
      {!isProcessing && receiptData && <p>Total: ${receiptData}</p>}
    </div>
  );
};

export default ReceiptOCR;
