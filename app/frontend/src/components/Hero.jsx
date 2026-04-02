
import React from 'react';
import { ArrowRight, Code, Zap } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPortfolio = () => {
    const element = document.querySelector('#portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-16 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-blue-600/10 dark:bg-blue-600/20 px-4 py-2 rounded-full">
              <Zap className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-600">Professional Web Development</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              Build Your Digital
              <span className="block text-blue-600">Presence</span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
              Transform your business with stunning, high-performance websites.
              We create both static websites and dynamic web applications tailored to your needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="btn-primary bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8"
                onClick={scrollToContact}
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="btn-secondary rounded-full px-8 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                onClick={scrollToPortfolio}
              >
                View Our Work
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <div className="text-3xl font-bold text-blue-600">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">100%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">24/7</div>
                <div className="text-sm text-muted-foreground">Support Available</div>
              </div>
            </div>
          </div>

          {/* Right Content - Visual Element */}
          <div className="relative hidden md:block">
            <div className="relative z-10">
              <div className="bg-gradient-to-br from-blue-600/20 to-gray-600/20 dark:from-blue-600/30 dark:to-gray-600/30 rounded-2xl p-8 backdrop-blur-sm border border-border">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 bg-background/80 p-4 rounded-lg">
                    <Code className="w-8 h-8 text-blue-600" />
                    <div>
                      <div className="font-semibold text-foreground">Modern Technology</div>
                      <div className="text-sm text-muted-foreground">React, Node.js, MongoDB</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 bg-background/80 p-4 rounded-lg">
                    <Zap className="w-8 h-8 text-blue-600" />
                    <div>
                      <div className="font-semibold text-foreground">Lightning Fast</div>
                      <div className="text-sm text-muted-foreground">Optimized Performance</div>
                    </div>
                  </div>
                  <div className="bg-background/80 p-6 rounded-lg">
                    <div className="text-sm text-muted-foreground mb-2">Code Quality</div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs">Performance</span>
                        <span className="text-xs font-semibold text-blue-600">98%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '98%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gray-600/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;