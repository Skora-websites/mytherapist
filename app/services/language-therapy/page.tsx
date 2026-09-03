import type { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";

export const metadata: Metadata = {
  title: "Language Therapy",
  description:
    "Language therapy services for receptive and expressive language delays at My Therapist Development Center, Noida.",
};

export default function LanguageTherapyPage() {
  return (
    <ServiceDetail bgImage="/images/language-therapy.jpeg"
      title="Language Therapy"
      subtitle="for Children"
      description="Language therapy focuses on helping children develop receptive (understanding) and expressive (using) language skills. We address vocabulary development, sentence structure, comprehension, and social communication to help children express themselves effectively."
      approaches={[
        {
          title: "Receptive Language",
          description: "Building comprehension skills through listening activities, following directions, and understanding concepts.",
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          ),
        },
        {
          title: "Expressive Language",
          description: "Developing vocabulary, grammar, and sentence formation through storytelling, role-play, and structured activities.",
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          ),
        },
        {
          title: "Social Communication",
          description: "Teaching pragmatic language skills including turn-taking, topic maintenance, and understanding social cues.",
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          ),
        },
        {
          title: "Augmentative Communication",
          description: "Using picture systems, gestures, and technology to support children who need alternative communication methods.",
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          ),
        },
      ]}
      benefits={[
        "Improved understanding of language",
        "Richer vocabulary development",
        "Better sentence construction",
        "Enhanced social interactions",
        "Stronger reading and writing foundation",
        "Greater independence in communication",
      ]}
      faqs={[
        {
          question: "What is the difference between speech and language therapy?",
          answer: "Speech therapy focuses on producing sounds correctly, while language therapy addresses understanding and using words and sentences. They often overlap and may be combined.",
        },
        {
          question: "How do you assess my child's language skills?",
          answer: "We use standardized assessment tools, observation, and parent interviews to create a comprehensive profile of your child's language abilities and areas for growth.",
        },
        {
          question: "Can language therapy help with reading difficulties?",
          answer: "Yes! Strong language skills are foundational for reading. Language therapy often improves reading comprehension, vocabulary, and literacy skills.",
        },
      ]}
    />
  );
}
