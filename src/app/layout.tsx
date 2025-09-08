import '../styles/globals.css'
import Footer from "@/components/navigation/Footer";
import Navbar from "@/components/navigation/Navbar";
import { type Metadata } from "next";
import { Geist } from "next/font/google";

export const metadata: Metadata = {
  title: "Gridflex",
  description: "Developed by The R&D Team of Momas/Epail MIC",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body className="min-h-screen flex flex-col">
        <div
          className="flex-1"
          style={{
            backgroundImage: "url('/images/hero section blurry.svg')",
          }}
        >
          <Navbar />
          <main className="flex-1">{children}</main>
        </div>

        <Footer />
      </body>
    </html>
  );
}
