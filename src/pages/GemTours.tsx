import Layout from "@/components/Layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Plane, Hotel, Gem, Mountain, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const GemTours = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
            Gem Tours in Sri Lanka
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Embark on an unforgettable journey through Sri Lanka's gem-rich landscapes.
          </p>
        </div>
      </section>

      {/* Tour Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">What We Offer</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Our bespoke gem tours are designed to immerse you in the fascinating world of Ceylon sapphires.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center p-8 shadow-elegant">
              <CardContent className="pt-6">
                <Plane className="w-12 h-12 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Fully Customizable Itineraries</h3>
                <p className="text-muted-foreground">
                  Tailor your tour to your interests, schedule, and budget for a truly personal experience.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-8 shadow-elegant">
              <CardContent className="pt-6">
                <Hotel className="w-12 h-12 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Luxury Accommodations</h3>
                <p className="text-muted-foreground">
                  Stay in hand-picked 4 and 5-star hotels, ensuring comfort and relaxation throughout your journey.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-8 shadow-elegant">
              <CardContent className="pt-6">
                <Gem className="w-12 h-12 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Exclusive Gem Market Tours</h3>
                <p className="text-muted-foreground">
                  Explore bustling gem markets with expert guides, discovering rare and exquisite gemstones.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-8 shadow-elegant">
              <CardContent className="pt-6">
                <Mountain className="w-12 h-12 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Traditional Gem Mining Experiences</h3>
                <p className="text-muted-foreground">
                  Witness age-old mining techniques and learn about the rich history of Sri Lankan gem extraction.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-8 shadow-elegant">
              <CardContent className="pt-6">
                <Car className="w-12 h-12 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Modern Gem Mining Insights</h3>
                <p className="text-muted-foreground">
                  Discover 21st-century Sri Lankan gem mining operations and their technological advancements.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">
            Ready to Plan Your Gem Adventure?
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed mb-8">
            Contact us today to design your personalized gem tour experience in Sri Lanka.
          </p>
         <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="gold" size="lg" className="px-8">
                Start Your Journey
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GemTours;