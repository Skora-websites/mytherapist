import type { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";

export const metadata: Metadata = {
  title: "ABA Therapy",
  description:
    "Applied Behavior Analysis (ABA) therapy for children with ASD at My Therapist Development Center, Noida.",
};

export default function ABATherapyPage() {
  return (
    <ServiceDetail bgImage="/images/aba-therapy.jpeg"
      title="ABA Therapy"
      subtitle="for ASD"
      description="Applied Behavior Analysis (ABA) is a scientifically validated approach to understanding and improving behavior. Our ABA therapy uses evidence-based techniques to help children with Autism Spectrum Disorder develop social skills, improve learning, and reduce challenging behaviors."
      approaches={[
        {
          title: "Discrete Trial Training",
          description: "Breaking skills into small, teachable components using structured one-on-one sessions with clear prompts and reinforcement.",
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          ),
        },
        {
          title: "Natural Environment Teaching",
          description: "Teaching skills in real-life settings to promote generalization and natural use of newly learned behaviors.",
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ),
        },
        {
          title: "Behavior Intervention",
          description: "Developing positive behavior support plans to reduce challenging behaviors and teach replacement behaviors.",
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          ),
        },
        {
          title: "Social Skills Training",
          description: "Group and individual sessions focused on peer interaction, play skills, and social communication.",
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          ),
        },
      ]}
      benefits={[
        "Improved communication skills",
        "Reduced challenging behaviors",
        "Enhanced social interactions",
        "Better learning outcomes",
        "Increased independence",
        "Data-driven progress tracking",
      ]}
      faqs={[
        {
          question: "Is ABA therapy effective for all children with ASD?",
          answer: "ABA is considered the gold standard for ASD intervention. While every child responds differently, research consistently shows significant improvements in communication, social, and adaptive skills.",
        },
        {
          question: "How many hours of ABA therapy are recommended?",
          answer: "Intensity varies based on the child's needs, ranging from 10-40 hours per week. Our team will recommend an appropriate schedule after the initial assessment.",
        },
        {
          question: "How do you measure progress in ABA therapy?",
          answer: "We collect data during every session and provide regular progress reports. Goals are reviewed and updated based on measurable outcomes.",
        },
      ]}
    />
  );
}
