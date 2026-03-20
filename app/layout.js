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
  title: "Avinash | Full Stack Developer",
  description: "Portfolio of Avinash - MERN Stack Developer building modern web apps",
  keywords: ["Avinash", "MERN Developer", "React Developer", "Portfolio"],
  authors: [{ name: "Avinash" }],
   openGraph: {
    title: "Avinash Portfolio",
    description: "Check out my projects and skills",
    url: "https://your-vercel-link.vercel.app",
    siteName: "Avinash Portfolio",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
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