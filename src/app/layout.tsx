import type { Metadata } from "next";
import { Space_Grotesk, Manrope } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const spaceGrotesk = Space_Grotesk({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const manrope = Manrope({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Site Institucional em Promoção, CodePath",
  description:
    "Site institucional profissional, feito pela CodePath, pronto para aparecer no Google. Oferta por tempo limitado: R$ 499 à vista + R$ 129,90 por mês.",
  keywords: [
    "site institucional",
    "criação de sites",
    "site profissional barato",
    "aparecer no Google",
    "software house",
    "CodePath",
  ],
  authors: [{ name: "CodePath" }],
  creator: "CodePath",
  metadataBase: new URL("https://promo.codepath.dev.br"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://promo.codepath.dev.br",
    title: "Site Institucional em Promoção, CodePath",
    description:
      "Seu site institucional no ar e no Google. Oferta por tempo limitado.",
    siteName: "CodePath",
  },
  twitter: {
    card: "summary_large_image",
    title: "Site Institucional em Promoção, CodePath",
    description: "Seu site institucional no ar e no Google.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${spaceGrotesk.variable} ${manrope.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Offer",
              name: "Site institucional completo, CodePath",
              description:
                "Site institucional profissional, otimizado para buscas, feito pela CodePath.",
              price: "499",
              priceCurrency: "BRL",
              url: "https://promo.codepath.dev.br",
              seller: {
                "@type": "ProfessionalService",
                name: "CodePath",
                url: "https://codepath.dev.br",
              },
            }),
          }}
        />
      </head>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
