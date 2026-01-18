import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: process.env.NODE_ENV === "production" ? "/2026-React-Task-2/" : "/",
  plugins: [react()],
})