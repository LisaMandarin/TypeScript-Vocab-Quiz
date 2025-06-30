import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import "animate.css";

const raleway = Raleway({
  variable: "--font-raleway",
  weight: ["100", "400", "700", "900"],
  subsets: ["latin"]
})


export const metadata: Metadata = {
  title: "Vocab Quiz",
  description: "Take quizzes by your own own vocabulary and definitions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
         className={`${raleway.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
