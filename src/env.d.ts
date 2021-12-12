/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  VITE_GOOGLE_MAPS_API_KEY: string;
  VITE_ENV: "DEV" | "PROD";
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
