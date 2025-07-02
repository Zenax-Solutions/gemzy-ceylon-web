import Layout from "@/components/Layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Gem, Star, Sparkles, Heart } from "lucide-react";
import blueSapphire from "@/assets/blue-sapphire.jpg";
import yellowSapphire from "@/assets/yellow-sapphire.jpg";
import padparadscha from "@/assets/padparadscha.jpg";
import pinkSapphire from "@/assets/pink-sapphire.jpg";

const Gemstones = () => {
  const mainGemstone = {
    name: "Blue Ceylon Sapphires",
    image: blueSapphire,
    description: "Our flagship collection features premium Blue Ceylon Sapphires from Sri Lanka. Each stone is hand-selected for exceptional color, clarity, and cut, representing the finest examples of this legendary gemstone.",
    features: [
      "Royal blue to cornflower blue colors",
      "Exceptional clarity and brilliance",
      "Hand-selected from premium mines",
      "Certified authentic Ceylon origin",
      "Available in various sizes and cuts"
    ]
  };

  const otherGemstones = [
    {
      name: "Padparadscha Sapphires",
      image: padparadscha,
      description: "The rarest and most coveted of all sapphires, featuring the unique sunset colors of orange and pink.",
      icon: <Sparkles className="w-6 h-6" />,
      rarity: "Extremely Rare"
    },
    {
      name: "Yellow Sapphires",
      image: yellowSapphire,
      description: "Brilliant golden yellow sapphires that capture the warmth of Sri Lankan sunshine.",
      icon: <Star className="w-6 h-6" />,
      rarity: "Highly Sought After"
    },
    {
      name: "Pink Sapphires",
      image: pinkSapphire,
      description: "Delicate pink hues ranging from soft rose to vibrant hot pink, perfect for romantic jewelry.",
      icon: <Heart className="w-6 h-6" />,
      rarity: "Premium Selection"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
            Our Gemstones
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Discover the world's finest Ceylon sapphires, each carefully selected for exceptional beauty and quality
          </p>
        </div>
      </section>

      {/* Main Focus: Blue Ceylon Sapphires */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="flex items-center mb-6">
                  <Gem className="w-8 h-8 text-primary mr-3" />
                  <span className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                    PREMIUM COLLECTION
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  {mainGemstone.name}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {mainGemstone.description}
                </p>
                
                <div className="space-y-4 mb-8">
                  <h3 className="text-xl font-semibold text-foreground">Key Features:</h3>
                  <ul className="space-y-3">
                    {mainGemstone.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link to="/contact">
                  <Button variant="hero" size="lg" className="px-8">
                    Inquire About Blue Sapphires
                  </Button>
                </Link>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="relative">
                  <img 
                    src={mainGemstone.image} 
                    alt={mainGemstone.name}
                    className="w-full h-[500px] object-cover rounded-lg shadow-elegant"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Gemstones */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Other Exquisite Gemstones
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Beyond blue sapphires, we offer a carefully curated selection of other precious Ceylon gemstones
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {otherGemstones.map((gem, index) => (
              <Card key={index} className="group overflow-hidden shadow-elegant hover:shadow-xl transition-all duration-300">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={gem.image} 
                    alt={gem.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-primary">
                      {gem.icon}
                    </div>
                    <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-full">
                      {gem.rarity}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {gem.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {gem.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Colors Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Custom Colors Available
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Looking for a specific color or rare variety? Our extensive network in Sri Lanka allows us to 
              source custom colored sapphires and other precious gemstones to meet your exact requirements.
            </p>
            
            <div className="bg-gradient-primary/10 p-8 rounded-lg border border-primary/20 mb-8">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Available on Request
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-muted-foreground">
                <div>White Sapphires</div>
                <div>Purple Sapphires</div>
                <div>Green Sapphires</div>
                <div>Orange Sapphires</div>
                <div>Bi-color Sapphires</div>
                <div>Star Sapphires</div>
                <div>Color-change Sapphires</div>
                <div>Fancy Cuts</div>
              </div>
            </div>

            <Link to="/contact">
              <Button variant="gold" size="lg" className="px-8">
                Request Custom Gemstones
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gemstones;
