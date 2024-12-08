"use client";
import { useState, useEffect } from "react";
import { createWorker } from "tesseract.js";

const useReceiptOCR = (image: string | null) => {
  const [ocrText, setOcrText] = useState<string>("");
  const [receiptData, setReceiptData] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  useEffect(() => {
    if (!image) return;

    const processImage = async () => {
      const worker = await createWorker();

      setIsProcessing(true);

      // Extracting text from image
      try {
        const {
          data: { text },
        } = await worker.recognize(image);
        setOcrText(text);
        parseReceipt(text);
      } catch (error) {
        console.error("OCR processing failed:", error);
      } finally {
        await worker.terminate();
        setIsProcessing(false);
      }
    };

    const parseReceipt = (text: string) => {
      let total: string | null = null;

      const lines = text.split("\n");

      for (const line of lines) {
        // Skip lines containing "subtotal" to only extact total
        if (/subtotal/i.test(line)) {
          continue;
        }

        if (/total/i.test(line)) {
          const match = line.match(/total.*?(\d+\.\d{2})/i); // Match "Total" with the price
          if (match) {
            total = match[1];
            break; // Stop searching after finding the total
          }
        }
      }

      setReceiptData(total || "No total found");
    };

    processImage();
  }, [image]);

  return { ocrText, receiptData, isProcessing };
};

export default useReceiptOCR;
