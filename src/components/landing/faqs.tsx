"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

export default function FAQsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How does the AI study partner matching algorithm work?",
      a: "Our algorithm analyzes your stated learning goals (e.g., 'Learn Next.js 16 APIs' or 'Prepare for System Design interviews'), your timezone availability, experience level, and learning style preferences. It then pairs you with the peer who has the highest compatibility score to ensure study alignment."
    },
    {
      q: "Are the learning communities free to join?",
      a: "Yes! Joining public learning communities and matching with up to 3 active peers is completely free on our Starter plan. This includes standard text chat and basic goal tracking."
    },
    {
      q: "How accurate are the AI conversation summaries and next steps?",
      a: "Very accurate. We use specialized LLM models trained on educational communication patterns. The AI scans your collaboration chat history to filter out casual conversation and extract only core technical milestones, tools agreed upon, and actionable checklist items."
    },
    {
      q: "What happens if my matched partner is unresponsive?",
      a: "If your study partner hasn't replied within 48 hours, you can mark the match as inactive. This resets the match slot, and you can immediately trigger a new AI search to find another active partner in the community."
    },
    {
      q: "Can I set up private study groups for my bootcamp or university?",
      a: "Absolutely. Our 'Team Portal' plan is custom-built for educational institutions. It allows you to create a secure, branded sub-domain where only your enrolled cohort members can matching, coordinate study groups, and track collective progress."
    },
    {
      q: "Can I change my learning goals later?",
      a: "Yes. You can edit your active learning targets at any time from your profile dashboard. Once updated, the AI matchmaker will adapt and search for study partners that align with your new goals."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="relative w-full py-20 bg-zinc-50 border-b border-zinc-100">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold text-sky-600 uppercase tracking-widest mb-3">
            Got Questions?
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-950 tracking-tight mb-4">
            Questions? We've Got Answers.
          </h2>
          <p className="text-zinc-500 text-sm md:text-base">
            Everything you need to know about peer-matching, AI summaries, and community access.
          </p>
        </div>

        {/* FAQs Accordion Grid */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div 
                key={i} 
                className="bg-white border border-zinc-200/60 rounded-2xl overflow-hidden transition-all duration-200"
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => toggleFAQ(i)}
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-xs md:text-sm text-zinc-900 hover:text-zinc-950 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3 pr-4">
                    <HelpCircle className="h-4.5 w-4.5 text-zinc-400 shrink-0" />
                    <span>{faq.q}</span>
                  </div>
                  {isOpen ? (
                    <ChevronUp className="h-4 w-4 text-zinc-500 shrink-0" />
                  ) : (
                    <ChevronDown className="h-4 w-4 text-zinc-500 shrink-0" />
                  )}
                </button>

                {/* Accordion Content */}
                <div 
                  className={`transition-all duration-200 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-[500px] border-t border-zinc-100" : "max-h-0"
                  }`}
                >
                  <div className="p-5 text-xs md:text-sm text-zinc-500 leading-relaxed bg-zinc-50/30">
                    {faq.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
