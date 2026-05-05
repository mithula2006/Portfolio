import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Github, ExternalLink } from 'lucide-react'

export function Projects() {
  const projects = [
    {
      title: 'Air Quality Prediction using Machine Learning',
      description: 'Developed a machine learning model to analyze air quality data, perform preprocessing, and predict pollution levels using feature engineering techniques. Built comprehensive data pipeline with model evaluation and performance metrics.',
      skills: ['Python', 'Pandas', 'Scikit-learn', 'Jupyter Notebook'],
      links: { github: '#', demo: '#' },
      year: '2024',
    },
    {
      title: 'AI-Based Policy Rule Retrieval & Management System',
      description: 'AI-powered policy rule management system enabling intelligent search, rule evaluation, and semantic query processing. Designed backend APIs and integrated LLM-based retrieval with efficient database handling for accurate policy matching.',
      skills: ['LLM', 'MCP', 'PostgreSQL', 'RAG'],
      links: { github: '#', demo: '#' },
      year: '2025',
    },
    {
      title: 'Real Time Collaborative Whiteboard App',
      description: 'Multiple users draw, edit and interact simultaneously. Implemented backend APIs and managed secure real-time communication using WebSockets for instant synchronization across connected clients.',
      skills: ['React.js', 'Node.js', 'WebSockets', 'MongoDB'],
      links: { github: '#', demo: '#' },
      year: '2025',
    },
    {
      title: 'Calorie Estimator from Food Images',
      description: 'Built a deep learning model to estimate calorie content from food images using CNN-based architecture. Performed dataset cleaning, model training, and evaluation to achieve accurate image classification results.',
      skills: ['Python', 'TensorFlow', 'CNN', 'Jupyter Notebook'],
      links: { github: '#', demo: '#' },
      year: '2024',
    },
  ]

  return (
    <section id="projects" className="border-b border-border">
      <div className="container mx-auto max-w-4xl px-4 py-20 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Projects</h2>
        <div className="grid gap-6">
          {projects.map((project, idx) => (
            <Card key={idx} className="border-border bg-card hover:border-accent/50 transition">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">{project.title}</CardTitle>
                <CardDescription className="text-base text-muted-foreground">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-muted text-foreground">
                      {skill}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.links.github}
                    className="inline-flex items-center gap-2 text-accent hover:opacity-80 transition text-sm"
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </a>
                  <a
                    href={project.links.demo}
                    className="inline-flex items-center gap-2 text-accent hover:opacity-80 transition text-sm"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Demo
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
