import type { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";

export const metadata: Metadata = {
  title: "Speech Therapy",
  description:
    "Expert speech therapy services at My Therapist Development Center for articulation, fluency, voice, and resonance disorders in children.",
};

export default function SpeechTherapyPage() {
  return (
    <ServiceDetail bgImage="/images/speech-therapy.jpeg"
      title="Speech Therapy"
      subtitle="for Children"
      description="Speech therapy helps children overcome communication challenges including articulation disorders, fluency issues (stuttering), voice problems, and resonance disorders. Our certified speech-language pathologists use evidence-based techniques tailored to each child's unique needs."
      approaches={[
        {
          title: "Articulation Therapy",
          description: "Teaching correct production of individual speech sounds through structured exercises and play-based activities.",
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
          ),
        },
        {
          title: "Fluency Treatment",
          description: "Specialized interventions for stuttering and fluency disorders using modern techniques like the Lidcombe Program.",
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          ),
        },
        {
          title: "Voice Therapy",
          description: "Addressing voice quality, pitch, and volume issues to help children produce clear, healthy vocal sounds.",
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            </svg>
          ),
        },
        {
          title: "Oral Motor Therapy",
          description: "Strengthening the muscles of the mouth, lips, tongue, and jaw to improve speech clarity and feeding skills.",
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ),
        },
      ]}
      benefits={[
        "Clearer speech production",
        "Improved social interactions",
        "Better academic performance",
        "Increased self-confidence",
        "Enhanced listening skills",
        "Stronger family communication",
      ]}
      faqs={[
        {
          question: "At what age should my child start speech therapy?",
          answer: "Speech therapy can begin as early as 18 months if there are early signs of communication delays. Early intervention is key to achieving the best outcomes.",
        },
        {
          question: "How long does speech therapy take?",
          answer: "Duration varies based on the child's needs. Some children may see improvement in a few months, while others may benefit from ongoing therapy for a year or more.",
        },
        {
          question: "What happens during a speech therapy session?",
          answer: "Sessions involve play-based activities, structured exercises, and interactive games designed to target specific speech goals while keeping children engaged and motivated.",
        },
      ]}
    />
  );
}
