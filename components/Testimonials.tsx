"use client";

import { useState } from "react";
import { useGsapScrollAnimation } from "./hooks/useGsapAnimation";

const testimonials = [
  {
    name: "Rohit Zadoo",
    role: "Parent",
    rating: 5,
    text: "My son was diagnosed with autism. I had visited 2-3 therapy centres before reaching out to her centre. I was quite skeptical if this one will work. It worked wonders. Vaishali n Co are gifted therapists. My son was not able to even speak and now he has started communicating properly in just 6 months.",
    avatar: "RZ",
  },
  {
    name: "Kanika Swaroop",
    role: "Parent",
    rating: 5,
    text: "We have been associated with My Therapist. I must say that the experience and understanding for kids with special needs is unmatched with the current setups around in Noida/NCR. My kid shows lot of improvement in speech and understanding thanks to Vaishali and her team.",
    avatar: "KS",
  },
  {
    name: "Nidhi",
    role: "Parent",
    rating: 5,
    text: "She is the best speech therapist and special educator I have ever come across. She works really very hard on each and every child. She focuses on every child like her own and gives immaculate results. So blessed to have Vaishali ma'am as my child's therapist.",
    avatar: "N",
  },
  {
    name: "Rajani Rana",
    role: "Parent",
    rating: 5,
    text: "Well experienced therapist and knows how to handle and improve autism children. Very polite nature and hardworking teacher. Listens carefully to parents' problems and gives correct advice.",
    avatar: "RR",
  },
  {
    name: "Pragati Srivastava",
    role: "Patient",
    rating: 5,
    text: "Really blessed to have Vaishali Ma'am in our Life who has helped my child to come out from Delays. Your efforts are appreciable. I followed your plans nicely and best part is it worked due to which my son got his speech with Understanding.",
    avatar: "PS",
  },
  {
    name: "Ayushi Goel",
    role: "Parent",
    rating: 5,
    text: "My son met Vaishali mam when he was 3 years old with little to no sitting tolerance. Now after 9 months my son speaks full sentences, plays with his brother, tries to communicate, imitates well. He is learning and growing every day under Vaishali mam's guidance.",
    avatar: "AG",
  },
  {
    name: "Kavita Bisht",
    role: "Patient",
    rating: 5,
    text: "We have been to many therapist in NCR, but our experience has been brilliant with Vaishali Ma'am. The staff is very competent and friendly. Their teaching method is very practical and real. The results are apparent and visible on the performance of our kid.",
    avatar: "KB",
  },
  {
    name: "Anupama Srivastava",
    role: "Patient",
    rating: 5,
    text: "My experience is awesome with Vaishali ma'am and her team. I want to salute their efforts. I can see a great improvement in my son. He reciprocates everything now. He understands well. Now I can say there is a hope and hoping for the best.",
    avatar: "AS",
  },
  {
    name: "Nitin Goel",
    role: "Patient",
    rating: 5,
    text: "Vaishali mam and her team is really hardworking and cooperative. They are serious about their work. I am lucky that my kid is in good hands. Must must suggested therapist.",
    avatar: "NG",
  },
];

export default function Testimonials() {
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useGsapScrollAnimation("fade-up");

  return (
    <section className="py-16 sm:py-20 bg-surface-pinkMuted overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={sectionRef} className="text-center mb-12 sm:mb-16">
          <span className="inline-block text-brand-pink font-semibold text-sm uppercase tracking-wider mb-3">
            Testimonials
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What <span className="text-brand-blue">Our Families</span> Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
            Hear from the families who trust us with their children&apos;s development journey.
          </p>
        </div>
      </div>

      {/* Scrolling Carousel */}
      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Gradient overlays for smooth edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-surface-pinkMuted to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-surface-pinkMuted to-transparent z-10 pointer-events-none" />

        {/* Scrolling track */}
        <div
          className="flex gap-6 px-6"
          style={{
            animation: "scroll-testimonials 90s linear infinite",
            animationPlayState: isPaused ? "paused" : "running",
            width: "max-content",
          }}
        >
          {/* First set of cards */}
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={`first-${index}`} testimonial={testimonial} />
          ))}
          {/* Duplicate set for seamless loop */}
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={`second-${index}`} testimonial={testimonial} />
          ))}
        </div>
      </div>

      {/* CSS Animation */}
      <style jsx global>{`
        @keyframes scroll-testimonials {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[number];
}) {
  return (
    <div className="w-[340px] h-[340px] flex-shrink-0 bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      {/* Quote Icon */}
      <svg
        className="w-8 h-8 text-brand-blue/30 mb-3"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>

      {/* Stars */}
      <div className="flex gap-1 mb-3">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <svg
            key={i}
            className="w-5 h-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Testimonial Text */}
      <p className="text-gray-700 leading-relaxed mb-4 text-sm flex-grow line-clamp-5">
        &ldquo;{testimonial.text}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 mt-auto">
        <div className="w-10 h-10 rounded-full bg-brand-pink/10 flex items-center justify-center text-brand-pink font-bold text-xs flex-shrink-0">
          {testimonial.avatar}
        </div>
        <div>
          <div className="font-semibold text-gray-900 text-sm">
            {testimonial.name}
          </div>
          <div className="text-xs text-brand-pink font-medium uppercase tracking-wide">
            {testimonial.role}
          </div>
        </div>
      </div>
    </div>
  );
}
