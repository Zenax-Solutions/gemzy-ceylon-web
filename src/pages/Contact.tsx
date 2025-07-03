import Layout from "@/components/Layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, MapPin, MessageCircle, Mail, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiry: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const recipientEmail = "info@gemzy.com"; // Replace with your actual recipient email
    const subject = encodeURIComponent(`Inquiry from ${formData.name} - ${formData.inquiry}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Inquiry Type: ${formData.inquiry}\n\n` +
      `Message:\n${formData.message}`
    );

    window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;

    toast({
      title: "Opening Email Client",
      description: "Please send the email from your email client. We'll get back to you within 24 hours.",
    });
    // Reset form after a short delay to allow mailto to trigger
    setTimeout(() => {
      setFormData({ name: '', email: '', inquiry: '', message: '' });
    }, 1000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactMethods = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Phone",
      details: "+94 71 533 80 76",
      description: "Call us directly for immediate assistance"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "WhatsApp",
      details: "+94 71 533 80 76",
      description: "Message us on WhatsApp for quick responses"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "LINE",
      details: "Available on LINE",
      description: "Connect with us through LINE messenger"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "TikTok",
      details: "@gemzy_official",
      description: "Follow us for gemstone education and updates"
    }
  ];

  const locations = [
    {
      city: "Ratnapura",
      region: "Gem Capital of Sri Lanka",
      description: "Our main sourcing location in the heart of Sri Lanka's gem mining region"
    },
    {
      city: "Colombo",
      region: "Commercial Capital",
      description: "Business operations and international client services"
    },
    {
      city: "Kadawatha",
      region: "Operational Base",
      description: "Processing and quality control facility"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Ready to find your perfect Ceylon sapphire? Get in touch with our expert team today.
          </p>
        </div>
      </section>

      {/* Contact Methods & Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">Get in Touch</h2>
              
              <div className="space-y-6 mb-12">
                {contactMethods.map((method, index) => (
                  <Card key={index} className="p-6 hover:shadow-elegant transition-all duration-300">
                    <CardContent className="pt-0">
                      <div className="flex items-start space-x-4">
                        <div className="text-primary mt-1">
                          {method.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-foreground mb-1">
                            {method.title}
                          </h3>
                          <p className="text-lg font-medium text-accent mb-2">
                            {method.details}
                          </p>
                          <p className="text-muted-foreground">
                            {method.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Business Hours */}
              <Card className="p-6 bg-secondary">
                <CardContent className="pt-0">
                  <div className="flex items-center mb-4">
                    <Clock className="w-6 h-6 text-primary mr-3" />
                    <h3 className="text-xl font-semibold text-foreground">Business Hours</h3>
                  </div>
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM (Sri Lanka Time)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>9:00 AM - 4:00 PM (Sri Lanka Time)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>By Appointment Only</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">Send us a Message</h2>
              
              <Card className="p-8 shadow-elegant">
                <CardContent className="pt-0">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="mt-2"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="inquiry">Type of Inquiry</Label>
                      <Select onValueChange={(value) => handleInputChange('inquiry', value)}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="blue-sapphires">Blue Sapphires</SelectItem>
                          <SelectItem value="padparadscha">Padparadscha Sapphires</SelectItem>
                          <SelectItem value="yellow-sapphires">Yellow Sapphires</SelectItem>
                          <SelectItem value="pink-sapphires">Pink Sapphires</SelectItem>
                          <SelectItem value="custom-colors">Custom Colors</SelectItem>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="certification">Certification Questions</SelectItem>
                          <SelectItem value="shipping">Shipping & Logistics</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        required
                        rows={6}
                        placeholder="Please describe your requirements, budget range, preferred size, or any specific questions you have..."
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        className="mt-2"
                      />
                    </div>

                    <Button type="submit" variant="hero" size="lg" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Locations</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Strategically located across Sri Lanka to serve you better
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {locations.map((location, index) => (
              <Card key={index} className="text-center p-8 shadow-elegant hover:shadow-xl transition-all duration-300">
                <CardContent className="pt-6">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {location.city}
                  </h3>
                  <p className="text-lg text-accent font-medium mb-4">
                    {location.region}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {location.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Response Time Promise */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-primary/10 p-12 rounded-lg border border-primary/20">
              <Mail className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Quick Response Guarantee
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We understand that finding the perfect gemstone is important to you. 
                That's why we guarantee a response to all inquiries within 24 hours during business days.
              </p>
              <p className="text-accent font-medium text-lg">
                For urgent inquiries, please call or WhatsApp us directly at +94 71 533 80 76
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;