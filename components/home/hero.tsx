"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Github, Copy, Eye, Code2, Zap, Sparkles, Palette } from "lucide-react";
import { APP_CONFIG } from "@/components/lib/constants";

interface HeroProps {
  activePattern?: string | null;
  setActivePattern?: (pattern: string | null) => void;
  theme: "light" | "dark";
}

const handleBrowsePatternsClick = () => {
  document.getElementById("pattern-showcase")?.scrollIntoView({
    behavior: "smooth",
  });
};

export default function Hero({ theme }: HeroProps) {
  const isPatternDark = theme === "dark";

  return (
    <section className="container mx-auto py-8 sm:py-12 md:py-16 lg:py-18 text-center relative overflow-hidden px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="mx-auto max-w-6xl relative z-10">
        {/* Badge */}
        <div className="mb-6 sm:mb-8 md:mb-10 flex justify-center">
          <a
            href={APP_CONFIG.GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex"
          >
            <Badge
              variant="secondary"
              className={`gap-2 py-2 px-3 sm:px-4 text-xs sm:text-sm rounded-full shadow-lg backdrop-blur-md transition-all duration-300 border ${
                isPatternDark
                  ? "bg-black/40 border-white/20 text-white hover:bg-black/50"
                  : "bg-white/80 border-gray-200/50 text-gray-900 hover:bg-white/90"
              }`}
            >
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </div>
              <span className="font-medium">5+ New Patterns</span>
              <Zap className="h-3 w-3 text-orange-500" />
              <span className="hidden sm:inline-flex items-center">
                Explore Now
              </span>
              <ArrowRight className="h-3 w-3" />
            </Badge>
          </a>
        </div>

        {/* Main heading */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-1 sm:mb-3">
            <span
              className={`font-medium transition-colors duration-300 ${
                isPatternDark ? "text-white" : "text-gray-900 dark:text-gray-50"
              }`}
            >
              Design Stunning
            </span>
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold tracking-tight">
            <span
              className={`bg-gradient-to-r bg-[200%_auto] bg-clip-text leading-tight text-transparent transition-all duration-300 animate-gradient ${
                isPatternDark
                  ? "from-violet-400 via-fuchsia-400 to-purple-400"
                  : "from-violet-600 via-fuchsia-600 to-purple-600 dark:from-violet-400 dark:via-fuchsia-400 dark:to-purple-400"
              }`}
            >
              Background Masterpieces
            </span>
          </h2>
        </div>

        {/* Description */}
        <p
          className={`text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed transition-colors duration-300 px-4 sm:px-0 ${
            isPatternDark ? "text-gray-200" : "text-gray-600 dark:text-gray-200"
          }`}
        >
          Discover a curated collection of professional-grade background patterns, 
          mesmerizing gradients, and modern design elements. 
          <span className="block mt-2">
            <span className={`font-semibold ${isPatternDark ? "text-white" : "text-gray-900 dark:text-white"}`}>
              Copy • Customize • Create
            </span> — All powered by CSS & Tailwind
          </span>
        </p>

        {/* Feature highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10 sm:mb-14 max-w-5xl mx-auto px-4 sm:px-0">
          <div
            className={`flex items-center gap-3 p-3 sm:p-4 rounded-xl shadow-lg backdrop-blur-md transition-all duration-300 border hover:scale-105 cursor-default ${
              isPatternDark
                ? "bg-black/30 border-white/10 hover:bg-black/40"
                : "bg-white/70 border-gray-200/30 hover:bg-white/80"
            }`}
          >
            <div
              className={`p-2 rounded-lg transition-colors duration-300 ${
                isPatternDark ? "bg-violet-500/20" : "bg-violet-100"
              }`}
            >
              <Copy
                className={`h-4 sm:h-5 w-4 sm:w-5 transition-colors duration-300 ${
                  isPatternDark ? "text-violet-300" : "text-violet-600"
                }`}
              />
            </div>
            <div className="text-left">
              <h3
                className={`font-semibold text-sm transition-colors duration-300 ${
                  isPatternDark ? "text-white" : "text-gray-900"
                }`}
              >
                Instant Copy
              </h3>
              <p
                className={`text-xs transition-colors duration-300 ${
                  isPatternDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                One-click code
              </p>
            </div>
          </div>
          <div
            className={`flex items-center gap-3 p-3 sm:p-4 rounded-xl shadow-lg backdrop-blur-md transition-all duration-300 border hover:scale-105 cursor-default ${
              isPatternDark
                ? "bg-black/30 border-white/10 hover:bg-black/40"
                : "bg-white/70 border-gray-200/30 hover:bg-white/80"
            }`}
          >
            <div
              className={`p-2 rounded-lg transition-colors duration-300 ${
                isPatternDark ? "bg-pink-500/20" : "bg-pink-100"
              }`}
            >
              <Eye
                className={`h-4 sm:h-5 w-4 sm:w-5 transition-colors duration-300 ${
                  isPatternDark ? "text-pink-300" : "text-pink-600"
                }`}
              />
            </div>
            <div className="text-left">
              <h3
                className={`font-semibold text-sm transition-colors duration-300 ${
                  isPatternDark ? "text-white" : "text-gray-900"
                }`}
              >
                Live Preview
              </h3>
              <p
                className={`text-xs transition-colors duration-300 ${
                  isPatternDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Real-time demo
              </p>
            </div>
          </div>
          <div
            className={`flex items-center gap-3 p-3 sm:p-4 rounded-xl shadow-lg backdrop-blur-md transition-all duration-300 border hover:scale-105 cursor-default ${
              isPatternDark
                ? "bg-black/30 border-white/10 hover:bg-black/40"
                : "bg-white/70 border-gray-200/30 hover:bg-white/80"
            }`}
          >
            <div
              className={`p-2 rounded-lg transition-colors duration-300 ${
                isPatternDark ? "bg-emerald-500/20" : "bg-emerald-100"
              }`}
            >
              <Palette
                className={`h-4 sm:h-5 w-4 sm:w-5 transition-colors duration-300 ${
                  isPatternDark ? "text-emerald-300" : "text-emerald-600"
                }`}
              />
            </div>
            <div className="text-left">
              <h3
                className={`font-semibold text-sm transition-colors duration-300 ${
                  isPatternDark ? "text-white" : "text-gray-900"
                }`}
              >
                Customizable
              </h3>
              <p
                className={`text-xs transition-colors duration-300 ${
                  isPatternDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Fully adaptable
              </p>
            </div>
          </div>
          <div
            className={`flex items-center gap-3 p-3 sm:p-4 rounded-xl shadow-lg backdrop-blur-md transition-all duration-300 border hover:scale-105 cursor-default ${
              isPatternDark
                ? "bg-black/30 border-white/10 hover:bg-black/40"
                : "bg-white/70 border-gray-200/30 hover:bg-white/80"
            }`}
          >
            <div
              className={`p-2 rounded-lg transition-colors duration-300 ${
                isPatternDark ? "bg-amber-500/20" : "bg-amber-100"
              }`}
            >
              <Sparkles
                className={`h-4 sm:h-5 w-4 sm:w-5 transition-colors duration-300 ${
                  isPatternDark ? "text-amber-300" : "text-amber-600"
                }`}
              />
            </div>
            <div className="text-left">
              <h3
                className={`font-semibold text-sm transition-colors duration-300 ${
                  isPatternDark ? "text-white" : "text-gray-900"
                }`}
              >
                Premium Quality
              </h3>
              <p
                className={`text-xs transition-colors duration-300 ${
                  isPatternDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Pro-grade design
              </p>
            </div>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 sm:px-0">
          <Button
            size="lg"
            className={`cursor-pointer gap-2 px-4 sm:px-8 py-3 text-sm sm:text-base font-semibold shadow-xl transition-all duration-300 flex-1 sm:flex-none hover:shadow-2xl hover:scale-105 ${
              isPatternDark
                ? "bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white hover:from-violet-600 hover:to-fuchsia-600"
                : "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white hover:from-violet-700 hover:to-fuchsia-700 dark:from-violet-500 dark:to-fuchsia-500"
            }`}
            onClick={handleBrowsePatternsClick}
          >
            <Sparkles className="h-4 sm:h-5 w-4 sm:w-5" />
            Explore Patterns
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button
            size="lg"
            className={`cursor-pointer gap-2 px-4 sm:px-8 py-3 text-sm sm:text-base font-medium shadow-lg transition-all duration-300 flex-1 sm:flex-none border-2 hover:scale-105 ${
              isPatternDark
                ? "bg-transparent border-white text-white hover:bg-white hover:text-black"
                : "bg-transparent border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black"
            }`}
            onClick={() => {
              window.open(APP_CONFIG.CONTRIBUTING_URL, "_blank");
            }}
          >
            <Github className="h-4 sm:h-5 w-4 sm:w-5" />
            Contribute
          </Button>
        </div>

        {/* Stats */}
        <div
          className={`flex items-center justify-center gap-6 sm:gap-8 md:gap-12 mt-12 sm:mt-16 md:mt-18 pt-6 sm:pt-8 border-t transition-all duration-300 ${
            isPatternDark
              ? "border-white/20"
              : "border-gray-300 dark:border-gray-700"
          }`}
        >
          <div className="text-center group cursor-default">
            <div
              className={`text-2xl sm:text-3xl font-bold transition-all duration-300 group-hover:scale-110 ${
                isPatternDark ? "text-white" : "text-gray-900 dark:text-white"
              }`}
            >
              100+
            </div>
            <div
              className={`text-xs sm:text-sm transition-colors duration-300 ${
                isPatternDark ? "text-gray-300" : "text-gray-600 dark:text-gray-300"
              }`}
            >
              Unique Patterns
            </div>
          </div>
          <div className="text-center group cursor-default">
            <div
              className={`text-2xl sm:text-3xl font-bold transition-all duration-300 group-hover:scale-110 ${
                isPatternDark ? "text-white" : "text-gray-900 dark:text-white"
              }`}
            >
              100%
            </div>
            <div
              className={`text-xs sm:text-sm transition-colors duration-300 ${
                isPatternDark ? "text-gray-300" : "text-gray-600 dark:text-gray-300"
              }`}
            >
              Open Source
            </div>
          </div>
          <div className="text-center group cursor-default">
            <div
              className={`text-2xl sm:text-3xl font-bold transition-all duration-300 group-hover:scale-110 ${
                isPatternDark ? "text-white" : "text-gray-900 dark:text-white"
              }`}
            >
              ∞
            </div>
            <div
              className={`text-xs sm:text-sm transition-colors duration-300 ${
                isPatternDark ? "text-gray-300" : "text-gray-600 dark:text-gray-300"
              }`}
            >
              Possibilities
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}