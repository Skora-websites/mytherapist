import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mytherapist.in"),
  title: {
    default: "My Therapist Development Center | Best Speech Therapy in Noida",
    template: "%s | My Therapist Development Center",
  },
  description:
    "My Therapist Development Center offers expert speech therapy, language therapy, ABA therapy, occupational therapy, and special education services in Noida, Uttar Pradesh. Trusted by 500+ families for child development.",
  keywords: [
    "Best Speech Therapy Clinic in Gaur City 1",
    "Best Speech Therapy Clinic in Gaur City 2",
    "Best Speech Therapy Clinic in Gaur City 3",
    "Best Speech Therapy Clinic in Gaur City 4",
    "Best Speech Therapy Clinic in Gaur City 5",
    "Best Speech Therapy Clinic in Gaur City 6",
    "Best Speech Therapy Clinic in Gaur City 7",
    "Best Speech Therapy Clinic in Gaur City 8",
    "Best Speech Therapy Clinic in Gaur City 9",
    "Best Speech Therapy Clinic in Gaur City 10",
    "Best Speech Therapy Clinic in Gaur City 11",
    "Best Speech Therapy Clinic in Gaur City 12",
    "Speech Therapy in Gaur City Noida",
    "ABA Therapy in Noida",
    "Occupational Therapy in Noida",
    "Special Education in Noida",
    "Language Therapy in Noida",
    "Sensory Integration Therapy Noida",
    "Child Development Center Noida",
    "Pediatric Therapy Noida",
    "Autism Therapy Noida",
    "ASD Therapy in Noida",
    "Speech Therapist near me",
    "Best Child Therapist in Noida",
    "My Therapist Development Center",
  ],
  authors: [{ name: "My Therapist Development Center" }],
  creator: "My Therapist Development Center",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://mytherapist.in",
    siteName: "My Therapist Development Center",
    title: "My Therapist Development Center | Best Speech Therapy in Noida",
    description:
      "Expert speech therapy, ABA therapy, occupational therapy, and special education services for children in Noida, Uttar Pradesh.",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "My Therapist Development Center",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "My Therapist Development Center",
  image: "/logo.png",
  telephone: "+917701833231",
  email: "mytherapists4@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Noida",
    addressRegion: "Uttar Pradesh",
    postalCode: "201318",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 28.5802,
    longitude: 77.334,
  },
  url: "https://mytherapist.in",
  description:
    "Expert speech therapy, language therapy, ABA therapy, occupational therapy, and special education services for children.",
  priceRange: "$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "18:00",
    },
  ],
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
