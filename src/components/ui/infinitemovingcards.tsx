"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden -mt-20">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
    {
      quote:
        "Working with Quantalyze has transformed our online presence. Their team brought fresh ideas and strategic insights that boosted our engagement by over 40%. Highly recommend!",
      name: "John Doe",
      title: "CEO, Tech Innovators",
      image: "/assets/images/SP_Shoot-thumbnail-03-1.webp",
    },
    {
      quote:
        "Quantalyze helped us take our PPC campaigns to the next level. Their precise targeting and creative strategies led to a significant increase in conversions within the first month.",
      name: "Jane Smith",
      title: "Marketing Director, Fashion Forward",
      image: "/assets/images/KITKAT.png",
    },
    {
      quote:
        "Our SEO rankings have skyrocketed since we started working with Quantalyze. Their in-depth knowledge and dedication to results made all the difference for our business.",
      name: "Michael Lee",
      title: "Founder, E-Commerce Ventures",
      image: "/assets/images/Juski_UI.webp",
    },
    {
      quote:
        "The Quantalyze team is amazing to work with. Their data-driven approach helped us optimize our content strategy and grow our brand's visibility across all platforms.",
      name: "Sarah Johnson",
      title: "Content Manager, Fresh Horizons",
      image: "/assets/images/Pepperfry_CaseStudy.webp",
    },
    {
      quote:
        "From branding to social media management, Quantalyze has been an invaluable partner in scaling our business. Their expertise and attention to detail set them apart from the competition.",
      name: "David White",
      title: "COO, Global Enterprises",
      image: "/assets/images/SP2.webp",
    },
  ];
  
