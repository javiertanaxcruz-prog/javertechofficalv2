import { Analytics } from "@vercel/analytics/react";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata = {
  title: "JaverTech | Modern Websites, Landing Pages, and AI Tools",
  description:
    "Clean, high-impact digital experiences for brands and businesses that want a stronger presence online.",
  icons: {
    icon: "/javertech-mark.png",
    apple: "/javertech-mark.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={manrope.variable}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
