"use client";

import { useState } from "react";
import {
  Compass,
  GitMerge,
  Clock,
  FileText,
  Sparkles,
  CheckSquare,
  Target,
  Share2,
} from "lucide-react";

export default function FeaturesSection() {
  const [activeGoalIndex, setActiveGoalIndex] = useState(1);

  return (
    <section
      id="features"
      className="relative w-full py-24 bg-white border-b border-zinc-100"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold text-sky-600 uppercase tracking-widest mb-3">
            Core Features
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-950 tracking-tight mb-4">
            Everything You Need to Succeed Together
          </h2>
          <p className="text-zinc-500 text-base md:text-lg">
            LikeMinds provides the matching, goal-tracking, and AI tools to make
            peer-to-peer learning structured, accountable, and high-impact.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Card 1: AI Compatibility Matcher (lg:col-span-7) */}
          <div className="lg:col-span-7 bg-zinc-50 rounded-3xl p-8 border border-zinc-200/50 flex flex-col justify-between overflow-hidden relative group hover:border-zinc-300 transition-all duration-300">
            <div>
              <div className="h-10 w-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-6">
                <Compass className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-2">
                AI-Powered Compatibility
              </h3>
              <p className="text-sm text-zinc-500 max-w-md mb-6">
                Our algorithm matches you based on your learning goals, timezone
                compatibility, and experience level. No more scrolling through
                forums.
              </p>
            </div>

            {/* Visual Widget: Compatibility Graph */}
            <div className="bg-white rounded-2xl border border-zinc-200/60 p-6 shadow-sm mt-4 relative overflow-hidden">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-bold text-zinc-800">
                  Match Compatibility Matrix
                </span>
                <span className="text-xs bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded font-bold">
                  96% High Match
                </span>
              </div>

              <div className="space-y-3.5">
                {/* Interest alignment */}
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-zinc-500">
                      Learning Interest Alignment
                    </span>
                    <span className="text-zinc-800 font-semibold">98%</span>
                  </div>
                  <div className="w-full bg-zinc-100 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-sky-600 h-full rounded-full"
                      style={{ width: "98%" }}
                    />
                  </div>
                </div>

                {/* Timezone alignment */}
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-zinc-500">
                      Timezone overlap (+/- 1 hr)
                    </span>
                    <span className="text-zinc-800 font-semibold">85%</span>
                  </div>
                  <div className="w-full bg-zinc-100 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-sky-400 h-full rounded-full"
                      style={{ width: "85%" }}
                    />
                  </div>
                </div>

                {/* Goal Complexity alignment */}
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-zinc-500">
                      Experience & Project Scope
                    </span>
                    <span className="text-zinc-800 font-semibold">92%</span>
                  </div>
                  <div className="w-full bg-zinc-100 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-zinc-800 h-full rounded-full"
                      style={{ width: "92%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Goal-Oriented Pathways (lg:col-span-5) */}
          <div className="lg:col-span-5 bg-zinc-50 rounded-3xl p-8 border border-zinc-200/50 flex flex-col justify-between overflow-hidden hover:border-zinc-300 transition-all duration-300">
            <div>
              <div className="h-10 w-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
                <Target className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-2">
                Goal-Oriented Pathways
              </h3>
              <p className="text-sm text-zinc-500 mb-6">
                Set active targets. Track milestones collaboratively with your
                partner to make sure you stay aligned and focused.
              </p>
            </div>

            {/* Visual Widget: Timeline Milestones */}
            <div className="bg-white rounded-2xl border border-zinc-200/60 p-4 shadow-sm mt-4 space-y-3">
              {[
                { label: "Find Next.js partner", completed: true },
                { label: "Define database & auth schema", completed: true },
                { label: "Build main API routes & test", completed: false },
                { label: "Deploy staging server", completed: false },
              ].map((step, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveGoalIndex(idx)}
                  className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-all ${
                    idx === activeGoalIndex
                      ? "bg-sky-50/50 border border-sky-100"
                      : "border border-transparent hover:bg-zinc-50"
                  }`}
                >
                  <div
                    className={`h-5 w-5 rounded-full flex items-center justify-center ${
                      step.completed
                        ? "bg-emerald-100 text-emerald-700"
                        : "border border-zinc-300 text-zinc-400"
                    }`}
                  >
                    <CheckSquare className="h-3 w-3" />
                  </div>
                  <span
                    className={`text-xs font-semibold ${
                      step.completed
                        ? "text-zinc-500 line-through"
                        : "text-zinc-800"
                    }`}
                  >
                    {step.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 3: Activity Breakdown (lg:col-span-4) */}
          <div className="lg:col-span-4 bg-zinc-50 rounded-3xl p-8 border border-zinc-200/50 flex flex-col justify-between hover:border-zinc-300 transition-all duration-300">
            <div>
              <div className="h-10 w-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-6">
                <Clock className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-2">
                Activity Insights
              </h3>
              <p className="text-sm text-zinc-500 mb-6">
                Review your study time patterns. Analyze active metrics
                detailing which goals are taking up the most of your
                collaboration hours.
              </p>
            </div>

            {/* Visual Widget: Pie-like SVG Chart */}
            <div className="bg-white rounded-2xl border border-zinc-200/60 p-5 shadow-sm mt-4 flex items-center justify-center">
              <svg
                width="120"
                height="120"
                viewBox="0 0 36 36"
                className="transform -rotate-90"
              >
                <circle
                  cx="18"
                  cy="18"
                  r="15.915"
                  fill="none"
                  stroke="#f4f4f5"
                  strokeWidth="3"
                />

                {/* 50% React */}
                <circle
                  cx="18"
                  cy="18"
                  r="15.915"
                  fill="none"
                  stroke="#6495ED"
                  strokeWidth="3"
                  strokeDasharray="50 100"
                  strokeDashoffset="0"
                />

                {/* 30% TS */}
                <circle
                  cx="18"
                  cy="18"
                  r="15.915"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="3"
                  strokeDasharray="30 100"
                  strokeDashoffset="-50"
                />

                {/* 20% Next.js */}
                <circle
                  cx="18"
                  cy="18"
                  r="15.915"
                  fill="none"
                  stroke="#18181b"
                  strokeWidth="3"
                  strokeDasharray="20 100"
                  strokeDashoffset="-80"
                />
              </svg>

              <div className="ml-5 space-y-1.5 text-[10px]">
                <div className="flex items-center gap-1.5 font-bold text-zinc-800">
                  <span className="w-2.5 h-2.5 rounded-full bg-sky-600 inline-block" />
                  <span>50% React Dev</span>
                </div>
                <div className="flex items-center gap-1.5 font-bold text-zinc-800">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
                  <span>30% TypeScript</span>
                </div>
                <div className="flex items-center gap-1.5 font-bold text-zinc-800">
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-900 inline-block" />
                  <span>20% Next.js APIs</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: AI Summary Pipeline (lg:col-span-4) */}
          <div className="lg:col-span-4 bg-zinc-50 rounded-3xl p-8 border border-zinc-200/50 flex flex-col justify-between hover:border-zinc-300 transition-all duration-300">
            <div>
              <div className="h-10 w-10 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center mb-6">
                <FileText className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-2">
                Automated Next Steps
              </h3>
              <p className="text-sm text-zinc-500 mb-6">
                Our AI summarizes your chat conversations to distill complex
                sessions into straightforward todo items automatically.
              </p>
            </div>

            {/* Visual Widget: AI summary transition cards */}
            <div className="bg-white rounded-2xl border border-zinc-200/60 p-4 shadow-sm mt-4 space-y-3 relative overflow-hidden">
              <div className="bg-zinc-50 p-2 rounded-lg border border-zinc-100 text-[10px] text-zinc-500 italic">
                "...we need to set up Clerk authentication in our dashboard
                directory next..."
              </div>
              <div className="flex justify-center">
                <GitMerge className="h-4 w-4 text-zinc-400 rotate-90" />
              </div>
              <div className="bg-zinc-950 p-2.5 rounded-lg text-white text-[9px] flex items-center gap-2">
                <Sparkles className="h-3 w-3 text-sky-400" />
                <span className="font-semibold">
                  Task: Implement Clerk authentication
                </span>
              </div>
            </div>
          </div>

          {/* Card 5: Skill heatmap (lg:col-span-4) */}
          <div className="lg:col-span-4 bg-zinc-50 rounded-3xl p-8 border border-zinc-200/50 flex flex-col justify-between hover:border-zinc-300 transition-all duration-300">
            <div>
              <div className="h-10 w-10 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center mb-6">
                <Share2 className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-2">
                Topic & Skill Networks
              </h3>
              <p className="text-sm text-zinc-500 mb-6">
                Instantly tap into communities focusing on specific niches,
                libraries, or core computer science fundamentals.
              </p>
            </div>

            {/* Visual Widget: Skills tag cloud */}
            <div className="bg-white rounded-2xl border border-zinc-200/60 p-4 shadow-sm mt-4 flex flex-wrap gap-2 justify-center">
              {[
                {
                  name: "Next.js",
                  scale: "bg-sky-600 text-white font-bold",
                },
                { name: "SaaS Dev", scale: "bg-zinc-900 text-white" },
                {
                  name: "Machine Learning",
                  scale: "bg-zinc-100 text-zinc-700",
                },
                {
                  name: "Typescript",
                  scale: "bg-sky-50 text-sky-700 font-bold",
                },
                { name: "Python AI", scale: "bg-emerald-50 text-emerald-700" },
                { name: "Solidity", scale: "bg-zinc-100 text-zinc-500" },
                { name: "System Design", scale: "bg-pink-50 text-pink-700" },
              ].map((skill, idx) => (
                <span
                  key={idx}
                  className={`text-[10px] px-2.5 py-1.5 rounded-full transition-transform hover:scale-[1.03] cursor-default ${skill.scale}`}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
