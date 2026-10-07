/// <reference types="vite/client" />

interface Window {
  gtag?: (command: "event", eventName: string, parameters?: Record<string, string>) => void;
}
