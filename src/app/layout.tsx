import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import "animate.css";
import Providers from "@/lib/Providers";

const raleway = Raleway({
  variable: "--font-raleway",
  weight: ["100", "400", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vocab Quiz",
  description: "Take quizzes by your own vocabulary and definitions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
