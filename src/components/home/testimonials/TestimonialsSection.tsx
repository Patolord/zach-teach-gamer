"use client";

import Image from "next/image";
import { useState } from "react";
import { MEDIA } from "@/lib/media";
import ShinyText from "@/components/ui/shinytext";
import "./Testimonials.css";

// Using global CSS theme variables

type message = {
  id: number;
  text?: string;
  handle?: string;
  image?: string;
};

interface TestimonialsProps {
  sectionIndex?: number;
}

const Testimonials = ({ sectionIndex }: TestimonialsProps) => {
  const [expandedMessages, setExpandedMessages] = useState<Set<number>>(
    new Set(),
  );

  const toggleExpanded = (id: number) => {
    setExpandedMessages((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const messages = [
    {
      id: 1,
      text: "Our son Hartley has a greater level of confidence in his skill to take initiative and control over his actions. He also notices that he has a more active and aware mind after the class since he is making choices constantly. The focus and effort that is put towards the development of his character has deepened his awareness of himself and his ability to articulate this in his writing and imaginative play both at home and at school. In an age where devices have taken over, we have been privileged to find a program that both honors and endorses the deep reservoir of the human imagination",

      handle: "@Heidi (mother of Hartley age 12)",
    },
    {
      id: 2,
      text: "It’s really interesting to adapt your play-style to your characters, especially as they sometimes contrast your own personality. Though the game is based around fantasy, you end up learning how to think realistically and critically. Honestly, my only complaint is that the classes don’t go on for longer. [classes are 4 hours long]",
      handle: "@Shanti (age 15)",
    },
    {
      id: 3,
      image: MEDIA.testimonials.testimonial1,
    },
    {
      id: 4,
      text: "I learnt the importance of evaluating a situation before jumping to conclusions, the helpfulness of working with others whom have skills I do not possess, and how fun it is to blindly run into the hands of danger. It’s a blanket of fun, wrapped in a layer of unsuspecting danger, and bundled, finally, in a…",
      handle: "@Kaesha (homeschooler)",
    },
    {
      id: 5,
      text: "I love going on an adventure and discovering new things. It’s fun. You can use spells, craft and fight. You’ll probably freak out when you die",
      handle: "@Eron (age 10)",
    },
    {
      id: 6,
      image: MEDIA.testimonials.testimonial2,
    },
    {
      id: 7,
      text: "It’s fun and we learn lots of things, like strategy, team work, assessing the situation and making terrains",
      handle: "@Julian (age 10)",
    },
    {
      id: 8,
      text: "I learned to try new things. Originally I thought I would not like this thematic but actually I learnt a lot about trying new things",
      handle: "@Eve (age 12)",
    },
    {
      id: 9,
      image: MEDIA.testimonials.testimonial3,
    },
  ];

  const row1Messages = messages.slice(0, 5);
  const row2Messages = messages.slice(5, 9);

  const imageCardClass =
    "shrink-0 w-[380px] min-h-[120px] md:w-[320px] md:min-h-[110px] border-2 rounded-2xl overflow-hidden cursor-pointer will-change-transform transition-all duration-200 ease-in-out hover:-translate-y-1 relative";

  const textCardClass =
    "shrink-0 w-[380px] min-h-[120px] md:w-[320px] md:min-h-[110px] md:p-5 rounded-2xl p-6 cursor-pointer whitespace-normal will-change-transform transition-all duration-200 ease-in-out hover:-translate-y-1 disabled:cursor-default text-left backdrop-blur-sm";

  const MessageCard = ({ message }: { message: message }) => {
    if (message.image) {
      return (
        <div 
          className={imageCardClass}
          style={{
            borderColor: "var(--color-accent)",
            boxShadow: "0 4px 12px var(--color-primary-glow)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = "0 6px 20px var(--color-accent-glow), 0 0 30px var(--color-primary-glow)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "0 4px 12px var(--color-primary-glow)";
          }}
        >
          <Image
            src={message.image}
            alt="Testimonial"
            fill
            className="object-cover"
          />
        </div>
      );
    }

    const MAX_LENGTH = 200;
    const isExpanded = expandedMessages.has(message.id);
    const needsTruncation = message.text && message.text.length > MAX_LENGTH;
    const displayText =
      needsTruncation && !isExpanded
        ? `${message.text?.substring(0, MAX_LENGTH)}...`
        : message.text;

    return (
      <button
        type="button"
        onClick={() => needsTruncation && toggleExpanded(message.id)}
        onKeyDown={(e) => {
          if (needsTruncation && (e.key === "Enter" || e.key === " ")) {
            e.preventDefault();
            toggleExpanded(message.id);
          }
        }}
        disabled={!needsTruncation}
        className={textCardClass}
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          borderColor: "var(--color-primary-light)",
          borderWidth: '2px',
          boxShadow: "0 4px 12px var(--color-primary-glow)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
          e.currentTarget.style.borderColor = "var(--color-accent)";
          e.currentTarget.style.boxShadow = "0 6px 20px var(--color-accent-glow), 0 0 30px var(--color-primary-glow)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
          e.currentTarget.style.borderColor = "var(--color-primary-light)";
          e.currentTarget.style.boxShadow = "0 4px 12px var(--color-primary-glow)";
        }}
      >
        <div className="flex flex-col gap-4 h-full">
          <p 
            className="text-[0.95rem] leading-[1.6] m-0 grow whitespace-normal"
            style={{ color: "var(--color-lighter)" }}
          >
            {displayText}
            {needsTruncation && (
              <span 
                className="ml-2 font-semibold"
                style={{ color: "var(--color-accent)" }}
              >
                {isExpanded ? "Show less" : "Read more"}
              </span>
            )}
          </p>
          <div className="flex items-center gap-3">
            <span 
              className="text-sm font-medium"
              style={{ color: "var(--color-lighter)" }}
            >
              {message.handle}
            </span>
          </div>
        </div>
      </button>
    );
  };

  const MarqueeRow = ({
    messages,
    direction = "left",
    speed = 30,
  }: {
    messages: message[];
    direction: "left" | "right";
    speed: number;
  }) => {
    const duplicatedMessages = [...messages, ...messages];

    return (
      <div className="w-full overflow-visible relative mb-5 py-[2px] last:mb-0">
        <div
          className={`testimonial-marquee testimonial-marquee-${direction}`}
          style={{ animationDuration: `${speed}s`, willChange: "transform" }}
        >
          {duplicatedMessages.map((message, index) => (
            <MessageCard key={`${message.id}-${index}`} message={message} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <section
      id="testimonials-section"
      data-scroll-section={sectionIndex}
      className="w-full pt-40 relative overflow-x-hidden pb-60"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url('${MEDIA.backgrounds.testimonials}')` }}
      />
      {/* 40% black overlay */}
      <div 
        className="absolute inset-0" 
        style={{ backgroundColor: "rgba(26, 26, 31, 0.4)" }}
      />

      {/* Top horizontal transition element */}
      <div 
        className="absolute top-0 left-0 right-0 h-px opacity-60 z-10"
        style={{
          background: "linear-gradient(to right, transparent, var(--color-accent), var(--color-secondary), var(--color-accent), transparent)"
        }}
      />
      <div 
        className="absolute top-0 left-0 right-0 h-24 pointer-events-none z-10"
        style={{
          background: "linear-gradient(to bottom, var(--color-secondary-soft), transparent)"
        }}
      />

      {/* Content */}
      <div data-section-content className="max-w-7xl mx-auto relative z-10">
        <div data-animate className="text-center mb-32">
          <h3 className="text-4xl font-semibold tracking-tight mb-4 text-center inline-block whitespace-nowrap">
            <ShinyText
              speed={3}
              delay={1}
              color={"var(--color-accent)"}
              shineColor="#fff"
              spread={30}
              yoyo
            >
              Testimonials
            </ShinyText>
          </h3>
        </div>

        <div className="relative w-full max-w-[1500px] mx-auto overflow-hidden before:content-[''] before:absolute before:inset-y-0 before:left-0 before:w-[200px] before:z-10 before:pointer-events-none before:bg-gradient-to-r before:from-black before:to-transparent after:content-[''] after:absolute after:inset-y-0 after:right-0 after:w-[200px] after:z-10 after:pointer-events-none after:bg-gradient-to-l after:from-black after:to-transparent">
          <MarqueeRow messages={row1Messages} direction="left" speed={40} />
          <MarqueeRow messages={row2Messages} direction="right" speed={35} />
        </div>

        <div className="mt-20 max-w-4xl mx-auto px-6">
          <p 
            className="text-base md:text-lg leading-relaxed text-center"
            style={{ color: "var(--color-lighter)" }}
          >
            Because young people learn best when they feel safe, seen, and engaged in something that matters. The 11–14 window is a time of explosive curiosity—kids are little scientists and emerging adventurers, testing ideas and searching for who they are. Yet too often, school narrows that curiosity into performance metrics and pressure. Teacher-Gamer exists to change that. We help educators create face-to-face, story-rich learning environments where students build identity, confidence, and social-emotional skills through collaborative play. When learning feels like an adventure, kids don't check out—they lean in.
          </p>
        </div>
      </div>

      {/* Bottom horizontal transition element */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none z-10"
        style={{
          background: "linear-gradient(to top, var(--color-secondary-soft), transparent)"
        }}
      />
      <div 
        className="absolute bottom-0 left-0 right-0 h-px opacity-60 z-10"
        style={{
          background: "linear-gradient(to right, transparent, var(--color-accent), var(--color-secondary), var(--color-accent), transparent)"
        }}
      />
    </section>
  );
};

export default Testimonials;
