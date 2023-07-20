interface viteEnv {
  VITE_SOME_KEY: number;
  VITE_API_URL: string;
  VITE_ROUTE_AUTO: boolean;
}

interface ImportMetaEnv extends viteEnv {}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
