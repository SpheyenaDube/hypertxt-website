
import React from 'react';
import { Users, Target, Award } from 'lucide-react';
import { team } from '../data/mock';
import { Card, CardContent, CardHeader } from './ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-2 bg-blue-600/10 dark:bg-blue-600/20 rounded-full">
            <span className="text-sm font-medium text-blue-600">About Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Who We Are
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A passionate team dedicated to creating exceptional web experiences
          </p>
        </div>

        {/* Company Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center border-border hover:border-blue-600/50 transition-all duration-300">
            <CardHeader>
              <div className="w-16 h-16 bg-blue-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Our Mission</h3>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To empower businesses with cutting-edge web solutions that drive growth and success.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-border hover:border-blue-600/50 transition-all duration-300">
            <CardHeader>
              <div className="w-16 h-16 bg-blue-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Our Team</h3>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Expert developers, designers, and project managers working together seamlessly.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-border hover:border-blue-600/50 transition-all duration-300">
            <CardHeader>
              <div className="w-16 h-16 bg-blue-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Our Values</h3>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Quality, transparency, and client satisfaction are at the core of everything we do.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Team Section */}
        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-center text-foreground">Meet the Team</h3>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member) => (
              <Card
                key={member.id}
                className="group hover:shadow-lg transition-all duration-300 border-border hover:border-blue-600/50"
              >
                <CardHeader>
                  {/* Avatar Placeholder */}
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-gray-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-center text-foreground group-hover:text-blue-600 transition-colors">
                    {member.name}
                  </h4>
                  <p className="text-sm text-center text-blue-600 font-medium">
                    {member.role}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-muted-foreground text-sm">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Company Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 p-8 bg-background rounded-2xl border border-border">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">5+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">40+</div>
            <div className="text-sm text-muted-foreground">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;