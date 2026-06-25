"use client"

import { ExternalLink, Github } from "lucide-react"
import { motion } from "framer-motion"
import { AnimatedCard } from "./aceternity/animated-card"
import { link } from "fs"

export default function Projects() {
  const projects = [
    {
      title: "Laptop Price Predictor",
      description:
        "ML-based web app that predicts laptop prices based on specifications like RAM, storage, processor, and brand. Trained using a regression pipeline with scikit-learn.",
      technologies: ["Python", "Scikit-learn", "Streamlit", "Pandas", "Pickle"],
      link: "#",
      github: "https://github.com/basabraj/Laptop_price",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Anti-Money Laundering (TGNN)",
      description:
        "Real-time AML system using Temporal Graph Neural Networks to detect suspicious banking accounts by representing transactions as a dynamic graph.",
      technologies: ["Python", "PyTorch", "NetworkX", "Streamlit", "TGNN"],
      link: "https://insights-dashboard-indol.vercel.app/",
      github: "https://github.com/basabraj/Anti_Money_Laundering-AML-",
      gradient: "from-red-500 to-orange-500",
    },
    {
      title: "Deepfake & Emotion Recognition",
      description:
        "ResNetV2-based deepfake detection (80.77% accuracy) and emotion recognition using ResNet50 on FER2013 (96.7% accuracy). DF40-HybridNet with Xception, ELA, and LIME for explainability.",
      technologies: ["Python", "ResNetV2", "ResNet50", "Streamlit", "LIME", "TensorFlow"],
      link: "#",
      github: "https://github.com/basabraj/render-demo-ResNet50",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Sales Promotion Analytics",
      description:
        "Interactive Power BI dashboards with SQL queries and time-series forecasting models for sales trend analysis at MATHNAL TECH. Supported business decision-making.",
      technologies: ["Power BI", "SQL", "Python", "Time Series", "Data Visualization"],
      link: "#",
      github: "#",
      gradient: "from-green-500 to-emerald-500",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-4 text-balance"
        >
          Featured Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-muted-foreground mb-12"
        >
          Real-world ML & AI systems — from edge deployment to cloud-hosted apps.
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, idx) => (
            <AnimatedCard key={project.title} className="h-full">
              <div className="group relative p-6 bg-card rounded-lg border border-border hover:border-primary transition-all hover:shadow-xl h-full overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                <div className="relative z-10">
                  <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
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
              </div>
            </AnimatedCard>
          ))}
        </motion.div>
      </div>
    </section>
  )
}