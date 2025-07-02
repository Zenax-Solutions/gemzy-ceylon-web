import { Phone, MapPin, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg">G</span>
              </div>
              <span className="text-2xl font-bold font-playfair">Gemzy</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Your premier destination for exquisite Ceylon Sapphires, direct from Sri Lanka.
              Licensed dealer committed to quality and authenticity.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-playfair">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent" />
                <span>+94 71 533 80 76</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5" />
                <div>
                  <div>Ratnapura, Sri Lanka</div>
                  <div>Colombo, Sri Lanka</div>
                  <div>Kadawatha, Sri Lanka</div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-semibold font-playfair">Connect With Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-5 h-5 text-accent" />
                <span>WhatsApp</span>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-5 h-5 text-accent" />
                <span>LINE</span>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-5 h-5 text-accent" />
                <span>TikTok</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/80">
            © 2024 Gemzy. Licensed by NGJA of Sri Lanka. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;