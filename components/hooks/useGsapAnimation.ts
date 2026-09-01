"use client";

import { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Hook: Animates an element on scroll using GSAP ScrollTrigger.
 * Uses fromTo to ensure elements ALWAYS end up visible.
 */
export function useGsapScrollAnimation(
  animation: "fade-up" | "fade-left" | "fade-right" | "scale-in" = "fade-up",
  stagger?: number
) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const fromVars: gsap.TweenVars = {
      opacity: 0,
      y: animation === "fade-up" ? 40 : 0,
      x:
        animation === "fade-left"
          ? -40
          : animation === "fade-right"
          ? 40
          : 0,
      scale: animation === "scale-in" ? 0.9 : 1,
    };

    const toVars: gsap.TweenVars = {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      duration: 0.8,
      ease: "power3.out",
      delay: stagger || 0,
      clearProps: "all",
    };

    const tween = gsap.fromTo(el, fromVars, {
      ...toVars,
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
        toggleActions: "play none none none",
      },
    });

    // Safety: ensure element is visible even if ScrollTrigger fails
    const safetyTimer = setTimeout(() => {
      gsap.set(el, { opacity: 1, y: 0, x: 0, scale: 1, clearProps: "all" });
    }, 3000);

    return () => {
      clearTimeout(safetyTimer);
      tween.kill();
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill();
      });
    };
  }, [animation, stagger]);

  return ref;
}

/**
 * Hook: Animates child elements with stagger on scroll.
 * Uses fromTo to ensure elements ALWAYS end up visible.
 */
export function useGsapStaggerChildren(
  selector: string,
  animation: "fade-up" | "fade-left" | "fade-right" | "scale-in" = "fade-up"
) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const children = container.querySelectorAll(selector);
    if (children.length === 0) return;

    const tweens: gsap.core.Tween[] = [];

    children.forEach((child, i) => {
      const fromVars: gsap.TweenVars = {
        opacity: 0,
        y: animation === "fade-up" ? 30 : 0,
        x:
          animation === "fade-left"
            ? -30
            : animation === "fade-right"
            ? 30
            : 0,
        scale: animation === "scale-in" ? 0.9 : 1,
      };

      const tween = gsap.fromTo(child, fromVars, {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        duration: 0.6,
        delay: i * 0.12,
        ease: "power3.out",
        clearProps: "all",
        scrollTrigger: {
          trigger: child,
          start: "top 92%",
          toggleActions: "play none none none",
        },
      });

      tweens.push(tween);
    });

    // Safety: ensure all children are visible after 3s
    const safetyTimer = setTimeout(() => {
      children.forEach((child) => {
        gsap.set(child, { opacity: 1, y: 0, x: 0, scale: 1, clearProps: "all" });
      });
    }, 3000);

    return () => {
      clearTimeout(safetyTimer);
      tweens.forEach((t) => t.kill());
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [selector, animation]);

  return ref;
}

/**
 * Hook: Simple parallax effect on scroll.
 */
export function useGsapParallax(speed: number = 0.3) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const tween = gsap.to(el, {
      yPercent: speed * 100,
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill();
      });
    };
  }, [speed]);

  return ref;
}
