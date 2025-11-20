import { useState, useEffect, useRef } from "react";
import { HomePage } from "./components/HomePage";
import { BlogPage } from "./components/BlogPage";
import { BlogDetail } from "./components/BlogDetail";
import { BottomNav } from "./components/BottomNav";

type Page = "home" | "blog" | "blog-detail";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [selectedBlogId, setSelectedBlogId] = useState<number | null>(null);
  const [isDark, setIsDark] = useState(false);

  // Store scroll positions for each page
  const scrollPositions = useRef<Record<string, number>>({
    home: 0,
    blog: 0,
  });

  // Save scroll position before page change
  const saveScrollPosition = (page: string) => {
    scrollPositions.current[page] = window.scrollY;
  };

  // Restore scroll position after page change
  useEffect(() => {
    const pageKey =
      currentPage === "blog-detail"
        ? `blog-detail-${selectedBlogId}`
        : currentPage;

    // For blog detail pages, always start at top
    if (currentPage === "blog-detail") {
      window.scrollTo(0, 0);
    } else {
      // For other pages, restore saved position
      const savedPosition = scrollPositions.current[pageKey] || 0;
      // Use setTimeout to ensure DOM is ready
      setTimeout(() => {
        window.scrollTo(0, savedPosition);
      }, 0);
    }
  }, [currentPage, selectedBlogId]);

  const handleBlogClick = (id: number) => {
    saveScrollPosition("blog");
    setSelectedBlogId(id);
    setCurrentPage("blog-detail");
  };

  const handleBackToBlog = () => {
    setCurrentPage("blog");
    setSelectedBlogId(null);
  };

  const handleNavigate = (page: "home" | "blog") => {
    // Save current page scroll position
    const currentPageKey = currentPage === "blog-detail" ? "blog" : currentPage;
    saveScrollPosition(currentPageKey);

    setCurrentPage(page);
  };

  return (
    <div className={isDark ? "dark" : ""}>
      <div className="min-h-screen bg-[#e0e5ec] dark:bg-[#2d3748] text-foreground transition-colors duration-300">
        {/* Page Content */}
        <main>
          {currentPage === "home" && <HomePage />}
          {currentPage === "blog" && <BlogPage onBlogClick={handleBlogClick} />}
          {currentPage === "blog-detail" && selectedBlogId && (
            <BlogDetail blogId={selectedBlogId} onBack={handleBackToBlog} />
          )}
        </main>

        {/* Bottom Navigation */}
        <BottomNav
          currentPage={currentPage}
          onNavigate={handleNavigate}
          isDark={isDark}
          onToggleTheme={() => setIsDark(!isDark)}
        />
      </div>
    </div>
  );
}
