import type { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";

export const metadata: Metadata = {
  title: "Sensory Integration Therapy",
  description:
    "Sensory integration therapy to help children process sensory input at My Therapist Development Center, Noida.",
};

export default function SensoryIntegrationPage() {
  return (
    <ServiceDetail bgImage="/images/sensory-integration.jpeg"
      title="Sensory Integration"
      subtitle="Therapy"
      description="Sensory integration therapy helps children who have difficulty processing and responding to sensory information from their environment. Through carefully designed activities, we help children better understand and respond to sensory input, improving their ability to function in daily life."
      approaches={[
        {
          title: "Sensory Assessment",
          description: "Comprehensive evaluation of sensory processing patterns using standardized tools to identify specific sensory needs.",
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
          ),
        },
        {
          title: "Sensory Diet",
          description: "Individualized activity plans that provide the right type and amount of sensory input throughout the day.",
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ),
        },
        {
          title: "Environmental Modifications",
          description: "Guidance on adapting home and school environments to support sensory processing needs.",
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          ),
        },
        {
          title: "Therapeutic Activities",
          description: "Structured play activities involving swinging, jumping, tactile exploration, and vestibular stimulation.",
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ),
        },
      ]}
      benefits={[
        "Improved sensory processing",
        "Better emotional regulation",
        "Enhanced attention and focus",
        "Reduced sensory meltdowns",
        "Increased comfort in environments",
        "Better participation in activities",
      ]}
      faqs={[
        {
          question: "What are signs of sensory processing difficulties?",
          answer: "Signs include over-sensitivity to sounds/textures/lights, difficulty with movement activities, seeking intense sensory input, poor body awareness, and difficulty with transitions.",
        },
        {
          question: "Is sensory integration therapy evidence-based?",
          answer: "Yes, sensory integration therapy has a strong research base supporting its effectiveness for children with sensory processing challenges.",
        },
        {
          question: "Can sensory issues affect academic performance?",
          answer: "Absolutely. Sensory difficulties can impact concentration, handwriting, sitting still, and tolerating classroom environments, all of which affect learning.",
        },
      ]}
    />
  );
}
