"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, LogIn, Compass, Zap, MessageSquare } from "lucide-react";

export default function WorkflowStepsSection() {
  const steps = [
    {
      step: "01",
      title: "Join & Set Goals",
      desc: "Join niche learning communities (like Next.js, System Design, or ML) and define your exact study objectives.",
      icon: Compass,
      color: "text-sky-600 bg-sky-50",
    },
    {
      step: "02",
      title: "Get Matched via AI",
      desc: "Our matching engine scans the community to pair you with a compatible peer who shares your targets and schedule.",
      icon: Zap,
      color: "text-emerald-600 bg-emerald-50",
    },
    {
      step: "03",
      title: "Collab & AI Action Steps",
      desc: "Chat in real-time. After sessions, get automated AI summaries and checkboxes outlining your next steps.",
      icon: MessageSquare,
      color: "text-pink-600 bg-pink-50",
    },
  ];

  return (
    <section className="relative w-full py-24 bg-white border-b border-zinc-100">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold text-sky-600 uppercase tracking-widest mb-3">
            Simple Process
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-950 tracking-tight mb-4">
            From Goal to Mastery in 3 Simple Steps
          </h2>
          <p className="text-zinc-500 text-sm md:text-base">
            No complex set up. Start learning with compatible accountability
            partners in under 5 minutes.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {steps.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="relative bg-zinc-50 border border-zinc-200/50 rounded-2xl p-6 hover:border-zinc-300 transition-all duration-300 group"
              >
                {/* Connector Line */}
                {i < 2 && (
                  <div className="absolute top-1/2 -right-4 w-8 h-[1px] bg-zinc-200 hidden md:block z-10" />
                )}

                {/* Top bar with Step Counter and Icon */}
                <div className="flex justify-between items-center mb-6">
                  <span className="text-3xl font-extrabold text-zinc-300 font-mono tracking-tight select-none">
                    {item.step}
                  </span>

                  <div
                    className={`h-9 w-9 rounded-xl flex items-center justify-center ${item.color}`}
                  >
                    <Icon className="h-4.5 w-4.5" />
                  </div>
                </div>

                {/* Step Details */}
                <h3 className="text-base font-bold text-zinc-950 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-500 leading-relaxed mb-0">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA bar */}
        <div className="bg-zinc-50 border border-zinc-200/60 rounded-2xl p-6 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h4 className="text-sm font-bold text-zinc-900 mb-1">
              Ready to meet your learning partner?
            </h4>
            <p className="text-xs text-zinc-500 mb-0">
              Join today to scan for active peers in your niche.
            </p>
          </div>

          <div className="flex gap-3 shrink-0">
            <Link href="/sign-up">
              <Button
                size="sm"
                className="bg-zinc-900 hover:bg-zinc-800 text-white font-bold rounded-lg px-4 flex items-center gap-1"
              >
                <span>Start Matching</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </Link>
            <Link href="#pricing">
              <Button
                size="sm"
                variant="outline"
                className="border-zinc-200 bg-white font-bold rounded-lg px-4"
              >
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
