import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Award, Trophy } from 'lucide-react'

export function Achievements() {
  const achievements = [
    {
      icon: Trophy,
      title: 'Winner in Paper Presentation',
      description: 'BIT PRAKRUTHI - 2023 for "Air Quality Prediction Using Machine Learning"',
    },
    {
      icon: Award,
      title: 'Academic Excellence Award',
      description: 'Awarded in 2024 & 2026 for exceptional academic performance',
    },
    {
      icon: Trophy,
      title: 'Winner in Ideathon 2026',
      description: 'Cloud Spark - First place in competitive ideathon competition',
    },
    {
      icon: Award,
      title: 'Deloitte - Data Analytics Job Simulation',
      description: 'Completed comprehensive data analytics certification',
    },
    {
      icon: Trophy,
      title: 'Oracle AI Foundations Associate',
      description: 'Certified in AI fundamentals and oracle technologies',
    },
    {
      icon: Award,
      title: 'MongoDB Associate Developer',
      description: 'Certified in MongoDB database development and design',
    },
    {
      icon: Trophy,
      title: 'Hackathon Participation',
      description: 'Hacknovate&apos;26 (24 hrs AI/ML), Madathon (8 hrs), Byts India Hackathon (24 hrs)',
    },
    {
      icon: Award,
      title: 'Project Expo Participation',
      description: 'Participated in Project Expo with "Blood Donation Management System"',
    },
  ]

  return (
    <section className="border-b border-border">
      <div className="container mx-auto max-w-4xl px-4 py-20 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Achievements & Certifications</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {achievements.map((achievement, idx) => {
            const Icon = achievement.icon
            return (
              <Card key={idx} className="border-border bg-card hover:border-accent/50 transition">
                <CardContent className="pt-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-accent/10 p-2">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-foreground">{achievement.title}</p>
                      <p className="text-sm text-muted-foreground mt-1">{achievement.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
