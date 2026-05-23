"use client";

import Link from "next/link";
import { Brain } from "lucide-react";

export default function FooterSection() {
  const footerLinks = [
    {
      title: "Product",
      links: [
        { label: "Features", href: "#features" },
        { label: "How It Works", href: "#how-it-works" },
        { label: "Testimonials", href: "#testimonials" },
        { label: "Pricing Tiers", href: "#pricing" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", href: "#" },
        { label: "Study Guides", href: "#" },
        { label: "API Reference", href: "#" },
        { label: "Help Center", href: "#" }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Security", href: "#" },
        { label: "Contact Sales", href: "#" }
      ]
    },
    {
      title: "Legal",
      links: [
        { label: "Terms of Service", href: "#" },
        { label: "Privacy Policy", href: "#" },
        { label: "Community Code", href: "#" },
        { label: "Cookie Policy", href: "#" }
      ]
    }
  ];

  return (
    <footer className="relative w-full bg-zinc-950 text-white border-t border-zinc-900 pt-16 pb-12 overflow-hidden">
      {/* Small glowing spot */}
      <div className="absolute bottom-0 right-0 w-[200px] h-[200px] rounded-full bg-sky-500/5 blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          
          {/* Brand Info (md:col-span-4) */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <Brain className="h-6 w-6 text-sky-500" />
              <span className="text-lg font-bold text-white tracking-tight">LikeMinds</span>
            </div>
            
            <p className="text-zinc-500 text-xs leading-relaxed max-w-xs">
              LikeMinds is a production-ready, full-stack AI-powered community learning platform designed to help learners connect and thrive together.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a href="#" className="h-7 w-7 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition" aria-label="Twitter">
                <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" className="h-7 w-7 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition" aria-label="Github">
                <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>
              <a href="#" className="h-7 w-7 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition" aria-label="LinkedIn">
                <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Directory Links (md:col-span-8) */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {footerLinks.map((section, idx) => (
              <div key={idx} className="space-y-4">
                <h4 className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                  {section.title}
                </h4>
                <ul className="space-y-2.5 text-xs">
                  {section.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <Link href={link.href} className="text-zinc-500 hover:text-white transition">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-zinc-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-zinc-500 font-medium">
          <div>
            &copy; {new Date().getFullYear()} LikeMinds Inc. All rights reserved.
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-zinc-300">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-300">Terms of Use</a>
            <a href="#" className="hover:text-zinc-300">Community Safety</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
