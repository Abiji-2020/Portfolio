import { motion } from "motion/react";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import { Button } from "./ui/button";
import { ScrollLine } from "./ScrollLine";

interface BlogDetailProps {
  blogId: number;
  onBack: () => void;
}

const blogContent: Record<number, any> = {
  1: {
    title: "Getting Started with React Server Components",
    date: "November 2, 2025",
    readTime: "5 min read",
    tags: ["React", "Web Development", "Performance"],
    gradient: "from-teal-500 to-emerald-500",
    content: `
      <p>React Server Components represent a paradigm shift in how we build React applications. They allow us to render components on the server, reducing the amount of JavaScript sent to the client and improving performance.</p>
      
      <h2>What are Server Components?</h2>
      <p>Server Components are a new type of component that runs exclusively on the server. Unlike traditional React components that run in the browser, Server Components never hydrate on the client, which means they don't add to your JavaScript bundle size.</p>
      
      <h2>Key Benefits</h2>
      <ul>
        <li><strong>Reduced Bundle Size:</strong> Server Components don't ship to the client, significantly reducing your JavaScript payload.</li>
        <li><strong>Direct Backend Access:</strong> You can directly access databases, file systems, and other backend resources without creating API endpoints.</li>
        <li><strong>Automatic Code Splitting:</strong> React automatically splits your code at Server Component boundaries.</li>
        <li><strong>Improved Performance:</strong> By moving rendering to the server, you can improve initial page load times.</li>
      </ul>
      
      <h2>Getting Started</h2>
      <p>To start using Server Components, you'll need to use a framework that supports them, such as Next.js 13+ with the App Router. Here's a simple example:</p>
      
      <pre><code>// app/page.tsx (Server Component by default)
async function getData() {
  const res = await fetch('https://api.example.com/data');
  return res.json();
}

export default async function Page() {
  const data = await getData();
  return <div>{data.title}</div>;
}</code></pre>
      
      <h2>Best Practices</h2>
      <p>When working with Server Components, keep these best practices in mind:</p>
      <ul>
        <li>Use Server Components for data fetching and rendering static content</li>
        <li>Use Client Components for interactive elements and browser APIs</li>
        <li>Keep the boundary between Server and Client Components clear</li>
        <li>Leverage streaming for improved perceived performance</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>React Server Components are a powerful tool for building faster, more efficient web applications. By understanding when and how to use them, you can create better user experiences while reducing complexity in your codebase.</p>
    `,
  },
  2: {
    title: "Building Scalable APIs with Node.js",
    date: "October 28, 2025",
    readTime: "8 min read",
    tags: ["Node.js", "Backend", "API"],
    gradient: "from-teal-400 to-cyan-500",
    content: `
      <p>Building scalable APIs is crucial for modern web applications. In this guide, we'll explore best practices for creating robust, performant APIs using Node.js and Express.</p>
      
      <h2>Architecture Principles</h2>
      <p>A well-architected API should follow these principles:</p>
      <ul>
        <li>Separation of concerns</li>
        <li>Modularity and reusability</li>
        <li>Clear error handling</li>
        <li>Consistent response formats</li>
      </ul>
      
      <h2>Setting Up Your Project</h2>
      <p>Start with a solid foundation. Use TypeScript for type safety and better developer experience:</p>
      
      <pre><code>npm init -y
npm install express typescript @types/express
npm install -D nodemon ts-node</code></pre>
      
      <h2>Implementing Middleware</h2>
      <p>Middleware is essential for handling cross-cutting concerns like authentication, logging, and error handling.</p>
      
      <h2>Database Design</h2>
      <p>Choose the right database for your use case. Consider factors like data structure, scalability requirements, and consistency needs.</p>
      
      <h2>Caching Strategies</h2>
      <p>Implement caching to reduce database load and improve response times. Redis is a popular choice for caching API responses.</p>
      
      <h2>Rate Limiting</h2>
      <p>Protect your API from abuse by implementing rate limiting. This prevents individual users from making too many requests.</p>
      
      <h2>Conclusion</h2>
      <p>Building scalable APIs requires careful planning and implementation. Follow these best practices to create APIs that can grow with your application.</p>
    `,
  },
  3: {
    title: "Mastering TypeScript Advanced Types",
    date: "October 15, 2025",
    readTime: "10 min read",
    tags: ["TypeScript", "Programming", "Best Practices"],
    gradient: "from-purple-500 to-pink-500",
    content: `
      <p>TypeScript's type system is one of its most powerful features. In this article, we'll explore advanced type patterns that will help you write more type-safe code.</p>
      
      <h2>Conditional Types</h2>
      <p>Conditional types allow you to create types that depend on conditions. They're incredibly powerful for creating flexible, reusable type utilities.</p>
      
      <pre><code>type IsString<T> = T extends string ? true : false;</code></pre>
      
      <h2>Mapped Types</h2>
      <p>Mapped types let you create new types based on old ones by transforming properties.</p>
      
      <h2>Template Literal Types</h2>
      <p>Template literal types allow you to manipulate string literal types, opening up new possibilities for type-safe string manipulation.</p>
      
      <h2>Utility Types</h2>
      <p>TypeScript provides several built-in utility types like Partial, Required, Pick, and Omit. Understanding how they work will make you more productive.</p>
      
      <h2>Type Guards</h2>
      <p>Type guards help TypeScript narrow down types in conditional blocks, making your code more type-safe.</p>
      
      <h2>Conclusion</h2>
      <p>Mastering these advanced TypeScript patterns will help you write more maintainable and type-safe code.</p>
    `,
  },
  4: {
    title: "Modern CSS Techniques for 2025",
    date: "October 5, 2025",
    readTime: "6 min read",
    tags: ["CSS", "Frontend", "Design"],
    gradient: "from-orange-500 to-red-500",
    content: `
      <p>CSS has evolved significantly in recent years. Let's explore the latest features that are changing how we style web applications.</p>
      
      <h2>Container Queries</h2>
      <p>Container queries allow you to style elements based on their container's size, not just the viewport. This is a game-changer for component-based design.</p>
      
      <h2>Cascade Layers</h2>
      <p>Cascade layers give you more control over CSS specificity, making it easier to manage large stylesheets.</p>
      
      <h2>New Color Functions</h2>
      <p>CSS now supports new color spaces and functions, giving you more control over color manipulation.</p>
      
      <h2>Subgrid</h2>
      <p>Subgrid allows nested grid items to participate in the parent grid, solving many layout challenges.</p>
      
      <h2>Conclusion</h2>
      <p>These modern CSS features enable us to build more responsive, maintainable designs with less code.</p>
    `,
  },
  5: {
    title: "Understanding Database Indexing",
    date: "September 22, 2025",
    readTime: "7 min read",
    tags: ["Database", "Performance", "SQL"],
    gradient: "from-teal-500 to-cyan-500",
    content: `
      <p>Database indexes are crucial for query performance. Let's explore how they work and when to use them.</p>
      
      <h2>What is an Index?</h2>
      <p>An index is a data structure that improves the speed of data retrieval operations on a database table.</p>
      
      <h2>Types of Indexes</h2>
      <ul>
        <li>B-Tree indexes (most common)</li>
        <li>Hash indexes</li>
        <li>GiST and GIN indexes (PostgreSQL)</li>
        <li>Full-text indexes</li>
      </ul>
      
      <h2>When to Use Indexes</h2>
      <p>Create indexes on columns that are frequently used in WHERE clauses, JOIN conditions, or ORDER BY statements.</p>
      
      <h2>Index Trade-offs</h2>
      <p>While indexes speed up reads, they slow down writes. Balance is key.</p>
      
      <h2>Conclusion</h2>
      <p>Understanding indexes is essential for building performant database-driven applications.</p>
    `,
  },
  6: {
    title: "The Future of Web Development",
    date: "September 10, 2025",
    readTime: "5 min read",
    tags: ["Web Development", "Trends", "Technology"],
    gradient: "from-pink-500 to-rose-500",
    content: `
      <p>Web development is constantly evolving. Let's look at the trends and technologies shaping the future of the web.</p>
      
      <h2>AI-Powered Development</h2>
      <p>AI tools are becoming integral to the development process, from code generation to testing and optimization.</p>
      
      <h2>WebAssembly</h2>
      <p>WebAssembly enables near-native performance in the browser, opening up new possibilities for web applications.</p>
      
      <h2>Edge Computing</h2>
      <p>Edge computing brings computation closer to users, reducing latency and improving performance.</p>
      
      <h2>Progressive Web Apps</h2>
      <p>PWAs continue to blur the line between web and native applications.</p>
      
      <h2>Conclusion</h2>
      <p>The future of web development is exciting, with new technologies enabling experiences we could only dream of a few years ago.</p>
    `,
  },
};

