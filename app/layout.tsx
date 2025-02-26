import type { Metadata } from "next";
import {
  ClerkProvider
} from '@clerk/nextjs'
import "@stream-io/video-react-sdk/dist/css/styles.css";
import 'react-datepicker/dist/react-datepicker.css';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VConnect",
  description: "A video conferencing application to meet your needs",
  icons: {
    icon: "/icons/logo.png",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (<html lang="en">
    <ClerkProvider
      appearance={{
        layout: {
          socialButtonsVariant: "iconButton",
          logoImageUrl: "/icons/logo.png",
        },
        variables: {
          colorText: "#fff",
          colorPrimary: "#0E78F4",
          colorBackground: "#181A27",
          colorInputBackground: "#252A41",
          colorInputText: "#fff",
        },
      }}
    >

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-dark-2 `}
      >
        {children}
        <Toaster />
      </body>
    </ClerkProvider>
  </html>

  );
}
