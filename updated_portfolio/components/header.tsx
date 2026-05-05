import React from 'react'
import Link from 'next/link'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 max-w-4xl items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center">
            <span className="text-sm font-bold text-foreground">MS</span>
          </div>
          <span className="text-lg font-semibold text-foreground">Mithula S I</span>
        </div>
        
        <div className="hidden gap-8 md:flex">
          <a href="#about" className="text-sm text-muted-foreground transition hover:text-foreground">About</a>
          <a href="#experience" className="text-sm text-muted-foreground transition hover:text-foreground">Experience</a>
          <a href="#projects" className="text-sm text-muted-foreground transition hover:text-foreground">Projects</a>
          <a href="#skills" className="text-sm text-muted-foreground transition hover:text-foreground">Skills</a>
          <a href="#contact" className="text-sm text-muted-foreground transition hover:text-foreground">Contact</a>
        </div>
      </nav>
    </header>
  )
}
