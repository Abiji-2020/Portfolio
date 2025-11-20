import { useEffect, useState } from "react";
import {
  Download,
  ExternalLink,
  GitFork,
  Star,
  Code2,
  Database,
  Zap,
  Palette,
  Server,
  Cloud,
  Lock,
  Eye,
  EyeOff,
  GitPullRequest,
} from "lucide-react";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ScrollLine } from "./ScrollLine";
import { ProjectModal } from "./ProjectModal";

const sections = [
  "about",
  "experience",
  "education",
  "skills",
  "projects",
  "opensource",
];

// Skill icons mapping
const skillIcons: Record<string, any> = {
  React: Code2,
  TypeScript: Code2,
  "Node.js": Server,
  Python: Code2,
  PostgreSQL: Database,
  Docker: Cloud,
  AWS: Cloud,
  "Next.js": Zap,
  "Tailwind CSS": Palette,
  GraphQL: Database,
};

export function HomePage() {
  // const [activeSection, setActiveSection] = useState("about");
  const [showPRs, setShowPRs] = useState(true);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  // Project data with full details
  const projects = [
    {
      name: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with payment integration",
      fullDescription:
        "A comprehensive e-commerce solution built with modern web technologies. Features include user authentication, product catalog, shopping cart, secure payment processing via Stripe, order management, and admin dashboard. Implemented real-time inventory tracking and automated email notifications for order updates.",
      image:
        "https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBzaG9wcGluZyUyMG9ubGluZXxlbnwxfHx8fDE3NjIzNTgwODd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example/ecommerce",
      date: "October 2024",
      team: "Solo Project",
      highlights: [
        "Implemented secure payment processing with Stripe integration",
        "Built real-time inventory management system with WebSocket updates",
        "Designed responsive UI supporting both mobile and desktop devices",
        "Achieved 95+ Lighthouse score for performance optimization",
      ],
      stats: {
        stars: "150",
        users: "1.2k+",
      },
    },
    {
      name: "Task Management App",
      description: "Collaborative task management with real-time updates",
      fullDescription:
        "A powerful task management application designed for teams. Built with Next.js and PostgreSQL, it features real-time collaboration using WebSockets, drag-and-drop task organization, customizable project boards, team member assignments, and activity tracking. The app includes advanced filtering and search capabilities to help teams stay organized.",
      image:
        "https://images.unsplash.com/photo-1699570044128-b61ef113b72e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXNrJTIwbWFuYWdlbWVudCUyMHByb2R1Y3Rpdml0eXxlbnwxfHx8fDE3NjIzNTgwODd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Next.js", "PostgreSQL", "WebSocket", "Prisma", "TypeScript"],
      liveUrl: "https://example.com/tasks",
      githubUrl: "https://github.com/example/task-app",
      date: "August 2024",
      team: "3 Developers",
      highlights: [
        "Real-time collaboration with WebSocket connections for instant updates",
        "Drag-and-drop interface using react-beautiful-dnd library",
        "Advanced user permissions and role-based access control",
        "Integration with calendar apps for deadline synchronization",
      ],
      stats: {
        stars: "220",
        users: "850+",
      },
    },
    {
      name: "AI Content Generator",
      description: "AI-powered content generation for marketing",
      fullDescription:
        "An intelligent content generation platform powered by OpenAI GPT models. The tool helps marketers and content creators generate high-quality blog posts, social media content, and marketing copy. Features include customizable tone and style, SEO optimization suggestions, multi-language support, and content templates for various use cases.",
      image:
        "https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjIzNDI0NzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Python", "FastAPI", "OpenAI", "React", "Docker"],
      liveUrl: "https://example.com/ai",
      githubUrl: "https://github.com/example/ai-content",
      date: "June 2024",
      team: "Solo Project",
      highlights: [
        "Integrated OpenAI GPT-4 API for high-quality content generation",
        "Built custom prompt engineering system for consistent outputs",
        "Implemented user feedback loop to improve generation quality",
        "Created template library with 50+ pre-built content formats",
      ],
      stats: {
        users: "2.5k+",
      },
    },
    {
      name: "Analytics Dashboard",
      description: "Real-time analytics with interactive visualizations",
      fullDescription:
        "A comprehensive analytics dashboard for tracking business metrics and KPIs. Built with React and D3.js, it provides real-time data visualization, customizable widgets, export capabilities, and interactive charts. The backend uses Express and integrates with multiple data sources including Google Analytics, databases, and third-party APIs.",
      image:
        "https://images.unsplash.com/photo-1748609160056-7b95f30041f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmFseXRpY3MlMjBkYXNoYm9hcmQlMjBkYXRhfGVufDF8fHx8MTc2MjM0MTYzNnww&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["React", "D3.js", "Express", "PostgreSQL", "Redis"],
      liveUrl: "https://example.com/analytics",
      githubUrl: "https://github.com/example/analytics",
      date: "September 2024",
      team: "2 Developers",
      highlights: [
        "Built custom data visualization library with D3.js",
        "Implemented Redis caching for sub-second query responses",
        "Created drag-and-drop dashboard customization interface",
        "Supports exporting reports in PDF, Excel, and CSV formats",
      ],
      stats: {
        stars: "180",
      },
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            // setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate progress for timeline
 ` const getScrollProgress = () => {
    const element = document.getElementById("about");
    if (!element) return 0;

    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    return Math.min((scrollTop / docHeight) * 100, 100);
  };
  `

 // const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // setScrollProgress(getScrollProgress());
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      <ScrollLine />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-32 space-y-24">
        {/* Hero Section */}
        <motion.section
          id="about"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="min-h-[60vh] flex flex-col justify-center"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-12">
            <div className="flex-1 space-y-4">
              <h1 className="text-foreground">Hi, I'm Your Name</h1>
              <p className="text-muted-foreground">
                A developer building innovative solutions with modern
                technologies.
              </p>
            </div>
            <Avatar className="w-24 h-24 neuro-md">
              <AvatarFallback className="bg-[#e0e5ec] dark:bg-[#2d3748] text-foreground">
                YN
              </AvatarFallback>
            </Avatar>
          </div>

          <div className="space-y-6 mb-8 p-8 rounded-2xl neuro-md bg-[#e0e5ec] dark:bg-[#2d3748]">
            <h2>About</h2>
            <p className="text-muted-foreground">
              I am a passionate developer with expertise in building scalable
              and robust systems. I specialize in full-stack development and
              have a keen interest in creating elegant user experiences.
              Additionally, I enjoy writing technical content and sharing
              knowledge with the developer community.
            </p>
            <Button className="gap-2 neuro-sm hover:neuro-pressed transition-all duration-200 bg-[#e0e5ec] dark:bg-[#2d3748] text-foreground">
              <Download className="w-4 h-4" />
              Download Resume
            </Button>
          </div>
        </motion.section>

        {/* Work Experience */}
        <section id="experience" className="space-y-8">
          <h2>Work Experience</h2>
          <div className="space-y-6">
            {[
              {
                company: "Tech Company",
                role: "Senior Developer",
                period: "January 2024 - Present",
                logo: "🚀",
              },
              {
                company: "Startup Inc",
                role: "Full Stack Developer",
                period: "June 2022 - December 2023",
                logo: "💡",
              },
            ].map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4 p-6 rounded-2xl neuro-md bg-[#e0e5ec] dark:bg-[#2d3748] hover:neuro-pressed transition-all duration-300 cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl neuro-inset bg-[#e0e5ec] dark:bg-[#2d3748] flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">{job.logo}</span>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <h3>{job.company}</h3>
                    <span className="text-sm text-muted-foreground">
                      {job.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{job.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section id="education" className="space-y-8">
          <h2>Education</h2>
          <div className="space-y-6">
            {[
              {
                school: "University Name",
                degree: "Bachelor of Technology in Computer Science",
                period: "2020 - 2024",
                logo: "🎓",
              },
              {
                school: "High School",
                degree: "Senior Secondary Education",
                period: "2018 - 2020",
                logo: "📚",
              },
            ].map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4 p-6 rounded-2xl neuro-md bg-[#e0e5ec] dark:bg-[#2d3748] hover:neuro-pressed transition-all duration-300 cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl neuro-inset bg-[#e0e5ec] dark:bg-[#2d3748] flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">{edu.logo}</span>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <h3>{edu.school}</h3>
                    <span className="text-sm text-muted-foreground">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{edu.degree}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="space-y-8">
          <h2>Skills</h2>
          <div className="flex flex-wrap gap-3">
            {[
              "React",
              "TypeScript",
              "Node.js",
              "Python",
              "PostgreSQL",
              "Docker",
              "AWS",
              "Next.js",
              "Tailwind CSS",
              "GraphQL",
            ].map((skill) => {
              const Icon = skillIcons[skill] || Code2;
              return (
                <motion.div
                  key={skill}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-5 py-3 rounded-xl neuro-sm hover:neuro-pressed transition-all duration-200 cursor-pointer bg-[#e0e5ec] dark:bg-[#2d3748] flex items-center gap-2"
                >
                  <Icon className="w-4 h-4 text-muted-foreground" />
                  <span className="text-foreground">{skill}</span>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="space-y-8">
          <div>
            <h2>Projects</h2>
            <p className="text-muted-foreground mt-2">
              I like to build projects. Here are just some of my favorites.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
                onClick={() => setSelectedProject(project)}
                className="group relative overflow-hidden rounded-2xl neuro-md bg-[#e0e5ec] dark:bg-[#2d3748] hover:neuro-pressed transition-all duration-300 cursor-pointer"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden rounded-t-2xl">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="group-hover:text-primary transition-colors">
                      {project.name}
                    </h3>
                    <ExternalLink className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-lg neuro-inset bg-[#e0e5ec] dark:bg-[#2d3748] text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <ProjectModal
          project={selectedProject}
          open={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />

        {/* Open Source Contributions */}
        <section id="opensource" className="space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h2>Open Source</h2>
              <p className="text-muted-foreground mt-2">
                Contributing to the open source community and building tools for
                developers.
              </p>
            </div>
          </div>

          {/* GitHub PRs Banner */}
          <div className="relative overflow-hidden rounded-2xl neuro-lg p-8 bg-[#e0e5ec] dark:bg-[#2d3748]">
            <div className="absolute top-4 right-4">
              <Button
                size="sm"
                onClick={() => setShowPRs(!showPRs)}
                className="gap-2 neuro-sm hover:neuro-pressed transition-all duration-200 bg-[#e0e5ec] dark:bg-[#2d3748] text-foreground"
              >
                {showPRs ? (
                  <Eye className="w-4 h-4" />
                ) : (
                  <EyeOff className="w-4 h-4" />
                )}
                {showPRs ? "Hide PRs" : "Show PRs"}
              </Button>
            </div>

            <div className="mb-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg neuro-inset bg-[#e0e5ec] dark:bg-[#2d3748] flex items-center justify-center">
                  <GitPullRequest className="w-5 h-5 text-foreground" />
                </div>
                <h3 className="text-foreground">Active Pull Requests</h3>
              </div>
              <p className="text-sm text-muted-foreground ml-13">
                Currently working on these open source contributions
              </p>
            </div>

            {showPRs ? (
              <div className="grid md:grid-cols-2 gap-4">
                {/* PR 1 */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="group relative overflow-hidden rounded-lg neuro-sm bg-[#e0e5ec] dark:bg-[#2d3748] p-5 hover:neuro-pressed transition-all duration-200 cursor-pointer"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-8 h-8 rounded-md neuro-inset bg-[#e0e5ec] dark:bg-[#2d3748] flex items-center justify-center flex-shrink-0">
                      <Code2 className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 mb-2">
                        <span className="text-xs text-green-600 dark:text-green-400">
                          Open
                        </span>
                        <span className="text-xs text-muted-foreground">
                          #1234
                        </span>
                      </div>
                      <h4 className="text-sm truncate group-hover:text-primary transition-colors">
                        Add TypeScript support for components
                      </h4>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                    Implementing TypeScript definitions and type safety across
                    the component library
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>react-awesome-lib</span>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                        <span>+145</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-red-500" />
                        <span>-32</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* PR 2 */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="group relative overflow-hidden rounded-lg neuro-sm bg-[#e0e5ec] dark:bg-[#2d3748] p-5 hover:neuro-pressed transition-all duration-200 cursor-pointer"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-8 h-8 rounded-md neuro-inset bg-[#e0e5ec] dark:bg-[#2d3748] flex items-center justify-center flex-shrink-0">
                      <Zap className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 mb-2">
                        <span className="text-xs text-green-600 dark:text-green-400">
                          Open
                        </span>
                        <span className="text-xs text-muted-foreground">
                          #5678
                        </span>
                      </div>
                      <h4 className="text-sm truncate group-hover:text-primary transition-colors">
                        Performance optimization for rendering
                      </h4>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                    Optimizing component re-renders and improving overall
                    performance by 40%
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>nextjs-toolkit</span>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                        <span>+89</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-red-500" />
                        <span>-56</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center justify-center py-12 px-6 text-center"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-2xl neuro-inset bg-[#e0e5ec] dark:bg-[#2d3748] flex items-center justify-center">
                    <Lock className="w-10 h-10 text-muted-foreground" />
                  </div>
                  <motion.div
                    className="absolute -top-1 -right-1 w-6 h-6 rounded-full neuro-sm bg-[#e0e5ec] dark:bg-[#2d3748] flex items-center justify-center"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Code2 className="w-3 h-3 text-primary" />
                  </motion.div>
                </div>
                <h4 className="text-foreground mb-2">Stealth Mode</h4>
                <p className="text-sm text-muted-foreground max-w-md">
                  Currently working on exciting contributions. Check back soon
                  to see what I'm building for the open source community!
                </p>
                <div className="flex items-center gap-2 mt-6">
                  <motion.div
                    className="w-2 h-2 rounded-full neuro-inset bg-[#e0e5ec] dark:bg-[#2d3748]"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <motion.div
                    className="w-2 h-2 rounded-full neuro-inset bg-[#e0e5ec] dark:bg-[#2d3748]"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                  />
                  <motion.div
                    className="w-2 h-2 rounded-full neuro-inset bg-[#e0e5ec] dark:bg-[#2d3748]"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
                  />
                </div>
              </motion.div>
            )}
          </div>

          {/* Open Source Projects */}
          <div className="space-y-4">
            {[
              {
                name: "awesome-react-components",
                description:
                  "A curated list of React components and libraries. Maintained and contributed documentation improvements.",
                stats: { stars: "2.5k", forks: "450" },
              },
              {
                name: "typescript-utils",
                description:
                  "Collection of TypeScript utility types and helper functions. Added 15+ new utility types.",
                stats: { stars: "1.2k", forks: "180" },
              },
              {
                name: "nextjs-template",
                description:
                  "Production-ready Next.js template with authentication and database setup. Core contributor.",
                stats: { stars: "890", forks: "320" },
              },
              {
                name: "devtools-extension",
                description:
                  "Browser extension for developers with code snippets and productivity tools.",
                stats: { stars: "650", forks: "95" },
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-xl neuro-md bg-[#e0e5ec] dark:bg-[#2d3748] hover:neuro-pressed transition-all duration-300 cursor-pointer"
              >
                <div className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg neuro-inset bg-[#e0e5ec] dark:bg-[#2d3748] flex items-center justify-center flex-shrink-0">
                    <Code2 className="w-6 h-6 text-muted-foreground" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="group-hover:text-primary transition-colors">
                        {project.name}
                      </h3>
                      <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    </div>
                    <p className="text-xs text-muted-foreground mb-3">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-4 text-xs">
                      <div className="flex items-center gap-1.5 text-muted-foreground">
                        <Star className="w-3.5 h-3.5" />
                        <span>{project.stats.stars}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-muted-foreground">
                        <GitFork className="w-3.5 h-3.5" />
                        <span>{project.stats.forks}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
