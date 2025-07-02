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
      <section className="relative min-h-[80vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBanner})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero/80"></div>
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Genuine Ceylon Sapphires
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
            Direct from the Source
          </p>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-12 max-w-2xl mx-auto">
            Explore a curated collection of natural Ceylon Sapphires from Sri Lanka
          </p>
          <Link to="/gemstones">
            <Button size="lg" variant="gold" className="text-lg px-8 py-4">
              Explore Our Gemstones
            </Button>
          </Link>
        </div>
      </section>

      {/* Why Choose Gemzy Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why Choose Gemzy
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your trusted partner for authentic Ceylon sapphires with uncompromising quality
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-elegant transition-all duration-300 border-0 bg-background">
                <CardContent className="pt-6">
                  <div className="text-primary mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Exquisite Collection
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the beauty and brilliance of Ceylon sapphires in every color
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {gemstones.map((gem, index) => (
              <Card key={index} className="group overflow-hidden border-0 shadow-elegant hover:shadow-xl transition-all duration-300">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={gem.image} 
                    alt={gem.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {gem.name}
                  </h3>
                  <p className="text-muted-foreground">
                    {gem.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/gemstones">
              <Button variant="hero" size="lg" className="px-8">
                View All Gemstones
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Find Your Perfect Sapphire?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your requirements and discover the perfect Ceylon sapphire for you.
          </p>
          <Link to="/contact">
            <Button variant="gold" size="lg" className="px-8">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Home;