import "./globals.css";
import AddAnimation from "@/Components/Shared/AddAnimation";
import LayoutShell from "@/Components/Shared/LayoutShell";


export const metadata = {
  title: "Vlad Weby",
  description: "Web developer & AI specialist based in Bratislava. Modern websites that earn - not just look good.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AddAnimation/>
        <LayoutShell>
          {children}
        </LayoutShell>
      </body>
    </html>
  );
}
