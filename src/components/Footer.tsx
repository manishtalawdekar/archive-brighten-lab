import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-gold flex items-center justify-center">
              <span className="text-lg font-bold font-display text-accent-foreground">A</span>
            </div>
            <span className="text-lg font-bold font-display">Alumina Engineering</span>
          </div>
          <p className="text-sm opacity-70 leading-relaxed">
            Premium architectural products and solutions for iconic structures across India. Trusted by the nation's finest builders and architects.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gold">Quick Links</h4>
          <ul className="space-y-2">
            {[
              { label: "Home", to: "/" },
              { label: "About Us", to: "/about" },
              { label: "Products", to: "/products" },
              { label: "Contact", to: "/contact" },
            ].map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-sm opacity-70 hover:opacity-100 transition-opacity">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Principals */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gold">Our Principals</h4>
          <ul className="space-y-2 text-sm opacity-70">
            <li>Dorma</li>
            <li>Skyfold</li>
            <li>FunderMax</li>
            <li>McKeon Door Company</li>
            <li>Drainvac</li>
            <li>Geggus</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gold">Contact Us</h4>
          <div className="space-y-3">
            <a href="tel:+912226400369" className="flex items-start gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity">
              <Phone className="w-4 h-4 mt-0.5 shrink-0" />
              +91 22 2640 0369
            </a>
            <a href="mailto:info@aluminaengg.com" className="flex items-start gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity">
              <Mail className="w-4 h-4 mt-0.5 shrink-0" />
              info@aluminaengg.com
            </a>
            <div className="flex items-start gap-2 text-sm opacity-70">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
              <span>Mumbai, Maharashtra, India</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="border-t border-primary-foreground/10">
      <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs opacity-50">
        <p>© {new Date().getFullYear()} Alumina Engineering Pvt. Ltd. All rights reserved.</p>
        <p>Designed with excellence</p>
      </div>
    </div>
  </footer>
);

export default Footer;
