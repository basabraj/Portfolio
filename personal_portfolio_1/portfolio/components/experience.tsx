"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "AI Intern",
      company: "Conglomerate Business Solutions Pvt. Ltd.",
      period: "Feb 2026 – Present",
      location: "Kolkata · On-site",
      link: "https://maps.app.goo.gl/5qwW6zTcB7DGcwsh7",
      highlights: [
        "Conducted EDA and anomaly detection on 40,000+ records of live machine load data using a stacked 3-layer LSTM Autoencoder; identified 1,249 anomalies using Z-score and MAD threshold.",
        "Deployed real-time face recognition and headcount system on Raspberry Pi 5 with Hailo-8L NPU using SCRFD + ArcFace MobileFaceNet; built FastAPI dashboard with LanceDB persistence.",
        "Deployed YOLOv8-based ANPR system for real-time vehicle number plate detection across CCTV, IR Bullet, and RPi camera sources.",
      ],
    },
    {
      title: "Data Analyst (Team Project)",
      company: "MATHNAL TECH",
      period: "Oct 2025 – Dec 2025",
      location: "Remote",
      link: null,
      highlights: [
        "Designed interactive Power BI dashboards for sales trend analysis and business decision-making.",
        "Applied SQL queries and probabilistic time-series models for sales forecasting and seasonality detection.",
        "Collaborated in a team environment delivering data-driven insights for promotion analytics.",
      ],
    },
    {
      title: "M.Sc. Data Science & AI",
      company: "RKMRC, Narendrapur — University of Calcutta",
      period: "2024 – 2026",
      location: "Narendrapur, Kolkata",
      link: "https://maps.app.goo.gl/hweYk7NxNcComPB59",
      highlights: [
        "Actively researching on Anomaly or Noise Detection in Images using multimodal learning and computer vision approaches.",
        "Developed ResNetV2-based deepfake detection (80.77% accuracy) and ResNet50 emotion recognition on FER2013 (96.7% accuracy).",
        "Built Real-Time AML system using Temporal Graph Neural Networks for suspicious account detection in banking transactions.",
      ],
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

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            Professional{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
        </motion.div>

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={itemVariants}>
              <motion.div
                className="relative pl-8 pb-8 border-l-2 border-primary/30 last:pb-0 hover:border-primary transition-colors"
                whileHover={{ paddingLeft: 32 }}
              >
                <motion.div
                  className="absolute -left-3 top-0 w-4 h-4 bg-primary rounded-full"
                  aria-hidden="true"
                  whileHover={{ scale: 1.3 }}
                />

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                  <div>
                    <h3 className="font-bold text-lg text-foreground">{exp.title}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground whitespace-nowrap">
                    <Calendar className="w-4 h-4" aria-hidden="true" />
                    <time>{exp.period}</time>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-sm text-muted-foreground mb-4">
                  <MapPin className="w-3 h-3 shrink-0" />
                  {exp.link ? (
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary hover:underline transition-colors"
                    >
                      {exp.location}
                    </a>
                  ) : (
                    <span>{exp.location}</span>
                  )}
                </div>

                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <motion.li
                      key={i}
                      className="text-sm text-muted-foreground flex gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05, duration: 0.4 }}
                    >
                      <span className="text-primary mt-1 flex-shrink-0" aria-hidden="true">
                        •
                      </span>
                      <span>{highlight}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}