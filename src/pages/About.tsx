import Layout from "@/components/Layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Award, Target, Users, Gem } from "lucide-react";
import founder from "@/assets/founder.jpeg"; // Adjust the path as necessary
import rawSapphireHand from "@/assets/raw-sapphire-hand.jpg";
import gemCutting1 from "@/assets/gem-cutting-1.jpg";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
            About Gemzy
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Your premier destination for exquisite Ceylon Sapphires, founded with passion and expertise
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Gemzy is your premier destination for exquisite Ceylon Sapphires, founded by B.C.H. Peiris in 2019.
                We are a licensed dealer by the NGJA (National Gem and Jewellery Authority) of Sri Lanka,
                ensuring authenticity and quality in every gemstone we offer.
              </p>
            </div>

            {/* Gemstone Journey Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-20">
              <Card className="shadow-elegant overflow-hidden">
                <img src={rawSapphireHand} alt="Raw Sapphire in Hand" className="w-full h-64 object-cover" />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">From Mine to Market</h3>
                  <p className="text-muted-foreground">
                    Every journey begins with the discovery of a raw, natural beauty from the earth.
                  </p>
                </CardContent>
              </Card>
              <Card className="shadow-elegant overflow-hidden">
                <img src={gemCutting1} alt="Gemstone Cutting" className="w-full h-64 object-cover" />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Expert Craftsmanship</h3>
                  <p className="text-muted-foreground">
                    Skilled artisans meticulously cut and polish each gem to unlock its full brilliance.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-6">Our Mission</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  To provide the world's finest Ceylon sapphires directly from their source,
                  maintaining the highest standards of quality, authenticity, and ethical sourcing practices.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We believe that every gemstone tells a story, and we're honored to be part of
                  connecting these natural treasures with their destined owners worldwide.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Card className="text-center p-6">
                  <CardContent className="pt-6">
                    <Gem className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h4 className="font-semibold text-foreground">Premium Quality</h4>
                  </CardContent>
                </Card>
                <Card className="text-center p-6">
                  <CardContent className="pt-6">
                    <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h4 className="font-semibold text-foreground">NGJA Licensed</h4>
                  </CardContent>
                </Card>
                <Card className="text-center p-6">
                  <CardContent className="pt-6">
                    <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h4 className="font-semibold text-foreground">Direct Sourcing</h4>
                  </CardContent>
                </Card>
                <Card className="text-center p-6">
                  <CardContent className="pt-6">
                    <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h4 className="font-semibold text-foreground">Personal Service</h4>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-12">Meet Our Founder</h2>
            
            <Card className="p-8 md:p-12 shadow-elegant">
              <CardContent className="pt-0">
                <div className="mb-8">
                  {/* Placeholder for founder image - Replace with actual image */}
                  <img
                    src={founder} // Replace with actual image path
                    alt="B.C.H. Peiris"
                    className="w-64 h-64 rounded-full mx-auto mb-6 object-cover object-top shadow-lg"
                  />
                  <h3 className="text-3xl font-bold text-foreground mb-4">Chalith Peiris</h3>
                  <div className="text-lg text-muted-foreground space-y-2">
                    <p>MBA (UK) • PDipTH (UK) • DipDigM (UK)</p>
                    <p>Cert PM (UK) • Cert Gem (SL)</p>
                  </div>
                </div>

                <div className="text-center max-w-3xl mx-auto space-y-6">
                  <p className="text-lg text-muted-foreground text-center lg:text-justify leading-relaxed">
                    Navigating the intricate landscape of Ceylon sapphires requires a rare blend of knowledge, and Chalith Peiris delivers just that. Possessing robust qualifications in business management and gemology, alongside a in Marketing, Tourism, and Hospitality Management earned over 11 years of experience, Peiris offers an exceptional fusion of academic insight and real-world commercial savvy. This unique perspective is invaluable for understanding market trends, consumer preferences, and the precise art of gem identification and valuation.
                  </p>
                  
                  <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
                    <h4 className="text-xl font-semibold text-foreground mb-3">Our Vision</h4>
                    <p className="text-lg text-foreground italic">
                      "To become the most trusted international gateway for Ceylon gemstones, 
                      connecting the world with Sri Lanka's natural treasures."
                    </p>
                  </div>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Founded in 2019, Gemzy has quickly established itself as a trusted name in the industry, 
                    combining traditional Sri Lankan gemstone expertise with modern business practices and 
                    international standards.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Credentials</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Licensed and certified to ensure the highest standards of quality and authenticity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-8xl mx-auto">
            <Card className="text-center p-8 shadow-elegant">
              <CardContent className="pt-6">
                <Award className="w-16 h-16 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  NGJA Licensed
                </h3>
                <p className="text-muted-foreground">
                  Licensed dealer by the National Gem and Jewellery Authority of Sri Lanka
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 shadow-elegant">
              <CardContent className="pt-6">
                <Target className="w-16 h-16 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Ethical Sourcing
                </h3>
                <p className="text-muted-foreground">
                  Direct relationships with Sri Lankan mines ensuring ethical and sustainable practices
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 shadow-elegant">
              <CardContent className="pt-6">
                <Gem className="w-16 h-16 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Quality Assurance
                </h3>
                <p className="text-muted-foreground">
                  Every gemstone is carefully inspected and certified for authenticity and quality
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-8 shadow-elegant">
              <CardContent className="pt-6">
                <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-foreground mb-3">
                 Free Worldwide Shipping
                </h3>
                <p className="text-muted-foreground">
                  Free shipping worldwide with tracking and with certificate for the gem
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;