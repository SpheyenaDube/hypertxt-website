
import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { contactInfo } from '../data/mock';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-2 bg-blue-600/10 dark:bg-blue-600/20 rounded-full">
            <span className="text-sm font-medium text-blue-600">Contact Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear from you
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Email Card */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-blue-600/50">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-600/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-600/20 transition-colors">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-foreground">Email Us</CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  {contactInfo.email}
                </a>
                <p className="text-sm text-muted-foreground mt-2">
                  We'll respond within 24 hours
                </p>
              </CardContent>
            </Card>

            {/* Phone Card */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-blue-600/50">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-600/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-600/20 transition-colors">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-foreground">Call Us</CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  {contactInfo.phone}
                </a>
                <p className="text-sm text-muted-foreground mt-2">
                  Monday to Friday, 9 AM - 6 PM
                </p>
              </CardContent>
            </Card>

            {/* Address Card */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-blue-600/50">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-600/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-600/20 transition-colors">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-foreground">Visit Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground">
                  {contactInfo.address}
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Drop by during business hours
                </p>
              </CardContent>
            </Card>

            {/* Business Hours Card */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-blue-600/50">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-600/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-600/20 transition-colors">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-foreground">Business Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground">
                  {contactInfo.hours}
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Weekend appointments available
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Additional CTA */}
          <div className="mt-12 text-center bg-gradient-to-r from-blue-600/10 to-gray-600/10 dark:from-blue-600/20 dark:to-gray-600/20 p-8 rounded-2xl border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Ready to Start Your Project?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Whether you need a simple static website or a complex web application,
              we're here to help bring your vision to life. Contact us today to discuss your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`mailto:${contactInfo.email}`}
                className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105"
              >
                <Mail className="mr-2 h-5 w-5" />
                Send Email
              </a>
              <a
                href={`tel:${contactInfo.phone}`}
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold rounded-full transition-all duration-300 hover:scale-105"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;