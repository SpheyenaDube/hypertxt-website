import React from 'react';
import { GitBranch, Link, X, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="text-2xl font-bold">
              <span className="text-foreground">hyper</span>
              <span className="text-blue-600">txt</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Building exceptional web experiences for businesses worldwide.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-muted hover:bg-blue-600/10 rounded-full flex items-center justify-center transition-colors group"
                aria-label="GitHub"
              >
                <GitBranch className="w-5 h-5 text-muted-foreground group-hover:text-blue-600" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-muted hover:bg-blue-600/10 rounded-full flex items-center justify-center transition-colors group"
                aria-label="LinkedIn"
              >
                <Link className="w-5 h-5 text-muted-foreground group-hover:text-blue-600" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-muted hover:bg-blue-600/10 rounded-full flex items-center justify-center transition-colors group"
                aria-label="Twitter"
              >
                <X className="w-5 h-5 text-muted-foreground group-hover:text-blue-600" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-muted hover:bg-blue-600/10 rounded-full flex items-center justify-center transition-colors group"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-muted-foreground group-hover:text-blue-600" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  onClick={(e) => scrollToSection(e, '#home')}
                  className="text-muted-foreground hover:text-blue-600 transition-colors text-sm"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => scrollToSection(e, '#services')}
                  className="text-muted-foreground hover:text-blue-600 transition-colors text-sm"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  onClick={(e) => scrollToSection(e, '#portfolio')}
                  className="text-muted-foreground hover:text-blue-600 transition-colors text-sm"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => scrollToSection(e, '#about')}
                  className="text-muted-foreground hover:text-blue-600 transition-colors text-sm"
                >
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground text-sm">Static Websites</li>
              <li className="text-muted-foreground text-sm">Dynamic Applications</li>
              <li className="text-muted-foreground text-sm">E-Commerce Solutions</li>
              <li className="text-muted-foreground text-sm">Custom Development</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground text-sm">hello@yourwebagency.com</li>
              <li className="text-muted-foreground text-sm">+1 (555) 123-4567</li>
              <li className="text-muted-foreground text-sm">123 Business Street</li>
              <li className="text-muted-foreground text-sm">City, State 12345</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} hypertxt. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-blue-600 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-blue-600 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-blue-600 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;