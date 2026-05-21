"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    ArrowRight,
    Play,
    Sparkles,
    Users,
    CheckCircle2,
    ArrowUpRight,
    MessageSquare,
    Bookmark,
    Target
} from "lucide-react";
import { useState, useEffect } from "react";

export default function HeroPage() {
    const [matchScore, setMatchScore] = useState(75);
    const [isMatching, setIsMatching] = useState(false);

    useEffect(() => {
        if (isMatching) {
            const interval = setInterval(() => {
                setMatchScore((prev) => {
                    if (prev >= 98) {
                        clearInterval(interval);
                        setIsMatching(false);
                        return 98;
                    }
                    return prev + 1;
                });
            }, 50);
            return () => clearInterval(interval);
        }
    }, [isMatching]);

    const triggerMatchingDemo = () => {
        setMatchScore(45);
        setIsMatching(true);
    };

    return (
        <section className="relative w-full overflow-hidden bg-white pt-12 pb-16 md:pt-24 md:pb-28 border-b border-zinc-100">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />
            {/* <div className="absolute top-1/4 left-1/2 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-50/50 blur-3xl pointer-events-none" /> */}

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                    {/* Left Column: Text & CTAs */}
                    <div className="lg:col-span-7 flex flex-col items-start text-left">
                        {/* Pill Badge */}
                        <div className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium bg-zinc-100 text-zinc-800 border border-zinc-200/60 mb-6 hover:bg-zinc-200/50 transition-colors cursor-pointer" onClick={triggerMatchingDemo}>
                            <Sparkles className="h-3.5 w-3.5 text-sky-600 animate-pulse" />
                            <span>AI-Powered Matching v2.0 Live</span>
                            <ArrowRight className="h-3 w-3 text-zinc-500" />
                        </div>

                        {/* Main Headline */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-zinc-950 tracking-tight leading-none mb-6">
                            Turn your Goals <br /> into  &nbsp;
                            <span className="relative inline-block text-sky-600">
                                Success
                                <svg className="absolute left-0 bottom-[-4px] w-full h-[6px] text-sky-200" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0,5 Q50,10 100,5" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
                                </svg>
                            </span> with, <br />
                            your peers.
                        </h1>

                        {/* Description */}
                        <p className="text-zinc-600 text-base md:text-lg max-w-xl mb-8 leading-relaxed">
                            LikeMinds connects you with compatible peers based on your specific learning goals. Chat in real-time, collaborate in niche communities, and leverage AI summaries with actionable next steps to stay on track.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-wrap gap-4 mb-10 w-full sm:w-auto">
                            <Link href="/sign-up" className="w-full sm:w-auto">
                                <Button className="w-full sm:w-auto bg-zinc-900 hover:bg-zinc-800 text-white font-medium px-6 py-5 h-auto rounded-xl shadow-lg shadow-zinc-900/10 flex items-center justify-center gap-2 group transition-all duration-200 hover:translate-y-[-1px]">
                                    Join LikeMinds Free
                                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </Link>
                            <button
                                onClick={triggerMatchingDemo}
                                className="w-full sm:w-auto flex items-center justify-center gap-2 border border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-800 font-medium px-6 py-5 h-auto rounded-xl transition-all duration-200"
                            >
                                <Play className="h-3.5 w-3.5 fill-current text-zinc-600" />
                                <span>Test Match AI</span>
                            </button>
                        </div>

                        {/* Key Value Props */}
                        <div className="flex flex-wrap gap-x-8 gap-y-3 pt-6 border-t border-zinc-100 w-full">
                            <div className="flex items-center gap-2">
                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-50 text-sky-600">
                                    <Users className="h-4 w-4" />
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-zinc-900">5,000+</div>
                                    <div className="text-xs text-zinc-500">Active Learners</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                                    <CheckCircle2 className="h-4 w-4" />
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-zinc-900">12,000+</div>
                                    <div className="text-xs text-zinc-500">Successful Matches</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
                                    <Sparkles className="h-4 w-4" />
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-zinc-900">98.4%</div>
                                    <div className="text-xs text-zinc-500">Goals Accomplished</div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Right Column: Phone Mockup */}
                    <div className="lg:col-span-5 flex justify-center items-center relative">

                        {/* Ambient Backlight */}
                        <div className="absolute w-[80%] h-[80%] rounded-full bg-sky-100/50 filter blur-[80px] -z-10" />

                        {/* Mobile Device Frame */}
                        <div className="relative mx-auto border-zinc-900 dark:border-zinc-800 bg-zinc-900 border-[10px] rounded-[2.5rem] h-[540px] w-[270px] shadow-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02]">
                            {/* Speaker Slot & Camera Punch-hole */}
                            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 h-4 w-20 bg-zinc-900 rounded-full z-30 flex items-center justify-center"></div>

                            {/* Status bar */}
                            <div className="absolute top-0 inset-x-0 h-8 bg-zinc-50 z-20 flex justify-between items-center px-6 text-[10px] font-semibold text-zinc-500">
                                <span>9:41</span>
                                <div className="flex items-center gap-1.5">
                                    <span>5G</span>
                                    <div className="w-4 h-2 bg-zinc-400 rounded-sm" />
                                </div>
                            </div>

                            {/* Screen Content */}
                            <div className="h-full bg-zinc-50 pt-8 pb-4 flex flex-col relative select-none">
                                {/* App Header */}
                                <div className="px-4 pt-3 pb-2 border-b border-zinc-100 flex justify-between items-center bg-white">
                                    <span className="text-[11px] font-bold text-zinc-800">LikeMinds AI</span>
                                    <span className="text-[9px] bg-sky-50 text-sky-700 px-2 py-0.5 rounded-full font-semibold">
                                        Pro Matcher
                                    </span>
                                </div>

                                {/* Matchmaking Screen Card */}
                                <div className="flex-1 overflow-y-auto px-3 py-3 space-y-3">

                                    {/* User Profile Info Card */}
                                    <div className="bg-white rounded-xl p-3 border border-zinc-100 shadow-sm flex items-center gap-3">
                                        <div className="relative">
                                            <div className="h-10 w-10 rounded-full bg-sky-100 border border-sky-200 flex items-center justify-center text-xs font-bold text-sky-700">
                                                JD
                                            </div>
                                            <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-500 border-2 border-white" />
                                        </div>
                                        <div className="flex-1 ">
                                            <h4 className="text-xs font-bold text-zinc-800 truncate">Jane Doe</h4>
                                            <p className="text-[9px] text-zinc-400 truncate">React & Next.js Learner</p>
                                        </div>
                                    </div>

                                    {/* Connecting Line / State Indicator */}
                                    <div className="bg-white rounded-xl p-3 border border-zinc-100 shadow-sm space-y-2 relative overflow-hidden">
                                        <div className="flex justify-between items-center text-[10px]">
                                            <span className="text-zinc-500 font-medium">AI Matching Strength</span>
                                            <span className="text-sky-600 font-extrabold">{matchScore}% Match</span>
                                        </div>

                                        {/* Matching Progress Bar */}
                                        <div className="w-full bg-zinc-100 h-2 rounded-full overflow-hidden">
                                            <div
                                                className="bg-sky-600 h-full rounded-full transition-all duration-300"
                                                style={{ width: `${matchScore}%` }}
                                            />
                                        </div>

                                        <div className="flex justify-center py-2 relative">
                                            <div className="flex -space-x-2 items-center">
                                                <div className="h-8 w-8 rounded-full bg-sky-600 text-white flex items-center justify-center text-[10px] font-bold border-2 border-white shadow-sm">
                                                    JD
                                                </div>
                                                <div className="h-5 w-5 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center border border-sky-200 shadow-inner z-10">
                                                    <Sparkles className="h-2.5 w-2.5 animate-spin" />
                                                </div>
                                                <div className="h-8 w-8 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px] font-bold border-2 border-white shadow-sm">
                                                    PM
                                                </div>
                                            </div>
                                        </div>

                                        <p className="text-[9px] text-center text-zinc-500">
                                            {isMatching ? "Scanning learning goals..." : "Compatible study partner identified!"}
                                        </p>
                                    </div>

                                    {/* Goal Alignment Card */}
                                    <div className="bg-white rounded-xl p-3 border border-zinc-100 shadow-sm space-y-2">
                                        <div className="flex items-center gap-1.5 text-[9px] font-bold text-zinc-800 uppercase tracking-wider">
                                            <Target className="h-3 w-3 text-sky-500" />
                                            <span>Aligned Goals</span>
                                        </div>

                                        <div className="space-y-1.5">
                                            <div className="flex items-center justify-between text-[10px] bg-zinc-50 p-1.5 rounded-lg border border-zinc-100">
                                                <span className="text-zinc-600 truncate max-w-[130px] font-medium">Master Next.js v16 App Router</span>
                                                <span className="text-[8px] bg-sky-50 text-sky-700 px-1 rounded">99%</span>
                                            </div>
                                            <div className="flex items-center justify-between text-[10px] bg-zinc-50 p-1.5 rounded-lg border border-zinc-100">
                                                <span className="text-zinc-600 truncate max-w-[130px] font-medium">Build Full-stack SaaS Project</span>
                                                <span className="text-[8px] bg-sky-50 text-sky-700 px-1 rounded">95%</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* AI Conversation Snippet */}
                                    <div className="bg-zinc-900 rounded-xl p-3 text-white space-y-2 shadow-md">
                                        <div className="flex items-center gap-1">
                                            <Sparkles className="h-3 w-3 text-sky-400" />
                                            <span className="text-[8px] font-bold text-zinc-300 uppercase tracking-wider">AI Next Step Generated</span>
                                        </div>
                                        <p className="text-[9px] text-zinc-200 italic leading-snug">
                                            "Schedule a 30-min call to set up a shared repo and define the schema."
                                        </p>
                                        <div className="flex justify-between items-center pt-1 border-t border-zinc-800 text-[8px] text-zinc-400">
                                            <span>Status: Assigned</span>
                                            <span className="text-emerald-400 font-bold">Ready</span>
                                        </div>
                                    </div>

                                </div>

                                {/* Accept Match CTA button */}
                                <div className="px-3 pb-2 pt-1 bg-white border-t border-zinc-100">
                                    <button
                                        onClick={triggerMatchingDemo}
                                        className="w-full bg-sky-600 hover:bg-sky-700 text-white rounded-lg py-2.5 text-[10px] font-bold transition-all shadow-md shadow-sky-600/10 flex items-center justify-center gap-1"
                                    >
                                        <span>Connect & Chat</span>
                                        <ArrowRight className="h-3 w-3" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Extra decorative badges */}
                        <div className="absolute top-1/4 -left-8 bg-white p-3 rounded-xl border border-zinc-200/80 shadow-lg flex items-center gap-2 max-w-[150px] hidden sm:flex">
                            <div className="h-7 w-7 rounded-full bg-sky-50 flex items-center justify-center text-sky-600">
                                <MessageSquare className="h-4.5 w-4.5" />
                            </div>
                            <div>
                                <div className="text-[10px] font-bold text-zinc-900">Real-time Chat</div>
                                <p className="text-[8px] text-zinc-400">Instant learning sync</p>
                            </div>
                        </div>

                        <div className="absolute bottom-1/4 -right-10 bg-white p-3 rounded-xl border border-zinc-200/80 shadow-lg flex items-center gap-2 max-w-[160px] hidden sm:flex">
                            <div className="h-7 w-7 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                                <Bookmark className="h-4.5 w-4.5" />
                            </div>
                            <div>
                                <div className="text-[10px] font-bold text-zinc-900">AI Summaries</div>
                                <p className="text-[8px] text-zinc-400">Automated recap notes</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}