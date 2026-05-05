import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function Education() {
  return (
    <section className="border-b border-border">
      <div className="container mx-auto max-w-4xl px-4 py-20 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Education</h2>
        <div className="space-y-6">
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">B.Tech in Artificial Intelligence and Data Science</CardTitle>
              <CardDescription className="text-base text-muted-foreground">Kongu Engineering College</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Duration</p>
                  <p className="text-foreground">2023 – 2027</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">CGPA</p>
                  <p className="text-foreground">9.03 (Till 5th semester)</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">HSC</CardTitle>
              <CardDescription className="text-base text-muted-foreground">Sri Sai Matric. Hr. Sec. School</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Year</p>
                  <p className="text-foreground">2022 – 2023</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Percentage</p>
                  <p className="text-foreground">90.17%</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
