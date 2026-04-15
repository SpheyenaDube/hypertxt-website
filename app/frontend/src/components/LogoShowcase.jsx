import {
  LogoVariation1,
  LogoVariation2,
  LogoVariation3,
  LogoVariation4,
  LogoVariation5,
  LogoVariation6,
  LogoVariation7,
  LogoVariation8
} from './LogoVariations';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const LogoShowcase = () => {
  const logos = [
    { component: LogoVariation1, name: 'Minimalist Split', description: 'Clean split with accent on \"txt\"' },
    { component: LogoVariation2, name: 'Code Brackets', description: 'HTML-inspired with <> brackets' },
    { component: LogoVariation3, name: 'Forward Slash', description: 'Path separator style' },
    { component: LogoVariation4, name: 'Monospace Tech', description: 'Developer-focused monospace font' },
    { component: LogoVariation5, name: 'Dot Separator', description: 'Modern with centered dot' },
    { component: LogoVariation6, name: 'Geometric Bar', description: 'Vertical accent bar' },
    { component: LogoVariation7, name: 'Boxed Accent', description: 'Highlighted \"txt\" box' },
    { component: LogoVariation8, name: 'All Caps Wide', description: 'Bold uppercase with spacing' }
  ];

  return (
    <div className="min-h-screen bg-background py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            hypertxt Logo Concepts
          </h1>
          <p className="text-xl text-muted-foreground">
            Choose your favorite logo design
          </p>
        </div>

        {/* Light Mode Logos */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-8">Light Mode</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {logos.map((logo, index) => {
              const LogoComponent = logo.component;
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 border-border">
                  <CardHeader>
                    <CardTitle className="text-lg">{logo.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="h-24 flex items-center justify-center bg-muted/30 rounded-lg">
                      <LogoComponent />
                    </div>
                    <p className="text-sm text-muted-foreground text-center">
                      {logo.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Dark Mode Logos */}
        <div className="dark">
          <h2 className="text-2xl font-bold text-foreground mb-8">Dark Mode</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {logos.map((logo, index) => {
              const LogoComponent = logo.component;
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 border-border bg-card">
                  <CardHeader>
                    <CardTitle className="text-lg text-card-foreground">{logo.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="h-24 flex items-center justify-center bg-muted/30 rounded-lg">
                      <LogoComponent />
                    </div>
                    <p className="text-sm text-muted-foreground text-center">
                      {logo.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Navigation Comparison */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            How They Look in Navigation
          </h2>
          
          {/* Light Nav Example */}
          <div className="mb-8">
            <p className="text-sm text-muted-foreground mb-4">Light Mode Navigation</p>
            <div className="bg-background border border-border rounded-lg p-4">
              <div className="flex items-center justify-between">
                <LogoVariation1 />
                <div className="flex items-center space-x-6">
                  <a href="#" className="text-foreground">Home</a>
                  <a href="#" className="text-foreground">Services</a>
                  <a href="#" className="text-foreground">Contact</a>
                </div>
              </div>
            </div>
          </div>

          {/* Dark Nav Example */}
          <div className="dark">
            <p className="text-sm text-muted-foreground mb-4">Dark Mode Navigation</p>
            <div className="bg-background border border-border rounded-lg p-4">
              <div className="flex items-center justify-between">
                <LogoVariation1 />
                <div className="flex items-center space-x-6">
                  <a href="#" className="text-foreground">Home</a>
                  <a href="#" className="text-foreground">Services</a>
                  <a href="#" className="text-foreground">Contact</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoShowcase;
