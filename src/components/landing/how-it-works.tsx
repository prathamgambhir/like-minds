"use client";

import { useState } from "react";
import { 
  Sparkles, 
  MessageSquare, 
  CheckSquare, 
  Search, 
  Check, 
  ChevronRight, 
  User, 
  BookOpen, 
  Calendar,
  Send,
  Lock
} from "lucide-react";

export default function HowItWorksSection() {
  const [activeTab, setActiveTab] = useState<"match" | "chat" | "summarize">("match");

  return (
    <section id="how-it-works" className="relative w-full py-24 bg-white border-b border-zinc-100">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs font-bold text-sky-600 uppercase tracking-widest mb-3">
            Interactive Experience
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-950 tracking-tight mb-4">
            From Matching to Mastery, Watch It Happen
          </h2>
          <p className="text-zinc-500 text-sm md:text-base">
            Click through the stages below to see how our AI matching system helps you connect, coordinate, and crush your goals.
          </p>
        </div>

        {/* Interactive Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-zinc-200/60 p-1.5 rounded-2xl border border-zinc-200">
            {[
              { id: "match", label: "1. Match", icon: Sparkles },
              { id: "chat", label: "2. Chat", icon: MessageSquare },
              { id: "summarize", label: "3. Summarize", icon: CheckSquare }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  id={`tab-btn-${tab.id}`}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs md:text-sm font-bold transition-all ${
                    activeTab === tab.id 
                      ? "bg-white text-zinc-950 shadow-sm" 
                      : "text-zinc-500 hover:text-zinc-900"
                  }`}
                >
                  <Icon className={`h-4 w-4 ${activeTab === tab.id ? "text-sky-600" : "text-zinc-400"}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Web Mockup Container */}
        <div className="max-w-5xl mx-auto bg-white rounded-3xl border border-zinc-200/80 shadow-2xl overflow-hidden">
          
          {/* Browser Header Bar */}
          <div className="bg-zinc-100 px-4 py-3 border-b border-zinc-200 grid grid-cols-12">
            {/* Window Controls */}
            <div className="col-span-4 flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-400" />
              <span className="w-3 h-3 rounded-full bg-amber-400" />
              <span className="w-3 h-3 rounded-full bg-green-400" />
            </div>

            {/* URL Bar */}
            <div className="col-span-8 bg-zinc-200/70 text-zinc-500 text-[10px] md:text-xs px-8 py-1 rounded-lg w-1/2 text-center font-medium truncate select-none">
              likeminds.ai/dashboard/matching
            </div>
          </div>

          {/* Main Dashboard Workspace Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 min-h-[500px] bg-white">
            
            {/* Sidebar (md:col-span-3) */}
            <aside className="md:col-span-3 border-r border-zinc-100 p-4 space-y-6 hidden md:block">
              {/* Logo / Title */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-zinc-950">LikeMinds OS</span>
              </div>

              {/* Navigation Menu */}
              <nav className="space-y-1">
                {[
                  { label: "Dashboard", active: false },
                  { label: "AI Matchmaker", active: activeTab === "match" },
                  { label: "Communities", active: false },
                  { label: "Direct Chats", active: activeTab === "chat" || activeTab === "summarize" },
                  { label: "Goal Roadmap", active: false }
                ].map((menu, i) => (
                  <div 
                    key={i} 
                    className={`text-[11px] font-bold px-3 py-2 rounded-lg cursor-default ${
                      menu.active 
                        ? "bg-sky-50 text-sky-700" 
                        : "text-zinc-500 hover:bg-zinc-50"
                    }`}
                  >
                    {menu.label}
                  </div>
                ))}
              </nav>

              {/* Active Communities */}
              <div className="space-y-2">
                <span className="text-[9px] font-extrabold text-zinc-400 uppercase tracking-widest block px-3">
                  My Groups
                </span>
                <div className="space-y-1">
                  <div className="text-[10px] font-semibold text-zinc-600 px-3 py-1 flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    <span>Next.js Mastery</span>
                  </div>
                  <div className="text-[10px] font-semibold text-zinc-600 px-3 py-1 flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-sky-500" />
                    <span>ML Study Group</span>
                  </div>
                </div>
              </div>
            </aside>

            {/* Central Panel Workspace (md:col-span-9) */}
            <main className="md:col-span-9 flex flex-col bg-zinc-50/30">
              
              {/* Top Action Ribbon */}
              <div className="bg-white border-b border-zinc-100 px-6 py-3 flex items-center justify-between">
                <h3 className="text-xs font-bold text-zinc-800">
                  {activeTab === "match" && "AI Peer Matchmaker"}
                  {activeTab === "chat" && "Collaboration Room"}
                  {activeTab === "summarize" && "AI Copilot Dashboard"}
                </h3>
                
                {/* User Info / Header details */}
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-zinc-500">Status: Active</span>
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </div>
              </div>

              {/* Dynamic Content Body based on tab */}
              <div className="flex-1 p-6 flex flex-col justify-center">
                
                {/* 1. MATCH TAB CONTENT */}
                {activeTab === "match" && (
                  <div className="space-y-6 max-w-lg mx-auto w-full animate-fade-in">
                    
                    {/* Compatibility Card */}
                    <div className="bg-white rounded-2xl border border-zinc-200/70 p-5 shadow-sm space-y-4">
                      
                      {/* Profiles info */}
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-sky-600 text-white flex items-center justify-center text-xs font-extrabold shadow-sm">
                            JD
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-zinc-900">Jane Doe</h4>
                            <p className="text-[10px] text-zinc-400">Software Engineer @ Berkeley</p>
                          </div>
                        </div>

                        {/* Match strength pill */}
                        <div className="bg-sky-50 border border-sky-100 rounded-full px-2.5 py-1 flex items-center gap-1">
                          <Sparkles className="h-3 w-3 text-sky-600" />
                          <span className="text-[10px] font-extrabold text-sky-700">98% Match</span>
                        </div>
                      </div>

                      {/* Goal alignment details */}
                      <div className="bg-zinc-50 rounded-xl p-3.5 border border-zinc-200/50 space-y-2">
                        <div className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">
                          Shared Learning Goals
                        </div>
                        <ul className="space-y-1.5 text-xs text-zinc-700">
                          <li className="flex items-center gap-2 font-medium">
                            <Check className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                            <span>Build & Deploy Fullstack SaaS</span>
                          </li>
                          <li className="flex items-center gap-2 font-medium">
                            <Check className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                            <span>Integrate Clerk Auth & Next.js 16 APIs</span>
                          </li>
                        </ul>
                      </div>

                      {/* Matching Action */}
                      <div className="flex items-center justify-between pt-2">
                        <div className="text-[10px] text-zinc-500">
                          Matched today at 2:30 PM
                        </div>
                        <button 
                          onClick={() => setActiveTab("chat")}
                          className="bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs px-4 py-2.5 rounded-lg transition shadow-md shadow-sky-600/10 flex items-center gap-1.5"
                        >
                          <span>Accept & Chat</span>
                          <ChevronRight className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. CHAT TAB CONTENT */}
                {activeTab === "chat" && (
                  <div className="bg-white border border-zinc-200/70 rounded-2xl shadow-sm h-[320px] flex flex-col max-w-xl mx-auto w-full overflow-hidden animate-fade-in">
                    
                    {/* Chat Header */}
                    <div className="bg-zinc-50/50 border-b border-zinc-100 px-4 py-2.5 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-7 w-7 rounded-full bg-sky-600 text-white text-[10px] font-extrabold flex items-center justify-center">
                          JD
                        </div>
                        <div>
                          <div className="text-[10px] font-bold text-zinc-900">Jane Doe</div>
                          <p className="text-[8px] text-emerald-500 font-semibold">Active Match</p>
                        </div>
                      </div>
                      
                      <button 
                        onClick={() => setActiveTab("summarize")}
                        className="text-[9px] bg-sky-50 text-sky-700 border border-sky-100 px-2 py-1 rounded font-bold hover:bg-sky-100/70"
                      >
                        Generate Summary
                      </button>
                    </div>

                    {/* Chat Messages */}
                    <div className="flex-1 p-4 space-y-3.5 overflow-y-auto text-[11px]">
                      {/* Incoming msg */}
                      <div className="flex items-start gap-2.5 max-w-[80%]">
                        <div className="h-6 w-6 rounded-full bg-sky-600 text-white text-[8px] font-bold flex items-center justify-center shrink-0">
                          JD
                        </div>
                        <div className="bg-zinc-100 text-zinc-800 p-2.5 rounded-xl rounded-tl-none font-medium leading-relaxed">
                          Hey there! I saw we matched for Next.js. Ready to build the SaaS?
                        </div>
                      </div>

                      {/* Outgoing msg */}
                      <div className="flex items-start gap-2.5 max-w-[80%] ml-auto justify-end">
                        <div className="bg-sky-600 text-white p-2.5 rounded-xl rounded-tr-none font-medium leading-relaxed">
                          Awesome, yeah! Let's schedule a study session tonight.
                        </div>
                        <div className="h-6 w-6 rounded-full bg-zinc-700 text-white text-[8px] font-bold flex items-center justify-center shrink-0">
                          ME
                        </div>
                      </div>

                      {/* Incoming msg */}
                      <div className="flex items-start gap-2.5 max-w-[80%]">
                        <div className="h-6 w-6 rounded-full bg-sky-600 text-white text-[8px] font-bold flex items-center justify-center shrink-0">
                          JD
                        </div>
                        <div className="bg-zinc-100 text-zinc-800 p-2.5 rounded-xl rounded-tl-none font-medium leading-relaxed">
                          Perfect. We need to plan our database schema first. Let's initialize a GitHub repo.
                        </div>
                      </div>
                    </div>

                    {/* Chat Footer Input */}
                    <div className="p-2.5 border-t border-zinc-100 flex items-center gap-2">
                      <input 
                        type="text" 
                        placeholder="Write a message..."
                        disabled 
                        className="flex-1 bg-zinc-50 border border-zinc-200 rounded-lg px-3 py-2 text-[10px] text-zinc-400 outline-none"
                      />
                      <button className="h-8 w-8 rounded-lg bg-zinc-900 text-white flex items-center justify-center shrink-0">
                        <Send className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                )}

                {/* 3. SUMMARIZE TAB CONTENT */}
                {activeTab === "summarize" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto w-full animate-fade-in">
                    
                    {/* Left: Chat Recap */}
                    <div className="bg-white rounded-2xl border border-zinc-200/70 p-4 shadow-sm space-y-3">
                      <div className="flex items-center gap-1.5">
                        <div className="h-5 w-5 rounded bg-sky-50 text-sky-600 flex items-center justify-center">
                          <BookOpen className="h-3 w-3" />
                        </div>
                        <span className="text-[10px] font-bold text-zinc-800">Session AI Recap</span>
                      </div>

                      <div className="text-[10px] leading-relaxed text-zinc-500 space-y-2">
                        <p>
                          <strong>Topic:</strong> SaaS DB Planning & GitHub Repo setup.
                        </p>
                        <p className="bg-zinc-50 p-2.5 rounded-lg border border-zinc-100 italic">
                          "You and Jane Doe completed coordination. Discussed repository layout, decided to initialize a public repo, and schedule database model definitions."
                        </p>
                      </div>
                    </div>

                    {/* Right: Actionable checkmarks */}
                    <div className="bg-zinc-950 rounded-2xl p-4 text-white space-y-3 shadow-md relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-sky-900/20 rounded-full blur-xl pointer-events-none" />
                      
                      <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
                        <div className="flex items-center gap-1.5">
                          <Sparkles className="h-3.5 w-3.5 text-sky-400" />
                          <span className="text-[9px] font-bold uppercase tracking-wider text-zinc-300">Actionable Next Steps</span>
                        </div>
                        <span className="text-[8px] bg-zinc-800 text-zinc-300 px-1.5 py-0.5 rounded font-mono">
                          Copilot v1
                        </span>
                      </div>

                      <div className="space-y-2.5 pt-1">
                        <div className="flex items-center gap-2 text-[10px]">
                          <div className="h-4.5 w-4.5 rounded bg-sky-600 flex items-center justify-center text-white text-[8px]">
                            <Check className="h-3 w-3" />
                          </div>
                          <span className="text-zinc-300 font-medium line-through">Initialize git repository</span>
                        </div>

                        <div className="flex items-center gap-2 text-[10px]">
                          <div className="h-4.5 w-4.5 rounded border border-zinc-700 flex items-center justify-center text-transparent">
                            <Check className="h-3 w-3" />
                          </div>
                          <span className="text-zinc-200 font-medium">Select Database Provider (Supabase/Prisma)</span>
                        </div>

                        <div className="flex items-center gap-2 text-[10px]">
                          <div className="h-4.5 w-4.5 rounded border border-zinc-700 flex items-center justify-center text-transparent">
                            <Check className="h-3 w-3" />
                          </div>
                          <span className="text-zinc-200 font-medium">Configure authentication layout (Clerk)</span>
                        </div>
                      </div>
                    </div>

                  </div>
                )}

              </div>

            </main>

          </div>

        </div>

      </div>
    </section>
  );
}
