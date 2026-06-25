import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Script from "next/script"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Basabraj Biswas | Aspiring Data Scientist | Portfolio",
  description:
    "M.Sc. Data Science & AI student at RKMRC, University of Calcutta with hands-on experience in Machine Learning, Deep Learning, Computer Vision, and NLP. Currently interning as a Data Science & AI Intern at Conglomerate Business Solutions Pvt. Ltd., Kolkata.",
  keywords: [
    "Basabraj Biswas",
    "Data Scientist",
    "Machine Learning Engineer",
    "Deep Learning",
    "Python Developer",
    "AI Engineer",
    "Computer Vision",
    "NLP",
    "Data Science Portfolio",
    "TGNN",
    "Deepfake Detection",
    "Anti-Money Laundering",
    "Kolkata",
    "RKMRC Narendrapur",
    "University of Calcutta",
    "basabraj",
    "basabraj biswas portfolio",
    "basabraj github",
  ],
  generator: "v0.app",
  openGraph: {
    title: "Basabraj Biswas | Aspiring Data Scientist",
    description:
      "M.Sc. Data Science & AI student with expertise in ML, Deep Learning, Computer Vision, and NLP. Projects include AML detection with TGNNs, Deepfake Recognition, and more.",
    type: "website",
    locale: "en_US",
    url: "https://basabraj.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Basabraj Biswas | Aspiring Data Scientist",
    description:
      "M.Sc. Data Science & AI student with expertise in ML, Deep Learning, Computer Vision, and NLP.",
  },
  alternates: {
    canonical: "https://basabraj.vercel.app",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Basabraj Biswas",
              url: "https://basabraj.vercel.app",
              jobTitle: "Aspiring Data Scientist",
              email: "basabrajbiswas04122001@gmail.com",
              telephone: "+916290277566",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Kolkata",
                addressRegion: "West Bengal",
                addressCountry: "IN",
              },
              alumniOf: [
                {
                  "@type": "CollegeOrUniversity",
                  name: "RKMRC, Narendrapur — University of Calcutta",
                  description: "M.Sc. Data Science & Artificial Intelligence (2024–2026)",
                },
                {
                  "@type": "CollegeOrUniversity",
                  name: "Bangabasi College — University of Calcutta",
                  description: "B.Sc. Mathematics (2020–2024)",
                },
              ],
              worksFor: {
                "@type": "Organization",
                name: "Conglomerate Business Solutions Pvt. Ltd.",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Garia, Kolkata",
                  addressCountry: "IN",
                },
              },
              sameAs: [
                "https://github.com/basabraj",
                "https://www.linkedin.com/in/basabraj",
              ],
              knowsAbout: [
                "Python",
                "R",
                "SQL",
                "Machine Learning",
                "Deep Learning",
                "Computer Vision",
                "Natural Language Processing",
                "Time Series Analysis",
                "Tableau",
                "LaTeX",
                "LSTM",
                "Temporal Graph Neural Networks",
                "Deepfake Detection",
                "Data Science",
                "Artificial Intelligence",
              ],
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}