import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "We'll get back to you shortly." });
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <Layout>
      <SEOHead
        title="Contact Alumina Engineering | Mumbai Architectural Products Enquiry"
        description="Contact Alumina Engineering Pvt. Ltd. in Mumbai for Dorma, Skyfold, FunderMax, McKeon, Armstrong products. Call +91 22 2847 9277 or email info@aluminaengg.in
        canonical="https://www.aluminaengg.com/contact"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Alumina Engineering Pvt. Ltd.",
          "telephone": "+912228479277",
          "email": "info@aluminaengg.in",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "D-54, Solaris - 1, Opp. L&T Gate No. 6, Saki Vihar Road, Andheri (E)",
            "addressLocality": "Mumbai",
            "addressRegion": "Maharashtra",
            "postalCode": "400072",
            "addressCountry": "IN",
          },
          "openingHours": "Mo-Sa 09:00-18:00",
        }}
      />
      <section className="bg-gradient-navy py-20 md:py-28">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold font-display text-primary-foreground mb-4">
            Get in <span className="text-gradient-gold">Touch</span>
          </h1>
          <p className="text-primary-foreground/70 max-w-2xl text-lg">
            Let us help you find the right architectural solutions for your project.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold font-display text-foreground mb-6">Contact Information</h2>
                <div className="space-y-5">
                  {[
                    { icon: MapPin, label: "Mumbai Office", value: "D-54, Solaris - 1, Opp. L&T Gate No. 6, Saki Vihar Road, Andheri (E), Mumbai - 400 072" },
                    { icon: Phone, label: "Phone", value: "+91 22 2847 9277 / 78 / 79", href: "tel:+912228479277" },
                    { icon: Mail, label: "Email", value: "info@aluminaengg.in", href: "mailto:info@aluminaengg.in" },
                    { icon: Clock, label: "Hours", value: "Mon – Sat: 9:00 AM – 6:00 PM" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-sm font-medium text-foreground hover:text-accent transition-colors">{item.value}</a>
                        ) : (
                          <p className="text-sm font-medium text-foreground">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map placeholder */}
              <div className="h-52 rounded-xl overflow-hidden border border-border">
                <iframe
                  title="Alumina Engineering Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.682!2d72.8889!3d19.1074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7c3b0000001%3A0x1234567890abcdef!2sSolaris%2C%20Saki%20Vihar%20Rd%2C%20Andheri%20East%2C%20Mumbai%2C%20Maharashtra%20400072!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-card border border-border rounded-2xl p-8 md:p-10">
                <h2 className="text-2xl font-bold font-display text-foreground mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Full Name</label>
                      <Input
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
                      <Input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Phone</label>
                    <Input
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
                    <Textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about your project requirements..."
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold h-12">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
