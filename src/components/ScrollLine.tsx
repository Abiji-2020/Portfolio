import { useEffect, useState } from "react";
import { motion } from "motion/react";

export function ScrollLine() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const getScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      return Math.min((scrollTop / docHeight) * 100, 100);
    };

    const handleScroll = () => {
      setScrollProgress(getScrollProgress());
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="hidden lg:block fixed left-8 top-24 bottom-24 z-10 pointer-events-none">
      <div className="relative h-full w-1">
        {/* Background line - neumorphic inset */}
        <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full rounded-full neuro-inset bg-[#e0e5ec] dark:bg-[#2d3748]" />

        {/* Animated neumorphic point that follows scroll */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full neuro-sm bg-[#e0e5ec] dark:bg-[#2d3748]"
          style={{
            top: `${scrollProgress}%`,
          }}
          animate={{
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
}
