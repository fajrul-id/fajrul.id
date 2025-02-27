import Script from "next/script";
import "./globals.css";
import Pwa from "./Pwa";
import Head from "./head";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head />
      <body className="bg">
        <div className="ga">
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-W11PKEH2P0"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-W11PKEH2P0');
        `}
          </Script>
        </div>
        {children}
        <Pwa />
      </body>
    </html>
  );
}
