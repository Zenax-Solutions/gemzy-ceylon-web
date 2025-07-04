import { Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/gemzy-logo.png"; // Adjust the path as necessary
import whatsapp_qr from "@/assets/whatsapp-qr.png"; // Adjust the path as necessary
import line_qr from "@/assets/line-qr.jpg"; // Adjust the path as necessary
import tiktok_qr from "@/assets/tiktok-qr.png"; // Adjust the path as necessary

const Footer = () => {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Our Gemstones", href: "/gemstones" },
    { name: "Why Gemzy", href: "/why" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand & Description */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <img src={logo} alt="Gemzy Logo" className="h-32 w-auto" />
            </div>
            <p className="text-primary-foreground/80 leading-relaxed max-w-md">
              Your premier destination for exquisite Ceylon Sapphires, direct from Sri Lanka.
              Licensed dealer committed to quality and authenticity.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold font-playfair mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-primary-foreground/80 hover:text-accent transition-colors duration-200">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-6">
            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold font-playfair mb-4">Contact Us</h3>
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

            {/* Social Links (QR codes) */}
            <div>
              <h3 className="text-lg font-semibold font-playfair mb-4">Connect With Us</h3>
              <div className="flex flex-wrap gap-4">
                <div>
                  <img src={whatsapp_qr} alt="WhatsApp QR Code" className="w-24 h-24" />
                </div>
                <div>
                  <img src={line_qr} alt="LINE QR Code" className="w-24 h-24" />
                </div>
                <div>
                  <img src={tiktok_qr} alt="TikTok QR Code" className="w-24 h-24" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/80">
            © 2024 Gemzy. Licensed by NGJA of Sri Lanka. All rights reserved. Developed By <a target="_blank" href="https://zenax.info/">ZENAX</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;