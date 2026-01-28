"use client"

import { Navbar } from "@/components/navbar"
import { Typewriter } from "@/components/typewriter"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section id="hero" className="flex min-h-screen items-center justify-center px-4 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10">
          <div className="w-full max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              {/* Greeting with wave emoji */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center justify-center gap-2 mb-4"
              >
                <span className="text-lg font-medium text-muted-foreground">Hi, I&apos;m</span>
                <motion.span
                  animate={{ rotate: [0, 20, 0] }}
                  transition={{ duration: 0.6, delay: 0.4, repeat: Infinity, repeatDelay: 3 }}
                  className="text-3xl"
                >
                  👋
                </motion.span>
              </motion.div>

              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-5xl sm:text-7xl font-bold tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6"
              >
                Mahiban
              </motion.h1>

              {/* Typewriter Effect for Roles */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-2xl sm:text-3xl font-semibold h-12 mb-8"
              >
                <Typewriter
                  roles={["Full Stack Developer", "MERN Specialist", "Community Builder", "Tech Enthusiast"]}
                  className="text-2xl sm:text-3xl font-semibold text-foreground"
                />
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg leading-8 text-muted-foreground max-w-2xl mb-10 mx-auto"
              >
                Final-year undergraduate software engineering student passionate about building modern web applications. Specializing in full-stack development with expertise in React, Node.js, and cloud technologies.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-4"
              >
                <a
                  href="#contact"
                  className="rounded-md bg-gradient-to-r from-primary to-accent px-3.5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm hover:shadow-lg transition-shadow"
                >
                  Get in touch
                </a>
                <a href="#projects" className="text-sm font-semibold leading-6 text-primary hover:text-accent transition-colors">
                  View my work <span aria-hidden="true">→</span>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mx-auto max-w-2xl lg:mx-0"
            >
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">About Me</h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                I&apos;m a final-year software engineering student with a passion for creating efficient, scalable, and user-friendly applications.
                I specialize in full-stack development with expertise in modern web technologies.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 sm:py-32 bg-gradient-to-br from-muted/50 via-primary/5 to-accent/5">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mx-auto max-w-2xl lg:mx-0"
            >
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Skills</h2>
              <div className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
                {["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Python", "PostgreSQL", "AWS"].map((skill, index) => {
                  const colors = [
                    "from-blue-500 to-cyan-500",
                    "from-purple-500 to-pink-500",
                    "from-green-500 to-teal-500",
                    "from-orange-500 to-red-500",
                    "from-indigo-500 to-blue-500",
                    "from-yellow-500 to-orange-500",
                    "from-pink-500 to-rose-500",
                    "from-teal-500 to-green-500"
                  ];
                  return (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`flex items-center justify-center rounded-lg bg-gradient-to-br ${colors[index % colors.length]} p-4 shadow-sm hover:shadow-lg transition-all hover:scale-105 text-white font-medium`}
                    >
                      {skill}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 sm:py-32 bg-gradient-to-br from-primary/5 via-accent/5 to-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mx-auto max-w-2xl lg:mx-0"
            >
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Experience</h2>
              <div className="mt-10 space-y-8">
                {[
                  {
                    title: "Software Engineering Intern",
                    company: "Tech Company",
                    period: "June 2023 - August 2023",
                    description: "Developed and maintained full-stack web applications using React and Node.js, improved application performance by 30%."
                  },
                  {
                    title: "Junior Full-Stack Developer",
                    company: "Digital Solutions",
                    period: "September 2023 - Present",
                    description: "Building scalable web applications, collaborating with cross-functional teams, and implementing modern design patterns."
                  },
                  {
                    title: "Freelance Web Developer",
                    company: "Self-employed",
                    period: "2022 - Present",
                    description: "Created responsive websites and web applications for various clients, specializing in React and Next.js."
                  }
                ].map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="rounded-lg border border-primary/20 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/5 p-6 hover:shadow-lg transition-all hover:border-primary/40"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                        <p className="text-sm text-muted-foreground">{exp.company}</p>
                      </div>
                      <span className="text-sm font-medium text-primary">{exp.period}</span>
                    </div>
                    <p className="mt-4 text-muted-foreground">{exp.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 sm:py-32 bg-gradient-to-br from-background via-secondary/5 to-muted/50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mx-auto max-w-2xl lg:mx-0"
            >
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Projects</h2>
              <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3].map((project, index) => {
                  const gradients = [
                    "from-blue-500/20 to-cyan-500/20",
                    "from-purple-500/20 to-pink-500/20",
                    "from-green-500/20 to-teal-500/20"
                  ];
                  return (
                    <motion.div
                      key={project}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -5, scale: 1.02 }}
                      className={`rounded-lg bg-gradient-to-br ${gradients[index]} backdrop-blur-md border border-white/20 p-6 shadow-sm hover:shadow-xl transition-all`}
                    >
                      <h3 className="text-lg font-semibold">Project {project}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        A brief description of this amazing project.
                      </p>
                      <div className="mt-4 flex gap-2">
                        <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                          React
                        </span>
                        <span className="inline-flex items-center rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
                          TypeScript
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 sm:py-32 bg-gradient-to-br from-muted/50 via-accent/5 to-primary/5">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mx-auto max-w-2xl lg:mx-0"
            >
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Get in Touch</h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Ready to work together? Let&apos;s connect and discuss your next project.
              </p>
              <div className="mt-10">
                <a
                  href="mailto:john.doe@example.com"
                  className="text-primary hover:text-primary/80"
                >
                  john.doe@example.com
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-center text-sm text-muted-foreground">
            © 2024 Mahiban. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
