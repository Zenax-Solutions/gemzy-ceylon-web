import Layout from "@/components/Layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Globe,
  Star,
  Shield,
  Users,
  Gem,
  CheckCircle,
  Heart,
  Award,
  Eye
} from "lucide-react";

// Import new images
import miningSite from "@/assets/mining-site.jpg";
import riverMining from "@/assets/river-mining.jpg";
import minePit from "@/assets/mine-pit.jpg";

const Why = () => {
  const reasons = [
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Direct from the Source",
      subtitle: "Ethical sourcing, no middlemen",
      description: "We work directly with Sri Lankan mines and local artisans, ensuring ethical sourcing practices while eliminating middlemen. This direct relationship allows us to offer competitive prices while supporting local communities.",
      benefits: [
        "Competitive pricing without middleman markup",
        "Direct relationships with mine owners",
        "Supporting local Sri Lankan communities",
        "Complete transparency in sourcing"
      ]
    },
    {
      icon: <Star className="w-12 h-12" />,
      title: "Expert Curation",
      subtitle: "Handpicked, top-grade stones",
      description: "Every gemstone in our collection is personally selected by our founder, B.C.H. Peiris, who brings years of expertise and a trained eye for exceptional quality.",
      benefits: [
        "Personal selection by certified gemologist",
        "Only top 5% of available stones chosen",
        "Rigorous quality standards",
        "Expert knowledge of Ceylon sapphire characteristics"
      ]
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Licensed & Trusted",
      subtitle: "Certified by NGJA",
      description: "As a licensed dealer by the National Gem and Jewellery Authority (NGJA) of Sri Lanka, we operate under strict regulations ensuring authenticity and quality.",
      benefits: [
        "NGJA licensed dealer status",
        "Government-backed authenticity guarantee",
        "Compliance with international standards",
        "Legal protection for international buyers"
      ]
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Personalized Service",
      subtitle: "Tailored sourcing for international clients",
      description: "We understand that each client has unique requirements. Our personalized approach ensures you find the perfect gemstone for your specific needs and budget.",
      benefits: [
        "One-on-one consultation service",
        "Custom sourcing based on specifications",
        "International shipping expertise",
        "Ongoing support and guidance"
      ]
    },
    {
      icon: <Gem className="w-12 h-12" />,
      title: "Full Spectrum Sourcing",
      subtitle: "Access to every Sri Lankan gemstone",
      description: "Our extensive network across Sri Lanka gives us access to the complete spectrum of Ceylon gemstones, from common varieties to the rarest finds.",
      benefits: [
        "Access to all major mining regions",
        "Rare and unique specimens available",
        "Custom size and cut options",
        "Exclusive access to premium stones"
      ]
    }
  ];

  const commitments = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Transparent Process",
      description: "Complete transparency in sourcing, pricing, and certification processes"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Client-Focused Service",
      description: "Every decision we make is centered around providing the best experience for our clients"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality Guarantee",
      description: "We stand behind every gemstone with our quality guarantee and authentication"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
            Why Choose Gemzy
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Discover why discerning clients worldwide trust Gemzy for their Ceylon sapphire needs
          </p>
        </div>
      </section>

      {/* Main Reasons */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {reasons.map((reason, index) => (
              <div key={index} className="max-w-6xl mx-auto">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}>
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="flex items-center mb-6">
                      <div className="text-primary mr-4">
                        {reason.icon}
                      </div>
                      <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                          {reason.title}
                        </h2>
                        <p className="text-lg text-accent font-medium">
                          {reason.subtitle}
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                      {reason.description}
                    </p>
                    
                    <div className="space-y-3">
                      {reason.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                          <span className="text-muted-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                    <Card className="p-8 shadow-elegant bg-gradient-to-br from-primary/5 to-accent/5 border-0">
                      <CardContent className="pt-0">
                        <div className="text-center">
                          <div className="text-primary mb-6">
                            {reason.icon}
                          </div>
                          <h3 className="text-2xl font-bold text-foreground mb-4">
                            {reason.title}
                          </h3>
                          <p className="text-muted-foreground">
                            {reason.subtitle}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing Process Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Sourcing Process
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We believe in transparency and ethical practices from mine to market.
              Witness the journey of our Ceylon sapphires.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="shadow-elegant overflow-hidden">
              <img src={miningSite} alt="Mining Site" className="w-full h-64 object-cover" />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">Traditional Mining</h3>
                <p className="text-muted-foreground">
                  Our gems are sourced from traditional, small-scale mines in Sri Lanka, ensuring minimal environmental impact.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-elegant overflow-hidden">
              <img src={riverMining} alt="River Mining" className="w-full h-64 object-cover" />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">River Bed Extraction</h3>
                <p className="text-muted-foreground">
                  Miners carefully extract raw gemstones from river beds using age-old, sustainable methods.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-elegant overflow-hidden">
              <img src={minePit} alt="Mine Pit" className="w-full h-64 object-cover" />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">Ethical Practices</h3>
                <p className="text-muted-foreground">
                  We ensure fair wages and safe working conditions for all miners, adhering to strict ethical guidelines.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ethical Commitment Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Ethical Commitment
            </h2>
            <p className="text-xl text-muted-foreground mb-16 leading-relaxed">
              At Gemzy, we believe that beautiful gemstones should come with a beautiful story.
              Our commitment to ethical practices ensures that every purchase supports sustainable development.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {commitments.map((commitment, index) => (
                <Card key={index} className="p-8 text-center shadow-elegant hover:shadow-xl transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="text-primary mb-6 flex justify-center">
                      {commitment.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      {commitment.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {commitment.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Experience the Gemzy Difference
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join the growing number of satisfied clients who trust Gemzy for their Ceylon sapphire needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="gold" size="lg" className="px-8">
                Start Your Journey
              </Button>
            </Link>
            <Link to="/gemstones">
              <Button variant="outline" size="lg" className="px-8 bg-background/20 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                View Our Collection
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Why;