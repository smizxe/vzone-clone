import type { Metadata } from "next";
import { Be_Vietnam_Pro, Playfair_Display, Space_Grotesk } from "next/font/google";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam-pro",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin", "vietnamese"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin", "vietnamese"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin", "vietnamese"],
});

export const metadata: Metadata = {
  title: "Vzone - Buôn Ma Thuột City Guide",
  description: "Review và tổng hợp địa điểm, dịch vụ uy tín hàng đầu tại Buôn Ma Thuột, Đắk Lắk.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${beVietnamPro.variable} ${playfairDisplay.variable} ${spaceGrotesk.variable}`}>
        {children}
      </body>
    </html>
  );
}
