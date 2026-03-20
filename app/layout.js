import { Geist, Geist_Mono } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Footer from "./components/Footer"; // ✅ IMPORT FOOTER

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ace Portfolio 🚀",
  description: "Full Stack Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        {/* ✅ PROPER LAYOUT */}
        <div className="min-h-screen flex flex-col">
          
          {/* MAIN CONTENT */}
          <main className="flex-grow">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}