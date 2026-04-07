import React from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../data/mock';
import { Card, CardContent, CardHeader } from './ui/card';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 px-6">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-2 bg-blue-600/10 dark:bg-blue-600/20 rounded-full">
            <span className="text-sm font-medium text-blue-600">Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="group hover:shadow-lg transition-all duration-300 border-border hover:border-blue-600/50 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Quote className="w-6 h-6 text-white" />
                </div>
              </div>

              <CardHeader className="pt-12">
                {/* Rating Stars */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <Star key={index} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Testimonial Content */}
                <p className="text-muted-foreground italic">
                  "{testimonial.content}"
                </p>

                {/* Client Info */}
                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.position}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600/10 to-gray-600/10 dark:from-blue-600/20 dark:to-gray-600/20 p-8 rounded-2xl max-w-3xl mx-auto border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's work together to create something amazing for your business
            </p>
            <button
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;