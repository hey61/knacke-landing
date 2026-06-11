"use client";
import { useState, useEffect } from "react";
import { getConsent, setConsent, EVENT_OPEN } from "./useConsent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!getConsent()) setVisible(true);
    const open = () => setVisible(true);
    window.addEventListener(EVENT_OPEN, open);
    return () => window.removeEventListener(EVENT_OPEN, open);
  }, []);

  function choose(level: "all" | "essential") {
    setConsent(level);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Datenschutz-Einstellungen"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        padding: "0 16px 16px",
      }}
    >
      <div
        style={{
          maxWidth: 560,
          margin: "0 auto",
          background: "#1a1a1a",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 12,
          padding: "20px 24px",
          boxShadow: "0 -4px 24px rgba(0,0,0,0.4)",
        }}
      >
        <p style={{ color: "#ccc", fontSize: 14, lineHeight: 1.6, margin: "0 0 16px" }}>
          Diese Website nutzt technisch notwendige Cookies. Eingebettete YouTube-Videos
          werden erst geladen, wenn Sie externe Medien erlauben – dabei werden Daten an
          Google übertragen. Sie können auch nur die notwendigen Funktionen nutzen.{" "}
          <a
            href="/datenschutz"
            style={{ color: "#a8c800", textDecoration: "underline" }}
          >
            Datenschutzerklärung
          </a>
        </p>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <button
            type="button"
            onClick={() => choose("all")}
            style={{
              background: "#a8c800",
              color: "#0a0a0a",
              border: "none",
              borderRadius: 8,
              padding: "10px 20px",
              fontSize: 14,
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Externe Medien erlauben
          </button>
          <button
            type="button"
            onClick={() => choose("essential")}
            style={{
              background: "transparent",
              color: "#999",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: 8,
              padding: "10px 20px",
              fontSize: 14,
              cursor: "pointer",
            }}
          >
            Nur notwendige
          </button>
        </div>
      </div>
    </div>
  );
}
