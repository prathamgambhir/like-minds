"use client";

import { Clock, MessageCircle, HeartHandshake, Zap } from "lucide-react";

export default function StatsSection() {
  const stats = [
    {
      id: "study-hours",
      number: "500K+",
      label: "Study Hours Logged",
      desc: "Total collaborative hours spent studying in virtual pairs and rooms.",
      icon: Clock,
      colorClass: "bg-sky-50 text-sky-600",
      borderColor: "hover:border-sky-200",
    },
    {
      id: "messages-sent",
      number: "240K+",
      label: "Messages Sent",
      desc: "Real-time messages exchanged between matched peers on specific goals.",
      icon: MessageCircle,
      colorClass: "bg-emerald-50 text-emerald-600",
      borderColor: "hover:border-emerald-200",
    },
    {
      id: "active-matches",
      number: "10K+",
      label: "Active Matches",
      desc: "Successful study pairs connected and working toward mastery.",
      icon: HeartHandshake,
      colorClass: "bg-pink-50 text-pink-600",
      borderColor: "hover:border-pink-200",
    },
    {
      id: "match-time",
      number: "4.8m",
      label: "Avg. Matching Time",
      desc: "Average time it takes for our AI agent to identify your ideal partner.",
      icon: Zap,
      colorClass: "bg-amber-50 text-amber-600",
      borderColor: "hover:border-amber-200",
    },
  ];

  return (
    <section className="relative w-full py-16 bg-white border-b border-zinc-100">
      <div className="container mx-auto px-4">
        {/* Simple Label above the Stats Grid */}
        <div className="text-center mb-8">
          <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
            Numbers That Empower Learning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={stat.id}
                id={`stat-card-${stat.id}`}
                className={`bg-white p-6 rounded-2xl border border-zinc-200/60 shadow-sm transition-all duration-300 ${stat.borderColor} hover:shadow-md hover:translate-y-[-2px] flex flex-col justify-between`}
              >
                <div>
                  {/* Icon */}
                  <div
                    className={`h-10 w-10 rounded-xl flex items-center justify-center mb-4 ${stat.colorClass}`}
                  >
                    <IconComponent className="h-5 w-5" />
                  </div>

                  {/* Stat Number */}
                  <div className="text-3xl font-extrabold text-zinc-950 tracking-tight mb-1">
                    {stat.number}
                  </div>

                  {/* Label */}
                  <div className="text-sm font-bold text-zinc-900 mb-2">
                    {stat.label}
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-zinc-500 leading-relaxed mb-0">
                  {stat.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
