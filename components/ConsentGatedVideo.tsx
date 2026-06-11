"use client";
import { useState } from "react";
import { useConsent, setConsent } from "./useConsent";

interface Props {
  videoId: string;
  title: string;
}

/**
 * Lädt das YouTube-iframe NICHT beim Seitenaufruf.
 * - Hat der Nutzer externe Medien generell erlaubt, wird es direkt gezeigt.
 * - Sonst erscheint ein Platzhalter; erst ein Klick lädt genau dieses Video
 *   (= Einwilligung für diese Einbettung). Vorher geht keine Anfrage an Google.
 */
export default function ConsentGatedVideo({ videoId, title }: Props) {
  const { allowExternalMedia } = useConsent();
  const [loadedOnce, setLoadedOnce] = useState(false);

  const show = allowExternalMedia || loadedOnce;

  if (show) {
    return (
      <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 9" }}>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            border: 0,
            borderRadius: 12,
          }}
        />
      </div>
    );
  }

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: "16 / 9",
        borderRadius: 12,
        overflow: "hidden",
        background: "#0f0f0f",
        border: "1px solid rgba(255,255,255,0.08)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 14,
        textAlign: "center",
        padding: 24,
      }}
    >
      <button
        type="button"
        onClick={() => setLoadedOnce(true)}
        aria-label={`Video laden: ${title}`}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 10,
          background: "#a8c800",
          color: "#0a0a0a",
          border: "none",
          borderRadius: 8,
          padding: "12px 22px",
          fontSize: 15,
          fontWeight: 600,
          cursor: "pointer",
        }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M8 5v14l11-7z" />
        </svg>
        Video laden
      </button>
      <p style={{ color: "#888", fontSize: 13, lineHeight: 1.5, maxWidth: 360, margin: 0 }}>
        Externer Inhalt von YouTube. Mit Klick wird das Video von YouTube (Google)
        geladen und es werden Daten übertragen.
      </p>
      <button
        type="button"
        onClick={() => setConsent("all")}
        style={{
          background: "transparent",
          color: "#a8c800",
          border: "none",
          fontSize: 12,
          textDecoration: "underline",
          cursor: "pointer",
          padding: 0,
        }}
      >
        Alle externen Medien dauerhaft erlauben
      </button>
    </div>
  );
}
