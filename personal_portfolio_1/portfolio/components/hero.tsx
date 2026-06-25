"use client"

import { ArrowRight, Download} from "lucide-react"
import { motion } from "framer-motion"
import { SilkBackground } from "./aceternity/silk-background"

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  return (
    <SilkBackground>
      <section
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 relative overflow-hidden"
        id="main-content"
      >
        <div className="absolute inset-0 -z-10">
          <div className="hidden sm:block absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" aria-hidden="true" />
          <div
            className="hidden sm:block absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
            aria-hidden="true"
          />
        </div>

        <motion.div
          className="max-w-4xl mx-auto text-center relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          

          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight"
          >
            <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
              Basabraj Biswas
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl sm:text-2xl text-muted-foreground mb-12 text-balance font-semibold"
          >
            Aspiring Data Scientist & AI Enthusiast
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <motion.a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-medium hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Projects
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </motion.a>
            <motion.a
              href="https://raw.githubusercontent.com/basabraj/Portfolio/main/personal_portfolio_1/Basab_CV.pdf"
              download="Basabraj_Biswas_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-primary/50 rounded-lg font-medium hover:bg-primary/10 hover:border-primary transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
              <Download className="w-4 h-4" aria-hidden="true" />
            </motion.a>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-3 gap-3 sm:gap-8 max-w-2xl mx-auto">
            {[
              { value: "7.60", label: "M.Sc. CGPA" },
              { value: "4+", label: "Projects" },
              { value: "1+", label: "Internship" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                className="p-3 sm:p-4 rounded-lg bg-card border border-border/50 hover:border-primary transition-colors"
              >
                <motion.div
                  className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent whitespace-nowrap"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15, ease: "easeOut" }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </SilkBackground>
  )
}