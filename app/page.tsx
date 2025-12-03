"use client";

import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, ExternalLink, ArrowDown, ChevronLeft, ChevronRight, GraduationCap } from "lucide-react";

// NOTE: These are mock components to make the code self-contained and runnable.
// In a real Next.js project, you would import these from a UI library like shadcn/ui.

/**
 * Mock Button component.
 * @param {object} props - Component props.
 * @param {string} [props.variant="default"] - The button variant.
 * @param {string} [props.size="md"] - The button size.
 * @param {string} [props.className] - Additional CSS classes.
 * @param {React.ReactNode} props.children - The content of the button.
 */
const Button = ({ variant, size, className, ...props }: any) => {
  const baseClasses = "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  const variantClasses: Record<string, string> = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    ghost: "hover:bg-accent hover:text-accent-foreground",
  };

  const sizeClasses: Record<string, string> = {
    lg: "h-12 px-6 text-lg",
    md: "h-10 px-4 py-2",
    sm: "h-9 px-3",
  };

  const variantClass = variantClasses[variant] || "";
  const sizeClass = sizeClasses[size] || "";
  return <button className={`${baseClasses} ${variantClass} ${sizeClass} ${className}`} {...props} />;
};

/**
 * Mock Card component.
 * @param {object} props - Component props.
 * @param {string} [props.className] - Additional CSS classes.
 * @param {React.ReactNode} props.children - The content of the card.
 */
const Card = ({ className, ...props }: any) => {
  return <div className={`rounded-xl border bg-card text-card-foreground shadow ${className}`} {...props} />;
};

/**
 * Mock CardHeader component.
 * @param {object} props - Component props.
 * @param {string} [props.className] - Additional CSS classes.
 * @param {React.ReactNode} props.children - The content of the card header.
 */
const CardHeader = ({ className, ...props }: any) => {
  return <div className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props} />;
};

/**
 * Mock CardTitle component.
 * @param {object} props - Component props.
 * @param {string} [props.className] - Additional CSS classes.
 * @param {React.ReactNode} props.children - The content of the card title.
 */
const CardTitle = ({ className, ...props }: any) => {
  return <h3 className={`text-2xl font-semibold leading-none tracking-tight ${className}`} {...props} />;
};

/**
 * Mock CardDescription component.
 * @param {object} props - Component props.
 * @param {string} [props.className] - Additional CSS classes.
 * @param {React.ReactNode} props.children - The content of the card description.
 */
const CardDescription = ({ className, ...props }: any) => {
  return <p className={`text-sm text-muted-foreground ${className}`} {...props} />;
};

/**
 * Mock CardContent component.
 * @param {object} props - Component props.
 * @param {string} [props.className] - Additional CSS classes.
 * @param {React.ReactNode} props.children - The content of the card content.
 */
const CardContent = ({ className, ...props }: any) => {
  return <div className={`p-6 pt-0 ${className}`} {...props} />;
};

/**
 * Mock Badge component.
 * @param {object} props - Component props.
 * @param {string} [props.variant="default"] - The badge variant.
 * @param {string} [props.className] - Additional CSS classes.
 * @param {React.ReactNode} props.children - The content of the badge.
 */
const Badge = ({ variant, className, ...props }: any) => {
  const baseClasses = "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2";
  const variantClasses: Record<string, string> = {
    default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
    secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
    destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
  };
  const variantClass = variantClasses[variant] || "";

  return <div className={`${baseClasses} ${variantClass} ${className}`} {...props} />;
};

/**
 * Mock Image component.
 * @param {object} props - Component props.
 * @param {string} props.src - The image source.
 * @param {string} props.alt - The alt text for the image.
 * @param {string} [props.className] - Additional CSS classes.
 * @param {number} [props.width] - The width of the image.
 * @param {number} [props.height] - The height of the image.
 * @param {boolean} [props.fill=false] - Whether the image should fill its container.
 */
const Image = ({ src, alt, className, width, height, fill, ...props }: any) => {
  const style = fill ? { objectFit: 'cover' } : { width, height };
  return <img src={src} alt={alt} className={className} style={style} {...props} />;
};

