import React from 'react';
import { ExternalLink } from 'lucide-react';
import { projects } from '../data/mock';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 px-6">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-2 bg-blue-600/10 dark:bg-blue-600/20 rounded-full">
            <span className="text-sm font-medium text-blue-600">Our Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing our expertise in building exceptional web experiences
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-border"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 right-4">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                      <ExternalLink className="w-5 h-5 text-blue-600" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-2xl text-foreground group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-muted-foreground mt-1">
                      {project.category}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-blue-600/10 text-blue-600 hover:bg-blue-600/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Note about custom projects */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-muted p-6 rounded-lg max-w-2xl">
            <p className="text-foreground font-medium mb-2">
              Have a unique project in mind?
            </p>
            <p className="text-muted-foreground">
              These are just examples of our work. We specialize in creating custom solutions
              tailored to your specific business needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;