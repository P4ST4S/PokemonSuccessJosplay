import type { Metadata } from "next";
import { Press_Start_2P } from "next/font/google";
import "./globals.css";

const pressStart = Press_Start_2P({
  weight: "400",
  variable: "--font-press-start",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Succes Pokemon Heartgold & Soulsilver",
  description:
    "Valide chaque succes inspire de Pokemon Heartgold & Soulsilver avec une interface pixel art facon chaine Mii.",
  metadataBase: new URL("https://mii-achievements.local"),
  icons: {
    icon: "/icon.jpg",
    shortcut: "/icon.jpg",
    apple: "/icon.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${pressStart.variable} bg-transparent text-mii-ink antialiased`}>
        {children}
      </body>
    </html>
  );
}
