"use client";

import { Sparkles, Star } from "lucide-react";

export default function TestimonialsSection() {
  const reviews = [
    {
      name: "Marcus Aurelius",
      handle: "@marcus_learns",
      avatar: "MA",
      text: "I was looking for someone to study advanced compiler design with. Within 10 minutes of setting my goals, LikeMinds matched me with a grad student. We've been studying 5 hours a week since!",
    },
    {
      name: "Sarah Chen",
      handle: "@sarahc_dev",
      avatar: "SC",
      text: "The AI conversation summaries are a complete game-changer. My study partner and I talk in chat, and when we wake up the next morning, we have a clean checklist of coding tasks ready.",
    },
    {
      name: "David K.",
      handle: "@david_builds",
      avatar: "DK",
      text: "LikeMinds provides the structure that other platforms lack. Instead of just general chat rooms, you join targeted communities and get accountability partners matched specifically to your goals.",
    },
    {
      name: "Emily Watson",
      handle: "@emily_codes",
      avatar: "EW",
      text: "I was skeptical about AI matchmakers, but my compatibility score was 98% and it was spot on. My partner shares my schedule and experience level. Highly recommend!",
    },
    {
      name: "Rajesh Kumar",
      handle: "@rajesh_k",
      avatar: "RK",
      text: "Being self-taught is lonely. LikeMinds has connected me with peers who push me to complete my projects. The goal pathway keep us focused, and the community is amazing.",
    },
    {
      name: "Sofia Rossi",
      handle: "@sofia_codes",
      avatar: "SR",
      text: "Next.js 16 was a struggle until I paired up with Sofia. Having someone to explain concepts to and sync schemas with is the best way to learn. Thank you, LikeMinds team!",
    },
  ];

  return (
    <section
      id="testimonials"
      className="relative w-full py-24 bg-white border-b border-zinc-100"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold text-sky-600 uppercase tracking-widest mb-3">
            Social Proof
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-950 tracking-tight mb-4">
            Learners Are Succeeding, Fast.
          </h2>
          <p className="text-zinc-500 text-sm md:text-base">
            See what self-taught developers, university students, and senior
            builders are saying about their matches.
          </p>
        </div>

        {/* Featured Big Showcase Card (Black Box) */}
        <div className="max-w-5xl mx-auto bg-zinc-900 text-white rounded-3xl p-8 md:p-12 shadow-xl mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-sky-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left: Headline and Quote */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-1 bg-zinc-800 border border-zinc-700 px-3 py-1 rounded-full text-xs text-sky-400 font-semibold">
                <Sparkles className="h-3 w-3" />
                <span>Featured Success Story</span>
              </div>

              <blockquote className="text-lg md:text-xl font-medium leading-relaxed italic text-zinc-100">
                " LikeMinds completely changed how I learn. I found a study
                partner for advanced machine learning within 5 minutes, and our
                AI-generated weekly goals kept us 100% accountable. "
              </blockquote>

              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-sky-600 flex items-center justify-center font-bold text-white text-sm">
                  AR
                </div>
                <div>
                  <div className="text-sm font-bold text-white">
                    Alex Rivera
                  </div>
                  <div className="text-xs text-zinc-400">
                    Lead AI Engineer & Learner
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Metrics Grid */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4 border-t border-zinc-800 lg:border-t-0 lg:border-l lg:border-zinc-800 pt-8 lg:pt-0 lg:pl-8">
              <div className="space-y-1">
                <div className="text-3xl font-extrabold text-white">400%</div>
                <div className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">
                  Productivity Boost
                </div>
                <p className="text-[9px] text-zinc-500">
                  Compared to self-study
                </p>
              </div>

              <div className="space-y-1">
                <div className="text-3xl font-extrabold text-white">12h+</div>
                <div className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">
                  Saved Weekly
                </div>
                <p className="text-[9px] text-zinc-500">
                  Automated recap notes
                </p>
              </div>

              <div className="space-y-1">
                <div className="text-3xl font-extrabold text-white">99.1%</div>
                <div className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">
                  Match Score Accuracy
                </div>
                <p className="text-[9px] text-zinc-500">AI-optimized vetting</p>
              </div>

              <div className="space-y-1">
                <div className="text-3xl font-extrabold text-white">2.5k</div>
                <div className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">
                  Communities Joined
                </div>
                <p className="text-[9px] text-zinc-500">
                  Spanning global niches
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 6-Card Review Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reviews.map((rev, i) => (
            <div
              key={i}
              className="bg-zinc-50 border border-zinc-200/50 p-6 rounded-2xl flex flex-col justify-between hover:border-zinc-300 transition-all duration-300"
            >
              <div className="space-y-4">
                {/* Five Stars */}
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, s) => (
                    <Star
                      key={s}
                      className="h-3 w-3 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-xs text-zinc-600 leading-relaxed font-medium">
                  "{rev.text}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="flex items-center gap-3 pt-6 border-t border-zinc-200/40 mt-6">
                <div className="h-8 w-8 rounded-full bg-zinc-200 text-zinc-700 text-[10px] font-extrabold flex items-center justify-center shrink-0">
                  {rev.avatar}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-zinc-900">
                    {rev.name}
                  </h4>
                  <span className="text-[10px] text-zinc-400">
                    {rev.handle}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
