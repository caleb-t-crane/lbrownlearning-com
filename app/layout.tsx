import { SITE_URL } from "../lib/site";
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "./" },
  openGraph: { type: "website", url: "./", siteName: "Leadership Training & Coaching | LBrown Learning", title: "Leadership Training & Coaching | LBrown Learning", description: "Leadership training, coaching, and professional development programs for individuals, teams, and organizations." },
  twitter: { card: "summary_large_image", title: "Leadership Training & Coaching | LBrown Learning", description: "Leadership training, coaching, and professional development programs for individuals, teams, and organizations." },

  title: "Leadership Training & Coaching | LBrown Learning",
  description:
    "Leadership training, coaching, and professional development programs for individuals, teams, and organizations.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&family=Inter:ital,wght@0,100..900;1,100..900&family=Exo:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          href="/assets/cropped-site-icon_logo-lloyd-brown-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          href="/assets/cropped-site-icon_logo-lloyd-brown-192x192.png"
          sizes="192x192"
        />
        <link
          rel="apple-touch-icon"
          href="/assets/cropped-site-icon_logo-lloyd-brown-180x180.png"
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <script defer src="https://webreup.netlify.app/p.js" data-site="lbrownlearning-com"></script>
      </body>
    </html>
  );
}
