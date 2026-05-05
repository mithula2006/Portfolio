import React from 'react'
import { Badge } from '@/components/ui/badge'

export function Skills() {
  const skillCategories = [
    {
      category: 'Languages',
      skills: ['C', 'Java', 'Python'],
    },
    {
      category: 'Frontend',
      skills: ['HTML', 'CSS', 'React'],
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express.js'],
    },
    {
      category: 'Database',
      skills: ['MySQL', 'MongoDB'],
    },
    {
      category: 'AI/ML & Deep Learning',
      skills: ['Machine Learning', 'Deep Learning', 'LLMs', 'RAG Systems', 'Python', 'TensorFlow'],
    },
    {
      category: 'Additional Skills',
      skills: ['Problem Solving', 'Team Collaboration'],
    },
  ]

  return (
    <section id="skills" className="border-b border-border">
      <div className="container mx-auto max-w-4xl px-4 py-20 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Skills</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">{cat.category}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <Badge key={skill} className="bg-accent text-accent-foreground hover:opacity-90 transition">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
