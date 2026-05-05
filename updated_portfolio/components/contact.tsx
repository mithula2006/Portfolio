import React from 'react'
import { Mail, Linkedin, Github } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Contact() {
  return (
    <section id="contact" className="bg-card border-t border-border">
      <div className="container mx-auto max-w-4xl px-4 py-20 md:px-6">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Let&apos;s Connect</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I&apos;m always interested in hearing about new projects and opportunities. Feel free to reach out!
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="mailto:mithulasrajan@gmail.com">
              <Button className="bg-accent text-accent-foreground hover:opacity-90 gap-2">
                <Mail className="h-4 w-4" />
                Email Me
              </Button>
            </a>
            <a href="https://linkedin.com/in/mithula" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-border gap-2">
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </Button>
            </a>
            <a href="https://github.com/Mithula" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-border gap-2">
                <Github className="h-4 w-4" />
                GitHub
              </Button>
            </a>
          </div>

          <div className="text-sm text-muted-foreground pt-4">
            <p>📱 +91 7598758433</p>
          </div>

          <div className="text-sm text-muted-foreground pt-8 border-t border-border">
            <p>© 2025 Mithula S I. All rights reserved.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
