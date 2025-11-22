import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Camera, Eye, TrendingUp, Shield, Users } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";
import reportIllustration from "@/assets/report-illustration.png";
import mapIllustration from "@/assets/map-illustration.png";
import IssueMap from "@/components/IssueMap";
import IssueReportForm from "@/components/IssueReportForm";
import IssuesFeed from "@/components/IssuesFeed";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url(${heroBanner})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative z-10 container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl mx-auto text-center text-white">
            <Badge className="mb-4 bg-primary text-primary-foreground">Smart Cities Mission</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Building Smarter Cities, Together
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200">
              Report urban issues instantly. AI-powered detection. Real-time resolution tracking. 
              Empowering citizens and civic authorities to create cleaner, safer cities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Camera className="mr-2 h-5 w-5" />
                Report an Issue
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20">
                <MapPin className="mr-2 h-5 w-5" />
                View City Map
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How CivicLens Works</h2>
            <p className="text-muted-foreground text-lg">Simple, fast, and transparent civic engagement</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Camera className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Capture & Report</h3>
              <p className="text-muted-foreground">
                Snap a photo of any urban issue. Our AI automatically detects and classifies the problem.
              </p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center">
                <MapPin className="h-10 w-10 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Auto-Route</h3>
              <p className="text-muted-foreground">
                GPS tags location. Issue instantly routed to the right department for action.
              </p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                <Eye className="h-10 w-10 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Track & Resolve</h3>
              <p className="text-muted-foreground">
                Monitor progress in real-time. Get notified when your issue is resolved.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Live Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Live City Issues Map</h2>
            <p className="text-muted-foreground text-lg">Real-time visualization of reported problems across the city</p>
          </div>
          <IssueMap />
        </div>
      </section>

      {/* Issues Feed */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Reports</h2>
            <p className="text-muted-foreground text-lg">Community-reported issues from across the city</p>
          </div>
          <IssuesFeed />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">2,547</div>
              <p className="text-muted-foreground">Issues Reported</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">1,823</div>
              <p className="text-muted-foreground">Issues Resolved</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">8,432</div>
              <p className="text-muted-foreground">Active Citizens</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">72%</div>
              <p className="text-muted-foreground">Resolution Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Make Your City Better?
          </h2>
          <p className="text-lg mb-8 text-white/90">
            Join thousands of citizens creating cleaner, safer urban spaces
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
            Get Started Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 CivicLens. Supporting India's Smart City Mission.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
