"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative w-full py-20 bg-zinc-950 text-white overflow-hidden">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      
      {/* Ambient Gradient Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-[350px] h-[350px] rounded-full bg-sky-500/10 blur-[80px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 translate-x-1/2 w-[350px] h-[350px] rounded-full bg-emerald-500/10 blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold bg-zinc-900 text-sky-400 border border-zinc-800 mb-6 select-none">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Stop Self-Studying Alone</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 max-w-2xl mx-auto leading-none">
          Start Learning Faster <br />With LikeMinds Today
        </h2>

        {/* Subtitle */}
        <p className="text-zinc-400 text-sm md:text-base max-w-lg mx-auto mb-10 leading-relaxed">
          Join a community of active builders, get matched with compatible accountability partners, and accelerate your growth with AI support.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link href="/sign-up" className="w-full sm:w-auto">
            <Button className="w-full sm:w-auto bg-white hover:bg-zinc-100 text-zinc-950 font-bold px-8 py-5 h-auto rounded-xl flex items-center justify-center gap-1.5 shadow-lg transition-transform hover:scale-[1.02]">
              <span>Get Started Free</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <a href="#how-it-works" className="w-full sm:w-auto">
            <Button variant="outline" className="w-full sm:w-auto border-sky-800 hover:bg-sky-700 bg-sky-600 text-white font-bold px-8 py-5 h-auto rounded-xl flex items-center justify-center gap-1.5 hover:scale-102 transition-all duration-300">
              <Play className="h-3 w-3 fill-current" />
              <span>Watch Interactive Demo</span>
            </Button>
          </a>
        </div>

        {/* Micro Badges / Social Proof */}
        <div className="flex justify-center items-center gap-x-8 gap-y-4 flex-wrap text-xs text-zinc-500 font-medium">
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
            No credit card required
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Setup in under 2 minutes
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
            Cancel any plan anytime
          </span>
        </div>

      </div>
    </section>
  );
}
