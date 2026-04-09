import "./globals.css";
import AddAnimation from "@/Components/Shared/AddAnimation";
import Footer from "@/Components/Shared/Footer";
import Header from "@/Components/Shared/Header/Header";


export const metadata = {
  title: "Vlad Weby",
  description: "Web developer & AI specialist based in Bratislava. Modern websites that earn - not just look good.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AddAnimation/>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