export function BlogDetail({ blogId, onBack }: BlogDetailProps) {
  const blog = blogContent[blogId];

  if (!blog) {
    return (
      <div className="relative">
        <ScrollLine />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-32">
          <p>Blog post not found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <ScrollLine />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Back Button */}
          <Button
            onClick={onBack}
            className="mb-8 gap-2 neuro-sm hover:neuro-pressed transition-all duration-200 bg-[#e0e5ec] dark:bg-[#2d3748] text-foreground"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Button>

          {/* Neumorphic Header */}
          <div className="h-64 rounded-2xl neuro-lg mb-8 relative overflow-hidden bg-[#e0e5ec] dark:bg-[#2d3748] flex items-center justify-center">
            <motion.div
              className="absolute inset-0 opacity-10"
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)",
                backgroundSize: "50px 50px",
              }}
            />
          </div>

          {/* Title and Meta */}
          <div className="mb-8 space-y-4 p-8 rounded-2xl neuro-md bg-[#e0e5ec] dark:bg-[#2d3748]">
            <h1 className="text-foreground">{blog.title}</h1>

            <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl neuro-inset bg-[#e0e5ec] dark:bg-[#2d3748]">
                <Calendar className="w-4 h-4" />
                <span>{blog.date}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl neuro-inset bg-[#e0e5ec] dark:bg-[#2d3748]">
                <Clock className="w-4 h-4" />
                <span>{blog.readTime}</span>
              </div>
              <Button
                size="sm"
                className="gap-2 ml-auto neuro-sm hover:neuro-pressed transition-all duration-200 bg-[#e0e5ec] dark:bg-[#2d3748] text-foreground"
              >
                <Share2 className="w-4 h-4" />
                Share
              </Button>
            </div>

            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-xl neuro-inset bg-[#e0e5ec] dark:bg-[#2d3748] text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="p-8 rounded-2xl neuro-md bg-[#e0e5ec] dark:bg-[#2d3748]">
            <div
              className="prose prose-gray dark:prose-invert max-w-none
                prose-headings:scroll-mt-20 prose-headings:text-foreground
                prose-h2:mt-12 prose-h2:mb-4
                prose-p:text-muted-foreground
                prose-ul:text-muted-foreground
                prose-li:marker:text-muted-foreground
                prose-strong:text-foreground
                prose-code:text-primary
                prose-pre:neuro-inset prose-pre:bg-[#e0e5ec] dark:prose-pre:bg-[#2d3748]
                prose-pre:p-4 prose-pre:rounded-xl
              "
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </div>

          {/* Footer */}
          <div className="mt-16">
            <Button
              onClick={onBack}
              className="gap-2 neuro-sm hover:neuro-pressed transition-all duration-200 bg-[#e0e5ec] dark:bg-[#2d3748] text-foreground"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to all posts
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
