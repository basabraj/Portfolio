"use client"

import { motion } from "framer-motion"
import { HoverEffect } from "./aceternity/hover-effect"
import { Brain, BarChart2, Eye, GitBranch, FlaskConical, BookOpen, MapPin, Phone, GraduationCap } from "lucide-react"

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const highlights = [
    {
      title: "Machine Learning",
      description:
        "Building end-to-end ML pipelines — from EDA and feature engineering to model training, evaluation, and deployment.",
      icon: <Brain size={28} strokeWidth={1.5} className="text-primary" />,
    },
    {
      title: "Deep Learning",
      description:
        "Designing CNNs, RNNs, and Autoencoders for tasks such as anomaly detection, image classification, and sequence modeling.",
      icon: <FlaskConical size={28} strokeWidth={1.5} className="text-primary" />,
    },
    {
      title: "Computer Vision",
      description:
        "Real-time vision systems using YOLOv8, MobileFaceNet, FaceNet, ArcFace, and ResNet — deployed on edge devices like Raspberry Pi with Hailo NPU.",
      icon: <Eye size={28} strokeWidth={1.5} className="text-primary" />,
    },
    {
      title: "Graph Neural Networks",
      description:
        "Temporal GNN-based fraud detection representing financial transactions as dynamic graphs for network-level risk analysis.",
      icon: <GitBranch size={28} strokeWidth={1.5} className="text-primary" />,
    },
    {
      title: "RLHF",
      description:
        "Exploring Reinforcement Learning from Human Feedback — the core technique behind aligning large language models with human preferences and intent.",
      icon: <BookOpen size={28} strokeWidth={1.5} className="text-primary" />,
    },
    {
      title: "Data Analytics & Viz",
      description:
        "Transforming raw data into actionable insights using Tableau, Power BI, SQL, and probabilistic time-series models.",
      icon: <BarChart2 size={28} strokeWidth={1.5} className="text-primary" />,
    },
  ]

  const quickInfo = [
    {
      label: "Location",
      value: "Kolkata",
      link: "https://goo.gl/maps/rn8F8K7o2x2LyMMn6",
      colorClass: "text-foreground",
      icon: <MapPin size={24} strokeWidth={1.5} />,
    },
    {
      label: "Phone",
      value: "+91 6290277566",
      link: "tel:+916290277566",
      colorClass: "text-green-600 dark:text-green-400",
      icon: <Phone size={24} strokeWidth={1.5} />,
    },
    {
      label: "Degree",
      value: "M.Sc. Data Science & AI",
      colorClass: "text-foreground",
      icon: <GraduationCap size={24} strokeWidth={1.5} />,
    },
  ]

  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="hidden sm:block absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />
        <div className="hidden sm:block absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-50" />
        <div className="hidden sm:block absolute top-1/2 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              About{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Me
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
          </motion.div>

          <motion.div variants={itemVariants} className="mb-16 max-w-3xl">
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              I'm a dedicated{" "}
              <span className="font-semibold text-foreground">Data Science & AI enthusiast</span> pursuing
              my M.Sc. at Ramakrishna Mission Residential College (Autonomous), Narendrapur under the
              University of Calcutta. With a strong foundation in Mathematics and Statistics, I focus on
              building intelligent systems that solve real-world problems.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Currently interning as a{" "}
              <span className="font-semibold text-foreground">AI Intern</span> at
              Conglomerate Business Solutions Pvt. Ltd., Kolkata, where I have worked on edge-deployed
              computer vision systems, LSTM-based anomaly detection on live energy emission report and real-time
              ANPR pipelines on IP Camera.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Beyond applied projects, I am actively engaged in research at the intersection of{" "}
              <span className="font-semibold text-foreground">
                multimodal learning, graph neural networks, and time-series forecasting
              </span>
              . I believe in building systems that are not just accurate, but more interpretable and easy deployable.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-foreground">Core Expertise</h3>
            <HoverEffect items={highlights} />
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-8 text-foreground">Quick Info</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl">
              {quickInfo.map((item, idx) => {
                const isExternal = item.link?.startsWith("http")
                return (
                  <motion.div
                    key={idx}
                    className="p-4 bg-card rounded-lg border border-border hover:border-primary transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-primary mb-2">{item.icon}</div>
                    <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
                    {item.link ? (
                      <a
                        href={item.link}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noopener noreferrer" : undefined}
                        className={`font-semibold ${item.colorClass} hover:underline text-sm break-all`}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className={`font-semibold ${item.colorClass} text-sm`}>{item.value}</p>
                    )}
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}