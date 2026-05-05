import React from 'react'

export function About() {
  return (
    <section id="about" className="border-b border-border">
      <div className="container mx-auto max-w-4xl px-4 py-20 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">About</h2>
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            I&apos;m a motivated Data Science student and Full Stack Developer passionate about building intelligent applications at the intersection of AI/ML and web development. Currently pursuing my B.Tech in Artificial Intelligence and Data Science at Kongu Engineering College with a CGPA of 9.03.
          </p>
          <p>
            With hands-on experience in full stack development using React, Node.js, and MongoDB, combined with expertise in machine learning and RAG systems, I&apos;ve built projects ranging from real-time collaborative applications to AI-powered policy management systems. I&apos;m currently interning at Cube AI Solutions, developing intelligent AI applications using LLMs, SLMs, and Retrieval-Augmented Generation techniques.
          </p>
          <p>
            My interests span Full Stack Development, Machine Learning, Deep Learning, and RAG Systems. I believe in writing clean, maintainable code and stay current with emerging technologies. When not coding, you&apos;ll find me exploring new frameworks, solving competitive programming challenges on LeetCode, or learning about the latest in AI and cloud computing.
          </p>
        </div>
      </div>
    </section>
  )
}
