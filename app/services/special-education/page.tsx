import type { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";

export const metadata: Metadata = {
  title: "Special Education",
  description:
    "Individualized special education programs for children with learning disabilities at My Therapist Development Center, Noida.",
};

export default function SpecialEducationPage() {
  return (
    <ServiceDetail bgImage="/images/education.jpg"
      title="Special Education"
      subtitle="Programs"
      description="Our special education programs provide individualized educational plans for children with learning disabilities, developmental delays, and intellectual challenges. We use evidence-based teaching strategies to help each child reach their academic and developmental potential."
      approaches={[
        {
          title: "Individualized Learning Plans",
          description: "Custom-designed educational programs based on comprehensive assessments of each child's strengths and areas for growth.",
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          ),
        },
        {
          title: "Academic Support",
          description: "Targeted instruction in reading, writing, math, and other academic subjects using multisensory approaches.",
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          ),
        },
        {
          title: "Life Skills Training",
          description: "Teaching essential daily living skills, self-care routines, and social skills for greater independence.",
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          ),
        },
        {
          title: "Parent Training",
          description: "Guiding parents with strategies and techniques to support their child's learning and development at home.",
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          ),
        },
      ]}
      benefits={[
        "Personalized learning strategies",
        "Improved academic performance",
        "Enhanced social skills",
        "Greater independence",
        "Confidence building",
        "Smooth school transitions",
      ]}
      faqs={[
        {
          question: "What learning disabilities do you support?",
          answer: "We support children with dyslexia, dyscalculia, dysgraphia, ADHD, intellectual disabilities, and other developmental conditions.",
        },
        {
          question: "Do you work with the child's school?",
          answer: "Yes, we collaborate with schools to ensure consistency between therapy sessions and classroom learning, including developing IEP recommendations.",
        },
        {
          question: "How is special education different from regular tutoring?",
          answer: "Special education uses specialized, evidence-based teaching methods designed for children with specific learning challenges, delivered by trained professionals.",
        },
      ]}
    />
  );
}
