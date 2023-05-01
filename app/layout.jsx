import Tabs from "@/components/Tabs";
import Header from "../components/Header";
import "./globals.css";
import Providers from "./Providers";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <Tabs />
          {children}
        </Providers>
      </body>
    </html>
  );
}