export default function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  // ============================================================================
  // PROJECT IMAGES: To add your own project images:
  // 1. Add your image files to the /public folder (e.g., /public/opal-screenshot.png)
  // 2. Update the 'image' property below to reference it (e.g., "/opal-screenshot.png")
  // 3. Or use external URLs if hosting elsewhere
  // ============================================================================
  const projects = [
    {
      title: "readjjk",
      description: "First-ever website to fully colorize 272 chapters of Jujutsu Kaisen (5000+ images) using an advanced manga colorization engine. Built a scalable full-stack application with optimized image processing pipeline, efficient data management for thousands of high-resolution manga pages, and a responsive reader interface. Implements complex image serving architecture, chapter navigation system, and real-time page rendering with caching strategies for optimal performance.",
      image: "https://placehold.co/1200x600/1e293b/a5f3fc?text=readjjk", // TODO: Replace with "/readjjk-screenshot.png"
      technologies: ["TypeScript", "React", "Next.js", "Image Processing", "Manga Reader", "Colorization Engine"],
      liveUrl: "https://readjjkcolored.com/",
      githubUrl: "https://github.com/winston6800/jjk",
      color: "from-orange-500 to-red-600",
    },
    {
      title: "Loop Burn Engine",
      description: "Productivity timer application with real-time cost tracking. Built with Next.js 15, Clerk authentication, and Neon PostgreSQL. Implements timer state management, productivity charts with Recharts, and hourly rate calculations. Features include task history tracking, cumulative productivity metrics, and distraction identification. Utilizes Prisma ORM for data persistence and implements server-side rendering for optimal performance.",
      image: "https://placehold.co/1200x600/1e293b/a5f3fc?text=Loop+Burn", // TODO: Replace with "/loopburn-screenshot.png"
      technologies: ["Next.js 15", "TypeScript", "Clerk", "PostgreSQL", "Prisma", "Recharts"],
      liveUrl: null,
      githubUrl: "https://github.com/winston6800/loopburn",
      color: "from-yellow-500 to-orange-600",
    },
    {
      title: "Opal",
      description: "Chrome extension (Manifest V3) implementing real-time browser activity tracking with background service worker architecture. Built with TypeScript, React 18, and Vite. Features include content script injection for tab visibility detection, Chrome Storage API integration for cross-device state synchronization, and interval-based time accumulation with 30-second precision. Implements state machine pattern for pet UI states and handles edge cases including tab switching, page visibility changes, and daily reset logic.",
      image: "https://placehold.co/1200x600/1e293b/a5f3fc?text=Opal", // TODO: Replace with "/opal-screenshot.png" after adding image to /public folder
      technologies: ["TypeScript", "React 18", "Chrome Extension API", "Manifest V3", "Vite", "CSS Modules"],
      liveUrl: null,
      githubUrl: "https://github.com/winston6800/opal",
      color: "from-blue-500 to-purple-600",
    },
    {
      title: "Pillar",
      description: "Full-stack web application built with Next.js 15 App Router and Prisma ORM. Implements streak calculation algorithm with date-based gap detection, tiered progression system with 7 unlockable states, and RESTful API routes for CRUD operations. Features include server-side rendering, SQLite for local development with PostgreSQL migration path, and real-time streak recalculation on data mutations. Utilizes React Server Components and client-side state management for optimal performance.",
      image: "https://placehold.co/1200x600/1e293b/a5f3fc?text=Pillar", // TODO: Replace with "/pillar-screenshot.png"
      technologies: ["Next.js 15", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS", "React Server Components"],
      liveUrl: null,
      githubUrl: "https://github.com/winston6800/pillar",
      color: "from-green-500 to-teal-600",
    },
    {
      title: "Personal Calendar Tracker",
      description: "Next.js 15 application with Prisma ORM for daily data tracking and visualization. Implements calendar grid component with date-fns for date manipulation, RESTful API routes for data persistence, and responsive design with Tailwind CSS. Features include date picker integration, CRUD operations with optimistic UI updates, and calendar view with activity indicators. Utilizes React Server Components for efficient rendering and client-side state for interactive elements.",
      image: "https://placehold.co/1200x600/1e293b/a5f3fc?text=Personal+Calendar", // TODO: Replace with "/personalcal-screenshot.png"
      technologies: ["Next.js 15", "TypeScript", "Prisma", "SQLite", "Tailwind CSS", "date-fns"],
      liveUrl: null,
      githubUrl: "https://github.com/winston6800/personalcal",
      color: "from-purple-500 to-pink-600",
    },
    {
      title: "MomentumOS",
      description: "Conversational productivity application built with Next.js 15, Clerk authentication, and Neon PostgreSQL. Implements LLM integration for task generation, conversation history management, and personalized task recommendations. Features include real-time chat interface, streak tracking, progress visualization, and background research capabilities. Utilizes Prisma ORM for data modeling and implements compounding mechanism for task personalization based on user behavior patterns.",
      image: "https://placehold.co/1200x600/1e293b/a5f3fc?text=MomentumOS", // TODO: Replace with "/momentumos-screenshot.png"
      technologies: ["Next.js 15", "TypeScript", "Clerk", "PostgreSQL", "Prisma", "LLM Integration"],
      liveUrl: null,
      githubUrl: "https://github.com/winston6800/momentumos",
      color: "from-cyan-500 to-blue-600",
    },
  ];

  const nextProject = () => {
    setCurrentProjectIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProjectIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToProject = (index: number) => {
    setCurrentProjectIndex(index);
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden text-foreground">
      {/* Tailwind CSS is assumed to be available. */}
      {/* Animated background gradient */}
      <div
        className="fixed inset-0 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.1), transparent 40%)`,
        }}
      />

      {/* Header */}
      <header className="fixed top-0 z-50 w-full border-b border-gray-700 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-center px-4 md:px-6">
          <nav className="flex items-center space-x-8 text-sm font-medium">
            <a href="#home" className="transition-all duration-300 hover:text-primary hover:scale-110">
              Home
            </a>
            <a href="#projects" className="transition-all duration-300 hover:text-primary hover:scale-110">
              Projects
            </a>
            <a href="#about" className="transition-all duration-300 hover:text-primary hover:scale-110">
              About
            </a>
            <a href="#tutoring" className="transition-all duration-300 hover:text-primary hover:scale-110">
              Tutoring
            </a>
            <a href="#contact" className="transition-all duration-300 hover:text-primary hover:scale-110">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative">
        <div className="container mx-auto px-4 md:px-6">
          <div
            className={`flex flex-col items-center space-y-8 text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="space-y-6">
              <div className="relative">
                <h1 className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent animate-pulse">
                  Winston Zhang
                </h1>
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
              </div>
              <p className="mx-auto max-w-[600px] text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Full-stack software engineer specializing in
                <br />
                <span className="text-primary font-semibold">TypeScript, React, and scalable system architecture</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://github.com/winston6800" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="lg"
                  className="group hover:bg-primary hover:text-primary-foreground transition-all duration-300 bg-transparent"
                >
                  <Github className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                  View Code
                </Button>
              </a>
            </div>

            <div className="absolute bottom-8 animate-bounce">
              <ArrowDown className="h-6 w-6 text-muted-foreground" />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Technical Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Full-stack applications demonstrating system design, API development, and modern web technologies.
            </p>
          </div>

          {/* Carousel Container */}
          <div className="w-full max-w-6xl mx-auto relative px-4">
            <div className="relative overflow-hidden rounded-xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ 
                  transform: `translateX(-${currentProjectIndex * 100}%)`
                }}
              >
                {projects.map((project, index) => (
                  <div 
                    key={index} 
                    className="w-full flex-shrink-0"
                  >
                    <div className="px-2">
                      <Card className="group overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-500">
                        <div className="flex flex-col md:flex-row gap-0">
                          {/* Image Section */}
                          <div className={`w-full md:w-1/2 relative overflow-hidden ${index % 2 === 1 ? "md:order-2" : ""}`}>
                            <div className="aspect-video md:aspect-square relative">
                              <div
                                className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                              ></div>
                              <Image
                                src={project.image || "/placeholder.svg"}
                                alt={project.title}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                              />
                            </div>
                          </div>
                          {/* Content Section */}
                          <div className="w-full md:w-1/2 p-4 sm:p-6 md:p-8 flex flex-col justify-center">
                            <CardHeader className="p-0 mb-4">
                              <CardTitle className="text-lg sm:text-xl md:text-2xl mb-2 md:mb-3 group-hover:text-primary transition-colors duration-300">
                                {project.title}
                              </CardTitle>
                              <CardDescription className="text-sm sm:text-base leading-relaxed line-clamp-4 md:line-clamp-none">
                                {project.description}
                              </CardDescription>
                            </CardHeader>
                            <CardContent className="p-0">
                              <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                                {project.technologies.map((tech: string) => (
                                  <Badge
                                    key={tech}
                                    variant="secondary"
                                    className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
                                  >
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                              <div className="flex flex-wrap gap-2 md:gap-4">
                                {project.liveUrl && (
                                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1 md:flex-none">
                                    <Button
                                      variant="outline"
                                      size="sm"
                                      className="w-full md:w-auto group/btn hover:bg-primary hover:text-primary-foreground transition-all duration-300 bg-transparent text-xs md:text-sm"
                                    >
                                      <ExternalLink className="mr-2 h-3 w-3 md:h-4 md:w-4 group-hover/btn:rotate-45 transition-transform duration-300" />
                                      Live Demo
                                    </Button>
                                  </a>
                                )}
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1 md:flex-none">
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    className="w-full md:w-auto group/btn hover:bg-primary hover:text-primary-foreground transition-all duration-300 bg-transparent text-xs md:text-sm"
                                  >
                                    <Github className="mr-2 h-3 w-3 md:h-4 md:w-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                                    Code
                                  </Button>
                                </a>
                              </div>
                            </CardContent>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center gap-2 sm:gap-4 mt-6 md:mt-8">
              <Button
                variant="outline"
                onClick={prevProject}
                className="rounded-full p-2 sm:p-3 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Previous project"
              >
                <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>

              {/* Dots Indicator */}
              <div className="flex gap-1.5 sm:gap-2">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToProject(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentProjectIndex
                        ? "w-6 sm:w-8 bg-primary"
                        : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                    aria-label={`Go to project ${index + 1}`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                onClick={nextProject}
                className="rounded-full p-2 sm:p-3 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Next project"
              >
                <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </div>

            {/* Project Counter */}
            <div className="text-center mt-3 md:mt-4 text-xs sm:text-sm text-muted-foreground">
              {currentProjectIndex + 1} / {projects.length}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Technical Expertise
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-semibold mb-3 text-primary">Frontend</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• React & Next.js 15</li>
                  <li>• TypeScript</li>
                  <li>• Tailwind CSS</li>
                  <li>• State Management</li>
                  <li>• Chrome Extensions</li>
                </ul>
              </Card>
              <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-semibold mb-3 text-primary">Backend</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Node.js & Express</li>
                  <li>• Prisma ORM</li>
                  <li>• PostgreSQL & SQLite</li>
                  <li>• RESTful APIs</li>
                  <li>• Server Components</li>
                </ul>
              </Card>
              <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-semibold mb-3 text-primary">Tools & Practices</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Git & Version Control</li>
                  <li>• CI/CD Pipelines</li>
                  <li>• Testing Strategies</li>
                  <li>• System Design</li>
                  <li>• Performance Optimization</li>
                </ul>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Full-stack engineer specializing in building production-ready applications with modern web technologies. 
                  Experience architecting scalable systems from concept to deployment, with a focus on type safety, 
                  maintainable code, and optimal user experiences.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Proficient in the React ecosystem, server-side rendering, and database design. Experienced with 
                  Chrome Extension development (Manifest V3), real-time applications, and implementing complex 
                  business logic with type-safe patterns.
                </p>
                <div className="flex gap-4 pt-4">
                  <a href="https://www.linkedin.com/in/winston-zhang-29aa5b28b/" target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      className="group hover:bg-primary hover:text-primary-foreground transition-all duration-300 bg-transparent"
                    >
                      <Linkedin className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                      LinkedIn
                    </Button>
                  </a>
                  <a href="https://github.com/winston6800" target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      className="group hover:bg-primary hover:text-primary-foreground transition-all duration-300 bg-transparent"
                    >
                      <Github className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                      GitHub
                    </Button>
                  </a>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
                  <Image
                    src="https://drive.google.com/uc?export=download&id=1ArJmZWIne2mnH6ua0R84xpYpW_8VjJx7"
                    alt="Winston Zhang"
                    width={300}
                    height={300}
                    className="relative rounded-full border-4 border-background group-hover:scale-105 transition-transform duration-300 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tutoring Section - Subtle Flex */}
      <section id="tutoring" className="py-32 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <GraduationCap className="h-10 w-10 text-primary mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Tutoring Background
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Experienced in communicating complex technology concepts clearly and effectively through hands-on teaching and real-world project examples.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-semibold mb-3 text-primary">What I Teach</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Full-stack development (React, Next.js, TypeScript)</li>
                  <li>• Database design & ORM patterns (Prisma)</li>
                  <li>• System architecture & scalability</li>
                  <li>• Chrome Extension development</li>
                  <li>• Production-ready code practices</li>
                </ul>
              </Card>
              <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-semibold mb-3 text-primary">Teaching Style</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Hands-on coding sessions</li>
                  <li>• Real project walkthroughs</li>
                  <li>• Code review & best practices</li>
                  <li>• Interview preparation</li>
                  <li>• Career transition guidance</li>
                </ul>
              </Card>
            </div>

            {/* Video Section */}
            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative w-full aspect-video bg-muted">
                  {/* ============================================================================
                      TUTORING VIDEO: Google Drive Video Embed Instructions:
                      1. Upload your video to Google Drive
                      2. Right-click the video → Share → Change to "Anyone with the link"
                      3. Get the file ID from the share URL (the long string after /d/ and before /view)
                      4. Use this format: https://drive.google.com/file/d/FILE_ID/preview
                      5. Replace the empty src="" below with your Google Drive embed URL
                      
                      Alternative: YouTube/Vimeo
                      - YouTube: https://www.youtube.com/embed/VIDEO_ID
                      - Vimeo: https://player.vimeo.com/video/VIDEO_ID
                      ============================================================================ */}
                   <iframe
                     className="absolute inset-0 w-full h-full"
                     src="https://drive.google.com/file/d/1z5JZcZ8RoHEHkJeon-x-xqI-uKlduJ3E/preview"
                     title="Tutoring Demo Video"
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                     allowFullScreen
                   />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Open to Opportunities
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Seeking software engineering roles where I can contribute to building scalable systems and high-quality applications. Available for full-time positions and contract work.
            </p>

            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <a href="https://www.linkedin.com/in/winston-zhang-29aa5b28b/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-3 group cursor-pointer hover:text-primary transition-colors duration-300">
                    <Linkedin className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-lg">linkedin.com/in/winston-zhang-29aa5b28b</span>
                  </a>
                  <a href="https://github.com/winston6800" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-3 group cursor-pointer hover:text-primary transition-colors duration-300">
                    <Github className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                    <span className="text-lg">github.com/winston6800</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-700 py-12 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4">
            <p className="text-center text-muted-foreground">
              © 2024 Winston Zhang.
            </p>
            <div className="flex items-center space-x-4">
              <a href="https://github.com/winston6800" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="sm"
                  className="hover:text-primary hover:scale-110 transition-all duration-300"
                >
                  <Github className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/winston-zhang-29aa5b28b/" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="sm"
                  className="hover:text-primary hover:scale-110 transition-all duration-300"
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
