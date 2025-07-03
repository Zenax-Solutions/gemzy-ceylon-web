import { Phone, MapPin, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src="src/assets/gemzy-logo.png" alt="Gemzy Logo" className="h-32 w-auto" />
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
                <a target="_blank" href="https://wa.me/qr/4QSBMHWCWR4BK1">
                <MessageCircle className="w-5 h-5 text-accent" />
                <span>WhatsApp</span>
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <a target="_blank" href="https://line.me/ti/p/EpuwscL73_">
                <MessageCircle className="w-5 h-5 text-accent" />
                <span>LINE</span>
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <a target="_blank" href="https://www.tiktok.com/@gemzy78?_t=ZS-8xiQ5ztsNHs&_r=1">
                <MessageCircle className="w-5 h-5 text-accent" />
                <span>TikTok</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/80">
            © 2024 Gemzy. Licensed by NGJA of Sri Lanka. All rights reserved. Developed By <a target="_blank" href="https://zenax.info/">ZENAX</a> 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;