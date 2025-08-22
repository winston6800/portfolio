"use client";

import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, ExternalLink, ArrowDown } from "lucide-react";

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

  const projects = [
    {
      title: "Tabby",
      description: "A productivity tool that helps students stay focused. Led a 6-person cross-functional team from concept to delivery in 10 weeks, conducting 20+ live interviews to validate the product direction and define the core feature set. Delivered the fastest complete demo out of 16 teams with a functional MVP.",
      image: "https://placehold.co/1200x600/1e293b/a5f3fc?text=Tabby",
      technologies: ["React", "TypeScript", "Zustand", "CI/CD", "Figma", "Flowchart"],
      liveUrl: "#", // Update with actual live URL if available
      githubUrl: "https://github.com/winston6800/tabby",
      color: "from-blue-500 to-purple-600",
    },
    {
      title: "Loopspeed",
      description: "A full-stack application designed for rapid go-to-market testing. Deployed with Next.js and Vercel Edge Functions, it features a persistent user metrics tracking system using SQLite and Prisma ORM.",
      image: "https://placehold.co/1200x600/1e293b/a5f3fc?text=Loopspeed",
      technologies: ["Next.js", "TypeScript", "Vercel Edge Functions", "SQLite", "Prisma"],
      liveUrl: "https://loopspeed.vercel.app/",
      githubUrl: "https://github.com/winston6800/loopspeed", // Assuming this is the repo, user didn't specify.
      color: "from-green-500 to-teal-600",
    },
    {
      title: "Calor.ai AI Calorie Tracker",
      description: "A serverless AI-powered calorie tracker built with a containerized Node.js backend on AWS. It uses a fine-tuned GPT-4 API for 95%+ accurate calorie estimation and was launched with a successful go-to-market strategy that generated over 20k impressions on Reddit.",
      image: "https://placehold.co/1200x600/1e293b/a5f3fc?text=Calor.ai",
      technologies: ["Node.js", "React", "AWS Lambda", "Docker", "GPT-4 API", "Stripe"],
      liveUrl: "#", // Update with actual live URL if available
      githubUrl: "https://github.com/winston6800/caloriecounter/tree/main",
      color: "from-orange-500 to-red-600",
    },
  ];

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
                I build things that wouldn't exist
                <br />
                <span className="text-primary font-semibold">unless I made them</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group relative overflow-hidden">
                <span className="relative z-10 flex items-center">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Let's Build Something Bold
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="group hover:bg-primary hover:text-primary-foreground transition-all duration-300 bg-transparent"
              >
                <Github className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                View Code
              </Button>
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
              Proof of Concept
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A record of ideas taken from zero to launch. I don't just talk about building, I ship.
            </p>
          </div>

          <div className="grid gap-8 md:gap-12 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className={`aspect-video relative overflow-hidden ${index % 2 === 1 ? "md:order-2" : ""}`}>
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
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <CardHeader className="p-0 mb-6">
                      <CardTitle className="text-2xl md:text-3xl mb-4 group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-lg leading-relaxed">{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech: string) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-4">
                        <Button
                          variant="outline"
                          className="group/btn hover:bg-primary hover:text-primary-foreground transition-all duration-300 bg-transparent"
                        >
                          <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:rotate-45 transition-transform duration-300" />
                          Live Demo
                        </Button>
                        <Button
                          variant="outline"
                          className="group/btn hover:bg-primary hover:text-primary-foreground transition-all duration-300 bg-transparent"
                        >
                          <Github className="mr-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                          Code
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              The Mission
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-6 text-left">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  I don't just solve problems; I solve the right problems. My goal is to find opportunities to build systems that scale, create value, and fundamentally improve how we live and work.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  My philosophy is simple: **vision without execution is hallucination.** I am committed to a process of rapid iteration, user-centric design, and relentless implementation to bring ambitious ideas into reality.
                </p>
                <div className="flex gap-4 justify-center md:justify-start">
                  <Button
                    variant="outline"
                    className="group hover:bg-primary hover:text-primary-foreground transition-all duration-300 bg-transparent"
                  >
                    <Linkedin className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                    LinkedIn
                  </Button>
                  <Button
                    variant="outline"
                    className="group hover:bg-primary hover:hover:text-primary-foreground transition-all duration-300 bg-transparent"
                  >
                    <Github className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                    GitHub
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
                  <Image
                    src="https://placehold.co/300x300/1e293b/a5f3fc?text=Winston"
                    alt="Winston Zhang"
                    width={300}
                    height={300}
                    className="relative rounded-full border-4 border-background group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Ready to build something visionary?
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              I'm always looking for ambitious projects and people to collaborate with. Let's talk about turning your boldest ideas into a tangible reality.
            </p>

            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-center space-x-3 group cursor-pointer hover:text-primary transition-colors duration-300">
                    <Mail className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-lg">winston@example.com</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3 group cursor-pointer hover:text-primary transition-colors duration-300">
                    <Linkedin className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-lg">linkedin.com/in/winston</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3 group cursor-pointer hover:text-primary transition-colors duration-300">
                    <Github className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                    <span className="text-lg">github.com/winston</span>
                  </div>
                  <Button size="lg" className="w-full group relative overflow-hidden mt-8">
                    <span className="relative z-10 flex items-center justify-center">
                      <Mail className="mr-2 h-5 w-5" />
                      Send Message
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                  </Button>
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
              © 2024 Winston Zhang. Crafted with audacious vision and relentless execution.
            </p>
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="hover:text-primary hover:scale-110 transition-all duration-300"
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="hover:text-primary hover:scale-110 transition-all duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="hover:text-primary hover:scale-110 transition-all duration-300"
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
