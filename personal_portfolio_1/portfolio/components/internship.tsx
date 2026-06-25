"use client"

import { ExternalLink, Github, Building2 } from "lucide-react"
import { motion } from "framer-motion"
import { AnimatedCard } from "./aceternity/animated-card"

export default function Internship() {
  const internshipProjects = [
    {
      title: "Machine Load Trend Analysis & Anomaly Detection",
      description:
        "Conducted EDA and anomaly detection on a 7-day live machine load dataset (40,000+ records) using a stacked 3-layer LSTM Autoencoder. Applied Z-score and MAD threshold to identify 1,249 anomalies. Delivered recommendations for predictive maintenance, auto-shutdown scheduling, and energy optimization.",
      technologies: ["Python", "LSTM", "Autoencoder", "Pandas", "NumPy", "EDA", "Z-score", "MAD"],
      link: "#",
      github: "#",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Face Recognition & Headcount System",
      description:
        "Deployed a real-time face recognition and people-counting system on Raspberry Pi 5 using Hailo-8L NPU. Built a GStreamer pipeline with SCRFD HEF (face detection) + ArcFace MobileFaceNet HEF (recognition) with Hailo native tracker. Persisted detection events to LanceDB with deduplication and developed a FastAPI web dashboard for live monitoring.",
      technologies: ["Python", "Raspberry Pi 5", "Hailo-8L NPU", "GStreamer", "ArcFace", "FastAPI", "LanceDB"],
      link: "#",
      github: "#",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Edge-Deployed ANPR System",
      description:
        "Deployed a real-time Automatic Number Plate Recognition system using YOLOv8 on Raspberry Pi 5. Designed to detect and recognize vehicle number plates across multiple camera sources including CCTV, IR Bullet, and RPi camera.",
      technologies: ["Python", "YOLOv8", "Raspberry Pi 5", "CCTV", "IR Bullet Camera", "Edge AI"],
      link: "https://vahansense.cbsiot.in/login",
      github: "https://github.com/basabraj/ICVLPR_ultralytics",
      gradient: "from-orange-500 to-red-500",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section id="internship" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <h2 className="text-4xl font-bold text-balance">
            Internship{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
        </motion.div>

        {/* Company Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col sm:flex-row sm:items-center gap-2 mb-12"
        >
          <div className="flex items-center gap-2">
            <Building2 className="w-4 h-4 text-primary shrink-0" />
            <span className="text-muted-foreground text-sm font-medium">
              Conglomerate Business Solutions Pvt. Ltd., Garia, Kolkata
            </span>
          </div>
          <span className="self-start sm:self-auto whitespace-nowrap px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full font-medium">
            Feb 2026 – Present · On-site
          </span>
        </motion.div>

        {/* Project Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {internshipProjects.map((project) => (
            <AnimatedCard key={project.title} className="h-full">
              <motion.div
                variants={itemVariants}
                className="group relative p-6 bg-card rounded-lg border border-border hover:border-primary transition-all hover:shadow-xl h-full overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                <div className="relative z-10 flex flex-col h-full">
                  <h3 className="font-bold text-lg mb-3 group-hover:text-primary transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-grow leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.05 }}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded font-medium hover:bg-primary/20 transition-colors"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    {project.link !== "#" && (
                      <motion.a
                        whileHover={{ x: 4 }}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
                      >
                        Live Demo
                        <ExternalLink className="w-4 h-4" />
                      </motion.a>
                    )}
                    {project.github !== "#" && (
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatedCard>
          ))}
        </motion.div>
      </div>
    </section>
  )
}