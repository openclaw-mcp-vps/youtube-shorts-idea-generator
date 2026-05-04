import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "YouTube Shorts Idea Generator – Generate Viral Shorts Ideas",
  description: "Analyze trending topics, competitor content, and viral patterns to generate YouTube Shorts ideas with scripts. Built for creators, social media managers, and content agencies."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="993238f4-581f-4687-9ae1-b208fa870b2b"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
