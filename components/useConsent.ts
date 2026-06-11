"use client";
import { useState, useEffect } from "react";

/**
 * Zentrale Consent-Verwaltung für KNAKKE.
 * Speichert die Einwilligung in localStorage und meldet Änderungen
 * per Custom-Event, damit eingebettete Inhalte (YouTube) ohne Reload reagieren.
 */

export type ConsentLevel = "all" | "essential";

export interface ConsentState {
  level: ConsentLevel;
  externalMedia: boolean; // YouTube & andere externe Einbettungen
  date: string;
}

const CONSENT_KEY = "cookie-consent";
const EVENT_CHANGED = "consent-changed";
export const EVENT_OPEN = "consent-open";

export function getConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    return raw ? (JSON.parse(raw) as ConsentState) : null;
  } catch {
    return null;
  }
}

export function setConsent(level: ConsentLevel): void {
  const state: ConsentState = {
    level,
    externalMedia: level === "all",
    date: new Date().toISOString(),
  };
  localStorage.setItem(CONSENT_KEY, JSON.stringify(state));
  window.dispatchEvent(new CustomEvent(EVENT_CHANGED, { detail: state }));
}

export function clearConsent(): void {
  localStorage.removeItem(CONSENT_KEY);
  window.dispatchEvent(new CustomEvent(EVENT_CHANGED, { detail: null }));
}

/** Banner erneut öffnen, z. B. über einen Footer-Link „Cookie-Einstellungen". */
export function openConsentSettings(): void {
  window.dispatchEvent(new CustomEvent(EVENT_OPEN));
}

export function useConsent() {
  const [consent, setState] = useState<ConsentState | null>(null);

  useEffect(() => {
    setState(getConsent());
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail as ConsentState | null | undefined;
      setState(detail ?? getConsent());
    };
    window.addEventListener(EVENT_CHANGED, handler);
    return () => window.removeEventListener(EVENT_CHANGED, handler);
  }, []);

  return {
    consent,
    allowExternalMedia: !!consent?.externalMedia,
    setConsent,
    clearConsent,
  };
}
