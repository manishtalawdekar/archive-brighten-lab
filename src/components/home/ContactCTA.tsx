import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ContactCTA = () => (
  <section className="bg-gradient-navy py-20 md:py-24">
    <div className="container text-center">
      <h2 className="text-3xl md:text-4xl font-bold font-display text-primary-foreground mb-4">
        Ready to Elevate Your Project?
      </h2>
      <p className="text-primary-foreground/70 max-w-xl mx-auto mb-8 text-lg">
        Let our team of experts help you choose the perfect architectural solutions for your next iconic structure.
      </p>
      <Link to="/contact">
        <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-base px-10 h-12">
          Get in Touch
          <ArrowRight className="w-5 h-5 ml-1" />
        </Button>
      </Link>
    </div>
  </section>
);

export default ContactCTA;
