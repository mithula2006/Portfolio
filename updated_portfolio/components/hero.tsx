import React from 'react'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'

export function Hero() {
  return (
    <section className="border-b border-border">
      <div className="container mx-auto max-w-4xl px-4 py-20 md:py-32 md:px-6">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight text-balance">
              Full Stack Developer & AI/ML Enthusiast
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Motivated Data Science student seeking a Full Stack Developer role. I build responsive applications and leverage data insights to solve real-world problems. Currently interning at Cube AI Solutions, developing intelligent AI applications with LLMs and RAG systems.
            </p>
          </div>

          <div className="flex gap-4 pt-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:opacity-90 transition"
            >
              Get in touch
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="https://github.com/Mithula"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-12 w-12 rounded-lg border border-border hover:bg-muted transition"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/mithula"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-12 w-12 rounded-lg border border-border hover:bg-muted transition"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:mithulasrajan@gmail.com"
              className="inline-flex items-center justify-center h-12 w-12 rounded-lg border border-border hover:bg-muted transition"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
