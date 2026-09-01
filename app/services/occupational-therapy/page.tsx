import type { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";

export const metadata: Metadata = {
  title: "Occupational Therapy",
  description:
    "Occupational therapy for fine motor skills and daily living at My Therapist Development Center, Noida.",
};

export default function OccupationalTherapyPage() {
  return (
    <ServiceDetail bgImage="/images/occupational.jpg"
      title="Occupational Therapy"
      subtitle="for Children"
      description="Occupational therapy helps children develop the skills needed for daily living, including fine motor skills, hand-eye coordination, self-care abilities, and sensory processing. Our therapists work with children to build independence and confidence in everyday activities."
      approaches={[
        {
          title: "Fine Motor Development",
          description: "Activities targeting hand strength, dexterity, pencil grip, and manipulation skills essential for writing and self-care.",
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
            </svg>
          ),
        },
        {
          title: "Self-Care Skills",
          description: "Teaching dressing, feeding, grooming, and toileting skills to foster independence in daily routines.",
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          ),
        },
        {
          title: "Visual-Motor Integration",
          description: "Improving hand-eye coordination through activities like copying shapes, catching balls, and tracing patterns.",
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          ),
        },
        {
          title: "Gross Motor Skills",
          description: "Activities to improve balance, coordination, body awareness, and overall physical development.",
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          ),
        },
      ]}
      benefits={[
        "Improved handwriting and drawing",
        "Greater independence in self-care",
        "Enhanced coordination and balance",
        "Better concentration and focus",
        "Increased confidence in activities",
        "Successful school participation",
      ]}
      faqs={[
        {
          question: "What age groups do you serve for occupational therapy?",
          answer: "We serve children from toddlers through adolescents, adapting our approach to each developmental stage and individual needs.",
        },
        {
          question: "How do you know if my child needs occupational therapy?",
          answer: "Signs include difficulty with handwriting, poor coordination, trouble with self-care tasks, and sensory sensitivities. A formal assessment will determine if OT is appropriate.",
        },
        {
          question: "What does an occupational therapy session look like?",
          answer: "Sessions are play-based and may include activities like puzzles, drawing, threading beads, ball games, and self-care practice, all designed to target specific goals.",
        },
      ]}
    />
  );
}
