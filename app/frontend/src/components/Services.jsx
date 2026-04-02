
import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { services } from '../data/mock';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const Services = () => {
  return (
    <section id="services" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-2 bg-blue-600/10 dark:bg-blue-600/20 rounded-full">
            <span className="text-sm font-medium text-blue-600">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            What We Offer
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive web development solutions for businesses of all sizes
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Card
              key={service.id}
              className="group hover:shadow-lg transition-all duration-300 border-border hover:border-blue-600/50"
            >
              <CardHeader>
                <CardTitle className="text-2xl text-foreground group-hover:text-blue-600 transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-base text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Not sure which service fits your needs?
          </p>
          <button
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105"
          >
            Let's Discuss Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;