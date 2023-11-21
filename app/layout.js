/* eslint-disable @next/next/next-script-for-ga */
import "./globals.css";
import Head from "next/head";
// import "tailwindcss/tailwind.css";

export const metadata = {
  applicationName: "Mitesh Tagadiya",
  keywords: [
    "Mitesh Tagadiya",
    "mitesh tagadiya",
    "freelancers",
    "react developer",
    "reactjs freelancer",
    "nextjs"
  ],
  title: "Mitesh Tagadiya - Web Developer, Designer and Creator.",
  description:
    "Experienced ReactJS developer adept in crafting dynamic web applications with Next.js and Tailwind CSS. Explore my portfolio for innovative projects and seamless user experiences.",
  alternates: {
    canonical: "https://miteshtagadiya.js.org/"
  },
  metadataBase: new URL("https://miteshtagadiya.js.org"),
  openGraph: {
    title: "Mitesh Tagadiya - Web Developer, Designer and Creator.",
    description:
      "Experienced ReactJS developer adept in crafting dynamic web applications with Next.js and Tailwind CSS. Explore my portfolio for innovative projects and seamless user experiences.",
    url: "https://miteshtagadiya.js.org",
    siteName: "Mitesh Tagadiya",
    images: [
      {
        url: "https://miteshtagadiya.js.org/static/misc/og.png",
        alt: "Mitesh Tagadiya"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  icons: {
    icon: [
      { rel: "icon", url: `${process.env.NEXT_PUBLIC_BASE_URL}static/favicon/favicon.ico` },
      {
        rel: "icon",
        url: `${process.env.NEXT_PUBLIC_BASE_URL}static/favicon/apple-touch-icon.png`,
        sizes: "180x180",
        type: "image/png"
      },
      {
        rel: "icon",
        url: `${process.env.NEXT_PUBLIC_BASE_URL}static/favicon/favicon-16x16.png`,
        sizes: "16x16",
        type: "image/png"
      },
      {
        rel: "icon",
        url: `${process.env.NEXT_PUBLIC_BASE_URL}static/favicon/favicon-32x32.png`,
        sizes: "32x32",
        type: "image/png"
      }
    ],
    shortcut: [`${process.env.NEXT_PUBLIC_BASE_URL}static/favicon/favicon.ico`],
    apple: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}static/favicon/apple-touch-icon.png`,
        sizes: "180x180",
        type: "image/png"
      }
    ]
  },
  manifest: `${process.env.NEXT_PUBLIC_BASE_URL}static/favicon/site.webmanifest`,
  twitter: {
    card: "summary_large_image",
    title: "Mitesh Tagadiya - Web Developer, Designer and Creator.",
    description:
      "Experienced ReactJS developer adept in crafting dynamic web applications with Next.js and Tailwind CSS. Explore my portfolio for innovative projects and seamless user experiences.",
    url: "https://miteshtagadiya.js.org",
    images: {
      url: "https://miteshtagadiya.js.org/static/misc/og.png",
      alt: "Mitesh Tagadiya"
    }
  }
};
export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning={true} lang="en">
      <Head>
        <link
          rel="icon"
          type="image/x-icon"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}static/favicon/favicon.ico`}
          sizes="16x16"
        />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','G-4H4HEZKQT1');`
          }}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-4H4HEZKQT1', {
                page_path: window.location.pathname,
              });
          `
          }}
        />
      </Head>
      <body>{children}</body>
    </html>
  );
}
