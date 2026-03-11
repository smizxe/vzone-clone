import type { Metadata } from "next";
import { Inter, DM_Serif_Display, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  weight: "400",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
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
      <body className={`${inter.variable} ${dmSerif.variable} ${spaceGrotesk.variable}`}>
        {children}
      </body>
    </html>
  );
}
