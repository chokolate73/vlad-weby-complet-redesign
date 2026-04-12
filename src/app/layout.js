import "./globals.css";
import AddAnimation from "@/Components/Shared/AddAnimation";

export const metadata = {
  metadataBase: new URL("https://www.vlad-weby.sk"),
  title: {
    default: "Vlad Weby",
    template: "%s",
  },
  description: "Web developer & AI specialist based in Bratislava. Modern websites that earn - not just look good.",
  icons: {
    icon: [
      { url: "/img/logo/favicon.ico" },
      { url: "/img/logo/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/img/logo/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/img/logo/apple-touch-icon.png",
    other: [
      { rel: "android-chrome-192x192", url: "/img/logo/android-chrome-192x192.png" },
      { rel: "android-chrome-512x512", url: "/img/logo/android-chrome-512x512.png" },
    ],
  },
  manifest: "/img/logo/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AddAnimation />
        {children}
      </body>
    </html>
  );
}
