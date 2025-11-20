import { motion } from "motion/react";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { ScrollLine } from "./ScrollLine";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface BlogPageProps {
  onBlogClick: (id: number) => void;
}

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with React Server Components",
    excerpt:
      "Learn how to leverage React Server Components to build faster, more efficient web applications with better user experiences.",
    date: "November 2, 2025",
    readTime: "5 min read",
    tags: ["React", "Web Development", "Performance"],
    image:
      "https://images.unsplash.com/photo-1551033406-611cf9a28f67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFjdCUyMHNlcnZlciUyMGNvbXBvbmVudHMlMjBjb2RlfGVufDF8fHx8MTc2MjQ0MzU4NXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 2,
    title: "Building Scalable APIs with Node.js",
    excerpt:
      "A comprehensive guide to designing and implementing scalable RESTful APIs using Node.js and Express.",
    date: "October 28, 2025",
    readTime: "8 min read",
    tags: ["Node.js", "Backend", "API"],
    image:
      "https://images.unsplash.com/photo-1650234083180-4b965afac328?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub2RlanMlMjBiYWNrZW5kJTIwZGV2ZWxvcG1lbnR8ZW58MXx8fHwxNzYyNDQzNTg1fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 3,
    title: "Mastering TypeScript Advanced Types",
    excerpt:
      "Dive deep into TypeScript's advanced type system and learn how to write more type-safe and maintainable code.",
    date: "October 15, 2025",
    readTime: "10 min read",
    tags: ["TypeScript", "Programming", "Best Practices"],
    image:
      "https://images.unsplash.com/photo-1672308627194-9a2c28daa17a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0eXBlc2NyaXB0JTIwcHJvZ3JhbW1pbmclMjBjb2RlfGVufDF8fHx8MTc2MjQ0MzU4Nnww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 4,
    title: "Modern CSS Techniques for 2025",
    excerpt:
      "Explore the latest CSS features including container queries, cascade layers, and new color functions.",
    date: "October 5, 2025",
    readTime: "6 min read",
    tags: ["CSS", "Frontend", "Design"],
    image:
      "https://images.unsplash.com/photo-1760548425425-e42e77fa38f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjc3MlMjBkZXNpZ24lMjBtb2Rlcm58ZW58MXx8fHwxNzYyNDQzNTg2fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 5,
    title: "Understanding Database Indexing",
    excerpt:
      "Learn how database indexes work and how to optimize your queries for better performance.",
    date: "September 22, 2025",
    readTime: "7 min read",
    tags: ["Database", "Performance", "SQL"],
    image:
      "https://images.unsplash.com/photo-1744868562210-fffb7fa882d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhYmFzZSUyMHNlcnZlciUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYyNDMzMTA2fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 6,
    title: "The Future of Web Development",
    excerpt:
      "Explore emerging trends and technologies that will shape the future of web development.",
    date: "September 10, 2025",
    readTime: "5 min read",
    tags: ["Web Development", "Trends", "Technology"],
    image:
      "https://images.unsplash.com/photo-1614651462377-4f3fe3e2c262?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmUlMjB0ZWNobm9sb2d5JTIwZGlnaXRhbHxlbnwxfHx8fDE3NjI0NDM1ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function BlogPage({ onBlogClick }: BlogPageProps) {
  return (
    <div className="relative">
      <ScrollLine />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:pl-24 lg:pr-8 py-12 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 space-y-4"
        >
          <h1 className="text-foreground">Blog</h1>
          <p className="text-muted-foreground">
            Thoughts on technology, development, and everything in between.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              onClick={() => onBlogClick(post.id)}
              className="group cursor-pointer"
            >
              <motion.div className="relative overflow-hidden rounded-2xl neuro-md bg-[#e0e5ec] dark:bg-[#2d3748] h-full flex flex-col hover:neuro-pressed transition-all duration-300">
                {/* Background Image */}
                <div className="relative h-48 overflow-hidden rounded-t-2xl">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                  {/* Read time badge */}
                  <div className="absolute top-3 right-3 flex items-center gap-1 px-3 py-1.5 rounded-lg neuro-sm bg-[#e0e5ec] dark:bg-[#2d3748] text-xs text-foreground">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col space-y-3">
                  <h3 className="line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-sm text-muted-foreground line-clamp-2 flex-1">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-lg neuro-inset bg-[#e0e5ec] dark:bg-[#2d3748] text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-3">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>

                    <div className="flex items-center gap-1 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-xs">Read</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
