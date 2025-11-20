import { Home, FileText, Github, Linkedin, Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "motion/react";

interface BottomNavProps {
  currentPage: string;
  onNavigate: (page: "home" | "blog") => void;
  isDark: boolean;
  onToggleTheme: () => void;
}

// X (Twitter) Icon
const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export function BottomNav({
  currentPage,
  onNavigate,
  isDark,
  onToggleTheme,
}: BottomNavProps) {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="relative">
        {/* Neumorphic container */}
        <div className="relative bg-[#e0e5ec] dark:bg-[#2d3748] rounded-full px-6 py-3 neuro-lg">
          <div className="relative flex items-center gap-2">
            {/* Navigation Icons */}
            <div className="flex items-center gap-1 pr-2 border-r border-gray-400/20 dark:border-gray-600/20">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onNavigate("home")}
                className={`rounded-full relative group transition-all duration-200 ${
                  currentPage === "home"
                    ? "neuro-inset bg-[#e0e5ec] dark:bg-[#2d3748] text-primary"
                    : "neuro-sm hover:neuro-pressed"
                }`}
              >
                <Home className="w-5 h-5" />
                {/* Tooltip */}
                <span className="absolute bottom-full mb-2 px-2 py-1 bg-[#e0e5ec] dark:bg-[#2d3748] text-foreground text-xs rounded-lg neuro-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  Home
                </span>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => onNavigate("blog")}
                className={`rounded-full relative group transition-all duration-200 ${
                  currentPage === "blog" || currentPage === "blog-detail"
                    ? "neuro-inset bg-[#e0e5ec] dark:bg-[#2d3748] text-primary"
                    : "neuro-sm hover:neuro-pressed"
                }`}
              >
                <FileText className="w-5 h-5" />
                {/* Tooltip */}
                <span className="absolute bottom-full mb-2 px-2 py-1 bg-[#e0e5ec] dark:bg-[#2d3748] text-foreground text-xs rounded-lg neuro-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  Blog
                </span>
              </Button>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-1 pr-2 border-r border-gray-400/20 dark:border-gray-600/20">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full relative group neuro-sm hover:neuro-pressed transition-all duration-200"
                asChild
              >
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-5 h-5" />
                  <span className="absolute bottom-full mb-2 px-2 py-1 bg-[#e0e5ec] dark:bg-[#2d3748] text-foreground text-xs rounded-lg neuro-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    GitHub
                  </span>
                </a>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="rounded-full relative group neuro-sm hover:neuro-pressed transition-all duration-200"
                asChild
              >
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="absolute bottom-full mb-2 px-2 py-1 bg-[#e0e5ec] dark:bg-[#2d3748] text-foreground text-xs rounded-lg neuro-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    LinkedIn
                  </span>
                </a>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="rounded-full relative group neuro-sm hover:neuro-pressed transition-all duration-200"
                asChild
              >
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <XIcon className="w-5 h-5" />
                  <span className="absolute bottom-full mb-2 px-2 py-1 bg-[#e0e5ec] dark:bg-[#2d3748] text-foreground text-xs rounded-lg neuro-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    X (Twitter)
                  </span>
                </a>
              </Button>
            </div>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={onToggleTheme}
              className="rounded-full relative group neuro-sm hover:neuro-pressed transition-all duration-200"
            >
              {isDark ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
              <span className="absolute bottom-full mb-2 px-2 py-1 bg-[#e0e5ec] dark:bg-[#2d3748] text-foreground text-xs rounded-lg neuro-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {isDark ? "Light Mode" : "Dark Mode"}
              </span>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
