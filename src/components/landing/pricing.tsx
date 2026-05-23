"use client";

import { useState } from "react";
import { Check, HelpCircle, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PricingSection() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annually">("monthly");

  const plans = [
    {
      name: "Starter",
      desc: "Perfect for casual learners looking to try out collaborative learning.",
      price: {
        monthly: "$0",
        annually: "$0"
      },
      periodLabel: "forever",
      cta: "Start Free",
      popular: false,
      features: [
        "Core AI matching algorithm",
        "Up to 3 active matches",
        "Direct peer-to-peer chat",
        "Access to public communities",
        "Basic goal pathways"
      ],
      colorClass: "bg-white text-zinc-950 border-zinc-200 hover:border-zinc-300",
      btnVariant: "outline" as const
    },
    {
      name: "Pro",
      desc: "Ideal for serious builders and students aiming for maximum accountability.",
      price: {
        monthly: "$9",
        annually: "$7"
      },
      periodLabel: "per month",
      cta: "Unlock Pro Matcher",
      popular: true,
      features: [
        "Unlimited AI matching",
        "Unlimited active study pairs",
        "AI conversation summaries",
        "Actionable task checklists",
        "Priority community portal entry",
        "Custom learning path templates",
        "Pro badges & profile styling"
      ],
      colorClass: "bg-zinc-950 text-white border-zinc-900 shadow-xl scale-[1.03]",
      btnVariant: "default" as const
    },
    {
      name: "Team Portal",
      desc: "Tailored for coding bootcamps, schools, and university study groups.",
      price: {
        monthly: "$29",
        annually: "$24"
      },
      periodLabel: "per seat / month",
      cta: "Contact Bootcamps",
      popular: false,
      features: [
        "Custom sub-domain portal",
        "Private community creation",
        "Cohort analytics & progress tracking",
        "Team coordinator roles",
        "Dedicated customer support",
        "SSO & Custom authentication integrations"
      ],
      colorClass: "bg-white text-zinc-950 border-zinc-200 hover:border-zinc-300",
      btnVariant: "outline" as const
    }
  ];

  return (
    <section id="pricing" className="relative w-full py-20 bg-white border-b border-zinc-100">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs font-bold text-sky-600 uppercase tracking-widest mb-3">
            Pricing Plans
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-950 tracking-tight mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-zinc-500 text-sm md:text-base">
            Start matching for free, and unlock premium AI features when you are ready to escalate your learning goals.
          </p>
        </div>

        {/* Monthly/Annual Toggle Switch */}
        <div className="flex justify-center items-center gap-3 mb-16">
          <span className={`text-xs font-bold ${billingPeriod === "monthly" ? "text-zinc-950" : "text-zinc-400"}`}>
            Bill Monthly
          </span>
          
          <button 
            onClick={() => setBillingPeriod(billingPeriod === "monthly" ? "annually" : "monthly")}
            className="w-12 h-6 bg-zinc-200 rounded-full relative p-0.5 transition-colors duration-250 focus:outline-none"
            aria-label="Toggle billing interval"
          >
            <div 
              className={`w-5 h-5 bg-zinc-900 rounded-full transition-transform duration-250 ${
                billingPeriod === "annually" ? "translate-x-6 bg-sky-600" : ""
              }`}
            />
          </button>

          <span className={`text-xs font-bold flex items-center gap-1.5 ${billingPeriod === "annually" ? "text-zinc-950" : "text-zinc-400"}`}>
            <span>Bill Annually</span>
            <span className="text-[9px] bg-sky-50 text-sky-700 px-2 py-0.5 rounded-full font-extrabold uppercase tracking-wide">
              Save 20%
            </span>
          </span>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={`rounded-3xl border p-8 flex flex-col justify-between transition-all duration-300 relative ${
                plan.popular ? "hover:scale-[1.04]" : "hover:translate-y-[-2px]"
              } ${plan.colorClass}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <span className="absolute top-4 right-6 bg-sky-600 text-white font-extrabold text-[8px] uppercase tracking-widest px-2.5 py-1 rounded-full">
                  Best Value
                </span>
              )}

              <div>
                {/* Plan Title & description */}
                <h3 className="text-lg font-bold mb-2">{plan.name}</h3>
                <p className={`text-xs mb-6 leading-relaxed ${plan.popular ? "text-zinc-400" : "text-zinc-500"}`}>
                  {plan.desc}
                </p>

                {/* Price Display */}
                <div className="flex items-baseline gap-1.5 mb-8">
                  <span className="text-4xl font-extrabold tracking-tight">
                    {billingPeriod === "monthly" ? plan.price.monthly : plan.price.annually}
                  </span>
                  <span className={`text-xs font-semibold ${plan.popular ? "text-zinc-400" : "text-zinc-500"}`}>
                    / {plan.periodLabel}
                  </span>
                </div>

                {/* Feature List */}
                <div className={`border-t py-6 space-y-3.5 ${plan.popular ? "border-zinc-800" : "border-zinc-100"}`}>
                  <span className="text-[10px] font-bold uppercase tracking-wider block mb-4">
                    Features Included
                  </span>
                  
                  {plan.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs">
                      <Check className={`h-4 w-4 shrink-0 ${plan.popular ? "text-sky-400" : "text-sky-600"}`} />
                      <span className={plan.popular ? "text-zinc-200 font-medium" : "text-zinc-700 font-medium"}>
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6">
                <Button 
                  className={`w-full py-5 rounded-xl font-bold text-xs ${
                    plan.popular 
                      ? "bg-sky-600 hover:bg-sky-500 text-white shadow-lg shadow-sky-600/10" 
                      : "border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-950"
                  }`}
                  variant={plan.btnVariant}
                >
                  {plan.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
