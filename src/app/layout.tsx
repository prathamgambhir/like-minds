import type { Metadata } from "next";
import { Outfit, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";
import NavbarWrapper from "@/components/layout/navbar-wrapper";
import FooterSection from "@/components/landing/footer";
import QueryProvider from "@/providers/query-provider";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const outfitFont = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Like Minds",
  description:
    "Like Minds is an AI Learning Platform to connect with other learners in the same community",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html
        lang="en"
        className={cn(
          "h-full",
          "antialiased",
          outfitFont.className,
          "font-sans",
          geist.variable,
        )}
      >
        <body className="min-h-full flex flex-col">
          <QueryProvider>
            <NavbarWrapper />
              {children}
            <FooterSection />
          </QueryProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
