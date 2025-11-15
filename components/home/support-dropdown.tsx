"use client";

import React, { useState, useRef, useEffect } from "react";
import QRCode from "react-qr-code";
import {
  Heart,
  Coffee,
  Smartphone,
  Copy,
  Check,
  ChevronUp,
} from "lucide-react";

import { SUPPORT_CONFIG } from "@/components/lib/constants";

interface SupportDropdownProps {
  theme?: "light" | "dark";
}

const { UPI_ID, PAYEE_NAME, UPI_MSG, BUY_ME_COFFEE_URL } = SUPPORT_CONFIG;

const SupportDropdown: React.FC<SupportDropdownProps> = ({
  theme = "light",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  /* ------------------ Close on Click Outside ------------------ */
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* ------------------ Close on Escape ------------------ */
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  /* ------------------ Copy UPI ID ------------------ */
  const copyUpiId = async (e?: React.MouseEvent) => {
    e?.stopPropagation();
    try {
      await navigator.clipboard.writeText(UPI_ID);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      const temp = document.createElement("textarea");
      temp.value = UPI_ID;
      document.body.appendChild(temp);
      temp.select();
      document.execCommand("copy");
      temp.remove();
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  /* ------------------ External Coffee Link ------------------ */
  const handleBuyMeCoffee = () =>
    window.open(BUY_ME_COFFEE_URL, "_blank", "noopener,noreferrer");

  /* ------------------ UPI QR ------------------ */
  const upiUrl = `upi://pay?pa=${UPI_ID}&pn=${encodeURIComponent(
    PAYEE_NAME
  )}&tn=${encodeURIComponent(UPI_MSG)}&cu=INR`;

  return (
    <div ref={dropdownRef} className="fixed bottom-6 right-4 sm:right-6 z-50">
      {/* ------------------ DROPDOWN MENU ------------------ */}
      <div
        className={`
          absolute bottom-16 right-0 mb-3 w-72 max-w-xs rounded-xl backdrop-blur-md border shadow-xl
          transition-all duration-300 origin-bottom-right
          ${
            isOpen
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-2 scale-95 pointer-events-none"
          }
          ${
            theme === "dark"
              ? "bg-black/40 border-white/10 text-white"
              : "bg-white border-gray-300 text-gray-800"
          }
        `}
      >
        <div className="p-4 space-y-3">
          {/* ------------------ BUY ME COFFEE ------------------ */}
          <button
            onClick={handleBuyMeCoffee}
            className={`
              w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all
              ${
                theme === "dark"
                  ? "hover:bg-white/10 text-white"
                  : "hover:bg-gray-200 text-gray-800"
              }
            `}
          >
            <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center">
              <Coffee className="w-4 h-4 text-white" />
            </div>
            <span className="font-medium text-base">Buy Me Coffee</span>
          </button>

          {/* ------------------ UPI PAYMENT ------------------ */}
          <div
            className={`
              w-full flex flex-col items-center gap-3 px-3 py-3 rounded-lg transition-all cursor-pointer
              ${
                theme === "dark"
                  ? "hover:bg-white/10 text-white"
                  : "hover:bg-gray-200 text-gray-800"
              }
            `}
          >
            <div className="flex items-center gap-2 w-full">
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                <Smartphone className="w-4 h-4 text-white" />
              </div>

              <div className="flex-1">
                <div className="font-medium text-base">UPI Payment</div>
                <div
                  className={`text-xs ${
                    theme === "dark" ? "text-white/60" : "text-gray-600"
                  }`}
                >
                  Scan QR or copy UPI ID
                </div>
              </div>

              <button
                onClick={copyUpiId}
                className="w-8 h-8 flex items-center justify-center rounded"
                title="Copy UPI ID"
              >
                {copied ? (
                  <Check className="w-5 h-5 text-green-500" />
                ) : (
                  <Copy
                    className={`w-4 h-4 ${
                      theme === "dark" ? "text-white/60" : "text-gray-600"
                    }`}
                  />
                )}
              </button>
            </div>

            {/* QR BOX */}
            <div
              className={`${
                theme === "dark" ? "bg-white/10" : "bg-white"
              } p-3 rounded-lg flex flex-col items-center`}
            >
              <QRCode value={upiUrl} size={130} bgColor="transparent" />
              <div className="mt-2 text-xs text-center opacity-80">
                UPI ID: <span className="font-mono">{UPI_ID}</span>
              </div>
            </div>

            {/* COPY SUCCESS */}
            {copied && (
              <div
                className={`
                  px-3 py-2 rounded-lg text-xs text-center
                  ${
                    theme === "dark"
                      ? "bg-green-500/20 text-green-300"
                      : "bg-green-100 text-green-700"
                  }
                `}
              >
                UPI ID copied!
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ------------------ FLOATING BUTTON ------------------ */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          w-12 h-12 rounded-full backdrop-blur-md border shadow-xl
          flex items-center justify-center transition-all duration-300
          ${
            theme === "dark"
              ? "bg-black/50 border-white/10 hover:bg-black/40"
              : "bg-white border-gray-300 hover:bg-gray-100"
          }
          ${isOpen ? "rotate-180" : "rotate-0"}
        `}
      >
        {isOpen ? (
          <ChevronUp
            className={`w-6 h-6 ${
              theme === "dark" ? "text-white/80" : "text-gray-600"
            }`}
          />
        ) : (
          <Heart
            className={`w-6 h-6 ${
              theme === "dark" ? "text-white/80" : "text-red-600"
            }`}
          />
        )}
      </button>
    </div>
  );
};

export default SupportDropdown;
