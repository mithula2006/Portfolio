import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export function Experience() {
  const experiences = [
    {
      title: 'AI/ML Intern',
      company: 'Cube AI Solutions',
      period: '2026',
      description: 'Developing intelligent AI applications using LLMs, SLMs, and Retrieval-Augmented Generation (RAG) techniques. Working on cutting-edge AI solutions to solve real-world problems with advanced language models.',
      skills: ['LLMs', 'RAG', 'Python', 'AI Applications'],
    },
  ]

  return (
    <section id="experience" className="border-b border-border">
      <div className="container mx-auto max-w-4xl px-4 py-20 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <Card key={idx} className="border-border bg-card hover:border-accent/50 transition">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl text-foreground">{exp.title}</CardTitle>
                    <CardDescription className="text-base text-muted-foreground mt-1">{exp.company}</CardDescription>
                  </div>
                  <span className="text-sm text-muted-foreground whitespace-nowrap">{exp.period}</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-muted text-foreground">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
