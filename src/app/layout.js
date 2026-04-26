import "./globals.css";
import { Caveat } from "next/font/google";
import { getLocale } from "next-intl/server";
import AddAnimation from "@/Components/Shared/AddAnimation";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  variable: "--font-caveat",
});

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

export default async function RootLayout({ children }) {
  const locale = await getLocale();
  return (
    <html lang={locale} className={caveat.variable}>
      <head>
        <meta name="impact-site-verification" value="d42433c2-b7ae-4524-a0f2-da6dfd3f90e0" />
      </head>
      <body>
        <AddAnimation />
        {children}
      </body>
    </html>
  );
}
