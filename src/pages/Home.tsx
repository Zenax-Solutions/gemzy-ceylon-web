import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { CheckCircle, Gem, Shield, Users, Globe, Star } from "lucide-react";
import Layout from "@/components/Layout/Layout";
import heroBanner from "@/assets/hero-banner.jpg";
import blueSapphire from "@/assets/blue-sapphire.jpg";
import yellowSapphire from "@/assets/yellow-sapphire.jpg";
import padparadscha from "@/assets/padparadscha.jpg";
import pinkSapphire from "@/assets/pink-sapphire.jpg";

const Home = () => {
  const features = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Direct from the Source",
      description: "Ethically sourced directly from Sri Lankan mines"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Expert Curation",
      description: "Hand-selected for exceptional quality and beauty"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Licensed & Trusted",
      description: "Certified by NGJA of Sri Lanka"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Personalized Service",
      description: "Tailored sourcing for international clients"
    },
    {
      icon: <Gem className="w-8 h-8" />,
      title: "Full Spectrum Sourcing",
      description: "Access to every type of Sri Lankan gemstone"
    }
  ];

  const gemstones = [
    {
      name: "Blue Sapphire",
      image: blueSapphire,
      description: "Premium Ceylon blue sapphires with exceptional clarity"
    },
    {
      name: "Yellow Sapphire",
      image: yellowSapphire,
      description: "Vibrant yellow sapphires with brilliant fire"
    },
    {
      name: "Padparadscha",
      image: padparadscha,
      description: "Rare sunset-colored sapphires, highly sought after"
    },
    {
      name: "Pink Sapphire",
      image: pinkSapphire,
      description: "Delicate pink sapphires with romantic appeal"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBanner})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero/85"></div>
        </div>
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-4 sm:mb-6 leading-tight font-playfair">
            Genuine Ceylon Sapphires
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-primary-foreground/95 mb-6 sm:mb-8 leading-relaxed font-medium">
            Direct from the Source
          </p>
          <p className="text-base sm:text-lg md:text-xl text-primary-foreground/85 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
            Explore a curated collection of natural Ceylon Sapphires from Sri Lanka
          </p>
          <Link to="/gemstones">
            <Button size="lg" variant="gold" className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 shadow-xl">
              Explore Our Gemstones
            </Button>
          </Link>
        </div>
      </section>

      {/* Why Choose Gemzy Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6 font-playfair">
              Why Choose Gemzy
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Your trusted partner for authentic Ceylon sapphires with uncompromising quality
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-6 sm:p-8 hover:shadow-elegant hover:scale-105 transition-all duration-300 border-0 bg-background">
                <CardContent className="pt-6">
                  <div className="text-primary mb-4 sm:mb-6 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-foreground font-playfair">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6 font-playfair">
              Our Exquisite Collection
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Discover the beauty and brilliance of Ceylon sapphires in every color
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {gemstones.map((gem, index) => (
              <Card key={index} className="group overflow-hidden border-0 shadow-elegant hover:shadow-xl hover:scale-105 transition-all duration-300">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={gem.image} 
                    alt={gem.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-foreground font-playfair">
                    {gem.name}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {gem.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Link to="/gemstones">
              <Button variant="hero" size="lg" className="px-6 sm:px-8 text-base sm:text-lg">
                View All Gemstones
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-4 sm:mb-6 font-playfair">
            Ready to Find Your Perfect Sapphire?
          </h2>
          <p className="text-lg sm:text-xl text-primary-foreground/95 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            Contact us today to discuss your requirements and discover the perfect Ceylon sapphire for you.
          </p>
          <Link to="/contact">
            <Button variant="gold" size="lg" className="px-6 sm:px-8 text-base sm:text-lg shadow-xl">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Home;