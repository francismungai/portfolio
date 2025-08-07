import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { AnimatedImage } from "@/components/animated-image";
import { ScrollAnimation } from "@/components/scroll-animation";
import { NavLink } from "@/components/nav-link";
import { SectionHeading } from "@/components/section-heading";
import { ContactModal } from "@/components/contact-modal";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl">Portfolio</div>
          <nav className="hidden md:flex gap-6">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>
          <ContactModal />
        </div>
      </header>

      <main className="container py-8 md:py-12">
        {/* Hero Section */}
        <section id="hero" className="py-12 md:py-20">
          <ScrollAnimation>
            <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16">
              <div className="flex-1 space-y-4 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                  Full-stack Software Engineer
                </h1>
                <p className="text-xl text-muted-foreground">
                  Creating solutions that make a difference. Leading development
                  at MedVic & Tu-Fund
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
                  <Button asChild className="w-full sm:w-auto">
                    <a
                      href="#projects"
                      className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2"
                    >
                      View Projects
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full sm:w-auto"
                  >
                    <a
                      href="/Francis_Mungai_f29072025.pdf"
                      download
                      className="border border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2"
                    >
                      Download Resume
                    </a>
                  </Button>
                </div>
              </div>
              <AnimatedImage
                /* src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2331.jpg-KWUY56uU0XbI5yUjsFSDlMLdDdH0Aj.jpeg" */
                src="/hero-image.jpg"
                alt="Profile picture of Francis Mungai"
              />
            </div>
          </ScrollAnimation>
        </section>

        {/* About Section */}
        <section id="about" className="py-12 md:py-20 border-t">
          <SectionHeading>About Me</SectionHeading>
          <ScrollAnimation>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-lg">
                  Hi👋! My name is Francis, but I go by Frank among my many
                  nicknames. I am a full-stack engineer with a bias towards the
                  backend. I concentrated on Data and Databases in my Computer
                  Science major because I have a particular interest in how data
                  is managed, especially in large databases. Over time, I've
                  come to work on various web development projects and have been
                  exposed to frontend technologies like React.js, Next.js, and
                  Tailwind. I now leverage both my frontend and backend skills
                  in my projects.
                </p>
                <p className="text-lg">
                  At MedVic and Tu-Fund, I manage projects from the ground up to
                  successful deployment. My role involves making key technical
                  decisions and ensuring our solutions are both innovative and
                  practical. The business implications of technical decisions
                  are not always talked about in the software development space,
                  but working in startups has made me more aware and
                  appreciative of good technical decisions.
                </p>
                <p className="text-lg">
                  Beyond coding, soccer ⚽ is my go-to way to unwind and
                  recharge. Whether playing in a league or a friendly match with
                  friends, it keeps me energized.
                </p>
                <p className="text-lg">
                  Though I can learn programming languages fairly quickly,
                  natural languages, on the other hand, remain daunting 😅. But
                  I do speak Swahili (and by extension, Arabic, lol).
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Education</h3>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-md bg-muted flex items-center justify-center shrink-0">
                    <span className="font-bold">CW</span>
                  </div>
                  <div>
                    <h4 className="font-medium">
                      Case Western Reserve University
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Bachelor of Science - BS, Computer Science
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Aug 2020 - Dec 2024
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-12 md:py-20 border-t">
          <SectionHeading>Experience</SectionHeading>
          <ScrollAnimation>
            <div className="space-y-8">
              <ScrollAnimation delay={1}>
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>Full-stack Developer</CardTitle>
                        <CardDescription>
                          MedVic {/*• Present*/}
                        </CardDescription>
                      </div>
                      <Badge>Current</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p>
                      Leading development of MedVic, a mobile platform enabling
                      users to find hospital shifts and volunteer opportunities
                      with various organizations.
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        Designed and developed the app using Expo React Native
                        for iOS and Android, integrating React for web-based
                        features.
                      </li>
                      <li>
                        Built a scalable backend with Supabase, leveraging
                        PostgreSQL for table design, relationships, indexes, RLS
                        policies, RPCs, and edge functions.
                      </li>
                      <li>
                        Optimized database performance with efficient queries
                        and security policies to ensure seamless app
                        functionality.
                      </li>
                      <li>
                        Enabled flexible job discovery, allowing users to find
                        nearby hospital shifts and volunteer opportunities with
                        partner organizations.
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </ScrollAnimation>
              <ScrollAnimation delay={2}>
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>Full-stack Developer</CardTitle>
                        <CardDescription>
                          Tu-Fund {/*  • Aug 2023 - Present */}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p>
                      Leading development of Tu-Fund, a fundraising platform
                      based in Cleveland, Ohio.
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        Built and launched Tu-Fund, a fundraising platform,
                        leading its development from design to production.
                      </li>
                      <li>
                        Developed a full-stack web app using Next.js for the
                        frontend and Node.js with MongoDB for the backend,
                        ensuring a seamless user experience.
                      </li>
                      <li>
                        Deployed and optimized infrastructure on AWS, hosting
                        the app on an EC2 instance with a reverse proxy for a
                        custom Google domain.
                      </li>
                      <li>
                        Implemented secure and scalable media handling, setting
                        up an S3 bucket with CloudFront for fast and efficient
                        image delivery.
                      </li>
                      <li>
                        Integrated Stripe for seamless fundraising donations,
                        improving user experience and increasing contribution
                        rates.
                      </li>
                      <li>
                        Designed the platform using Figma, ensuring an intuitive
                        and engaging interface for fundraisers and donors.
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            </div>
          </ScrollAnimation>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12 md:py-20 border-t">
          <SectionHeading>Projects</SectionHeading>
          <ScrollAnimation>
            <div className="grid md:grid-cols-2 gap-6">
              <ScrollAnimation delay={1}>
                <Card className="overflow-hidden">
                  <div className="relative aspect-video overflow-hidden">
                    <div className="absolute inset-0 border-4 border-primary/20 rounded-t-lg z-10"></div>
                    <iframe
                      src="https://www.med-vic.com/"
                      className="w-full h-full"
                      style={{
                        transform: "scale(1.05)",
                        transformOrigin: "top left",
                      }}
                      title="MedVic Preview"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>MedVic Mobile App</CardTitle>
                    <CardDescription>
                      Hospital shift finder mobile application
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p>
                      A mobile platform enabling users to find hospital shifts
                      and volunteer opportunities with various organizations.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge variant="secondary">React Native</Badge>
                      <Badge variant="secondary">Expo</Badge>
                      <Badge variant="secondary">Supabase</Badge>
                      <Badge variant="secondary">PostgreSQL</Badge>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full sm:w-auto">
                      <a
                        href="https://www.med-vic.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2"
                      >
                        Visit MedVic
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </ScrollAnimation>
              <ScrollAnimation delay={2}>
                <Card className="overflow-hidden">
                  <div className="relative aspect-video overflow-hidden">
                    <div className="absolute inset-0 border-4 border-primary/20 rounded-t-lg z-10"></div>
                    <iframe
                      src="https://www.tu-fund.com/"
                      className="w-full h-full"
                      style={{
                        transform: "scale(1.05)",
                        transformOrigin: "top left",
                      }}
                      title="Tu-Fund Preview"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>Tu-Fund Platform</CardTitle>
                    <CardDescription>
                      Fundraising web application
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p>
                      A fundraising platform that enables users to create and
                      manage fundraising campaigns with seamless donation
                      processing.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge variant="secondary">Next.js</Badge>
                      <Badge variant="secondary">Node.js</Badge>
                      <Badge variant="secondary">MongoDB</Badge>
                      <Badge variant="secondary">AWS</Badge>
                      <Badge variant="secondary">Stripe</Badge>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full sm:w-auto">
                      <a
                        href="https://www.tu-fund.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2"
                      >
                        Visit Tu-Fund
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </ScrollAnimation>
            </div>
          </ScrollAnimation>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-12 md:py-20 border-t">
          <SectionHeading>Skills</SectionHeading>
          <ScrollAnimation>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <ScrollAnimation delay={1}>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Frontend</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      <Badge>React</Badge>
                      <Badge>Next.js</Badge>
                      <Badge>React Native</Badge>
                      <Badge>Expo</Badge>
                      <Badge>Tailwind CSS</Badge>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>
              <ScrollAnimation delay={2}>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Backend</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      <Badge>Node.js</Badge>
                      <Badge>Express</Badge>
                      <Badge>MongoDB</Badge>
                      <Badge>PostgreSQL</Badge>
                      <Badge>Supabase</Badge>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>
              <ScrollAnimation delay={3}>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">DevOps</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      <Badge>AWS</Badge>
                      <Badge>EC2</Badge>
                      <Badge>S3</Badge>
                      <Badge>CloudFront</Badge>
                      <Badge>CI/CD</Badge>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>
              <ScrollAnimation delay={4}>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Tools</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      <Badge>Git</Badge>
                      <Badge>GitHub</Badge>
                      <Badge>Figma</Badge>
                      <Badge>VS Code</Badge>
                      <Badge>Stripe</Badge>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            </div>
          </ScrollAnimation>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 md:py-20 border-t">
          <SectionHeading>Get In Touch</SectionHeading>
          <ScrollAnimation>
            <div className="text-center">
              <p className="text-lg mb-6">
                I'm always open to new opportunities and collaborations. If
                you'd like to discuss a project or just say hi, feel free to
                reach out!
              </p>
              <ContactModal />
            </div>
          </ScrollAnimation>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Francis Mungai. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
