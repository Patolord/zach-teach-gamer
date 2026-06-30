"use client";

import {
  ArrowLeftIcon,
  BookOpenIcon,
  ChevronDownIcon,
  CreditCardIcon,
  GraduationCapIcon,
  HelpCircleIcon,
  ShoppingBagIcon,
  UsersIcon,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MEDIA } from "@/lib/media";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  faqs: FAQ[];
}

const faqCategories: FAQCategory[] = [
  {
    title: "Getting Started",
    icon: GraduationCapIcon,
    faqs: [
      {
        question: "What is game-based learning?",
        answer:
          "Game-based learning uses role-playing games and interactive storytelling to teach academic concepts and skills. It engages students through narrative, character development, and collaborative problem-solving while meeting educational standards.",
      },
      {
        question: "Do I need RPG experience to take your courses?",
        answer:
          "Not at all! Our courses are designed for educators at all levels, from complete beginners to experienced game masters. We start with the basics and build up your skills progressively.",
      },
      {
        question: "What age groups can benefit from game-based learning?",
        answer:
          "We primarily work with students aged 10 and above, though our methods can be adapted for various age ranges. The key is adjusting complexity and themes to match students' developmental levels.",
      },
      {
        question: "How long does it take to implement game-based learning?",
        answer:
          "You can start small with single sessions and scale up as you grow comfortable. Most educators begin seeing engagement benefits within their first few sessions, with full implementation of an introductory course taking 10 weeks.",
      },
    ],
  },
  {
    title: "Courses & Content",
    icon: BookOpenIcon,
    faqs: [
      {
        question: "How long are the courses?",
        answer:
          "Course lengths vary from 6–20 weeks depending on the level and how many hours per week. Level 1 is 24 hours over 6 weeks, Level 2 is 48 hours 12 weeks, and Level 3 is 72 hours over 20 weeks. All courses are self-paced with optional cohort-based learning. In-person & online courses available.",
      },
      {
        question: "What's included in each course?",
        answer:
          "Each course includes online lessons, downloadable resources, templates, community access to Teacher Gamer Whats App Fellowship, Discord Server, and practical assignments. Higher-level courses include one-on-one coaching and advanced materials.",
      },
      {
        question: "Can I access course materials after completion?",
        answer:
          "Yes. You get lifetime access to all course materials, including future updates and additions.",
      },
      {
        question: "Are there prerequisites for advanced courses?",
        answer:
          "The Teacher-Gamer methodology is holistic. We recommend taking courses in order, as each builds on previous concepts and there are original and unique social emotional learning (SEL), project-based learning (PBL), and game-based learning (GBL) elements presented by Teacher-Gamer which provides new perspectives even to advanced educators, players, and DMs.",
      },
      {
        question: "Do you offer group or school-wide training?",
        answer:
          "Yes. We offer custom training packages for schools and districts, including bulk pricing and tailored professional development.",
      },
    ],
  },
  {
    title: "Pricing & Payment",
    icon: CreditCardIcon,
    faqs: [
      {
        question: "How much do courses cost?",
        answer:
          "Level 1 starts at $299, Level 2 at $599, and Level 3 at $999. Payment plans and bundle discounts are available.",
      },
      {
        question: "Do you offer refunds?",
        answer: "Yes. We offer a 30-day money-back guarantee.",
      },
      {
        question: "Are payment plans available?",
        answer:
          "Yes. We offer 3-month and 6-month payment plans for all courses.",
      },
      {
        question: "Do you offer educator discounts?",
        answer:
          "Yes. Active educators receive a 20% discount with verification.",
      },
      {
        question: "Can I get reimbursed by my school?",
        answer:
          "Many schools reimburse professional development. We provide detailed receipts and documentation to support reimbursement requests.",
      },
    ],
  },
  {
    title: "Community & Support",
    icon: UsersIcon,
    faqs: [
      {
        question: "Is there a community for course participants?",
        answer:
          "Yes. All participants get access to both private WhatsApp and Discord communities to connect, share experiences, and receive feedback.",
      },
      {
        question: "How do I get help if I'm stuck?",
        answer:
          "Support is available via community forums, email, live Q&A sessions (for higher-tier courses), and documentation. Most questions are answered within 24 hours.",
      },
      {
        question: "Can I collaborate with other educators?",
        answer:
          "Yes. Collaboration is encouraged, including co-teaching, sharing resources, and joint campaign creation.",
      },
      {
        question: "Are there networking opportunities?",
        answer:
          "We host monthly virtual meetups, annual conferences, and regional workshops.",
      },
    ],
  },
  {
    title: "Shop & Products",
    icon: ShoppingBagIcon,
    faqs: [
      {
        question: "What products do you sell?",
        answer:
          "We offer game master guides, campaign modules, dice sets, character sheets, world-building templates, and classroom posters.",
      },
      {
        question: "Do digital products come with physical items?",
        answer:
          "Some bundles include both digital and physical components. Digital products are available immediately after purchase.",
      },
      {
        question: "What's your shipping policy?",
        answer:
          "Orders ship within 2–3 business days. Domestic shipping takes 5–7 days; international shipping takes 10–14 days. Free US shipping on orders over $50.",
      },
      {
        question: "Can I return physical products?",
        answer:
          "Physical products can be returned within 30 days if unused and in original condition. Digital products are non-refundable after download.",
      },
    ],
  },
  {
    title: "Technical & General",
    icon: HelpCircleIcon,
    faqs: [
      {
        question: "What devices are supported?",
        answer:
          "Our platform works on desktops, laptops, tablets, and smartphones. A larger screen is recommended for courses.",
      },
      {
        question: "Do I need special software?",
        answer:
          "No. Everything runs in your web browser. A PDF Reader is needed for reading downloaded material. Discord is optional for community access.",
      },
      {
        question: "How do I access my purchases?",
        answer:
          'Log into your account and visit "My Courses" or "My Downloads" in your dashboard.',
      },
      {
        question: "Can I share my course access with colleagues?",
        answer:
          "Individual licenses are single-user. Group and school packages are available.",
      },
      {
        question: "Is my data secure?",
        answer:
          "Yes. We use industry-standard encryption and comply with all privacy regulations.",
      },
    ],
  },
];

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (categoryTitle: string, question: string) => {
    const key = `${categoryTitle}-${question}`;
    setOpenItems((prev) =>
      prev.includes(key) ? prev.filter((item) => item !== key) : [...prev, key],
    );
  };

  const isOpen = (categoryTitle: string, question: string) => {
    return openItems.includes(`${categoryTitle}-${question}`);
  };

  return (
    <main className="relative min-h-screen">
      {/* Background */}
      <div
        className="fixed inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${MEDIA.backgrounds.contact}')` }}
      />
      <div className="fixed inset-0 bg-black/75" />

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="container mx-auto px-4 pt-6 pb-2">
          <Link
            href="/home"
            className="inline-flex items-center gap-2 text-lighter/80 hover:text-lighter transition-colors"
          >
            <ArrowLeftIcon className="w-5 h-5" />
            Back to Home
          </Link>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-6 md:py-10">
          <div className="max-w-6xl mx-auto space-y-16">
            {/* Hero Section */}
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 text-accent">
                <HelpCircleIcon className="w-4 h-4" />
                <span className="text-sm font-semibold">
                  Frequently Asked Questions
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="text-accent">How Can We</span>
                <span className="text-lighter"> Help You?</span>
              </h1>

              <p className="text-xl text-lighter/90 leading-relaxed max-w-3xl mx-auto">
                Find answers to common questions about our courses, products,
                and game-based learning methodology. Can't find what you're
                looking for?{" "}
                <Link
                  href="/contact"
                  className="text-accent hover:text-accent-light underline"
                >
                  Contact us
                </Link>
                .
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-primary-light/20 text-center">
                <div className="text-3xl font-bold text-lighter mb-2">500+</div>
                <div className="text-lighter/70 text-sm">Educators Trained</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-primary-light/20 text-center">
                <div className="text-3xl font-bold text-lighter mb-2">10K+</div>
                <div className="text-lighter/70 text-sm">Students Reached</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-primary-light/20 text-center">
                <div className="text-3xl font-bold text-lighter mb-2">95%</div>
                <div className="text-lighter/70 text-sm">Satisfaction Rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-primary-light/20 text-center">
                <div className="text-3xl font-bold text-lighter mb-2">24/7</div>
                <div className="text-lighter/70 text-sm">Support Access</div>
              </div>
            </div>

            {/* FAQ Categories */}
            <div className="space-y-8">
              {faqCategories.map((category) => (
                <div key={category.title} className="space-y-4">
                  {/* Category Header */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                      <category.icon className="w-6 h-6 text-accent" />
                    </div>
                    <h2 className="text-3xl font-bold text-accent">
                      {category.title}
                    </h2>
                  </div>

                  {/* FAQ Items */}
                  <div className="space-y-3">
                    {category.faqs.map((faq) => (
                      <div
                        key={faq.question}
                        className="bg-white/10 backdrop-blur-sm rounded-xl border border-primary-light/20 overflow-hidden transition-all"
                      >
                        <button
                          type="button"
                          onClick={() =>
                            toggleItem(category.title, faq.question)
                          }
                          className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                        >
                          <span className="text-lg font-semibold text-lighter pr-4">
                            {faq.question}
                          </span>
                          <ChevronDownIcon
                            className={`w-6 h-6 text-accent flex-shrink-0 transition-transform ${
                              isOpen(category.title, faq.question)
                                ? "rotate-180"
                                : ""
                            }`}
                          />
                        </button>
                        <div
                          className={`overflow-hidden transition-all duration-300 ${
                            isOpen(category.title, faq.question)
                              ? "max-h-96 opacity-100"
                              : "max-h-0 opacity-0"
                          }`}
                        >
                          <div className="px-6 pb-6 pt-0 text-lighter/80 leading-relaxed">
                            {faq.answer}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Still Have Questions? */}
            <div className="bg-gradient-to-br from-accent/20 to-transparent rounded-xl p-8 md:p-12 border border-accent/30 text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="text-accent">Still Have</span>
                <span className="text-lighter"> Questions?</span>
              </h2>
              <p className="text-xl text-lighter/80 max-w-2xl mx-auto">
                Can't find the answer you're looking for? Our support team is
                here to help. Reach out and we'll get back to you as soon as
                possible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  size="lg"
                  className="text-lg font-bold bg-accent hover:bg-accent-light text-background px-8 py-6"
                  asChild
                >
                  <Link href="/contact">Contact Support</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg font-bold bg-accent text-background px-8 py-6"
                  asChild
                >
                  <Link href="/home">Browse Courses</Link>
                </Button>
              </div>
            </div>

            {/* Additional Resources */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-primary-light/20">
                <BookOpenIcon className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-xl font-bold text-accent mb-3">
                  Documentation
                </h3>
                <p className="text-lighter/80 mb-4">
                  Explore our comprehensive guides and tutorials.
                </p>
                <Link
                  href="/home"
                  className="text-accent hover:text-accent-light font-semibold"
                >
                  Read Docs →
                </Link>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-primary-light/20">
                <UsersIcon className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-xl font-bold text-accent mb-3">Community</h3>
                <p className="text-lighter/80 mb-4">
                  Join our Discord to connect with other educators.
                </p>
                <a
                  href="https://discord.gg/d22JUxa7Be"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent-light font-semibold"
                >
                  Join Discord →
                </a>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-primary-light/20">
                <GraduationCapIcon className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-xl font-bold text-accent mb-3">
                  Free Trial
                </h3>
                <p className="text-lighter/80 mb-4">
                  Try our intro course for free before committing.
                </p>
                <Link
                  href="/home"
                  className="text-accent hover:text-accent-light font-semibold"
                >
                  Start Free Trial →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Spacing */}
        <div className="h-20" />
      </div>
    </main>
  );
}
