import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const benefits = [
  "100% free to start",
  "No credit card required",
  "Instant AI access",
  "Cancel anytime",
];

const FinalCTA = () => (
  <section className="py-28 bg-deep text-deep-foreground relative overflow-hidden" aria-labelledby="cta-heading">
    <div className="absolute inset-0 bg-gradient-to-br from-navy/50 to-transparent" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-interface/8 rounded-full blur-[120px]" />

    <div className="container relative max-w-3xl mx-auto px-4 text-center">
      <h2 id="cta-heading" className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
        Start Learning Smarter <span className="text-highlight">Today</span>
      </h2>

      <p className="text-soft text-lg mb-8 max-w-xl mx-auto">
        Join thousands of students using AI to achieve better grades, build study habits, and reach their academic goals faster.
      </p>

      <div className="flex flex-wrap gap-4 justify-center mb-10">
        <Button className="bg-cta text-cta-foreground hover:bg-cta/90 font-semibold h-12 px-8 rounded-xl text-sm gap-2 shadow-lg" asChild>
          <Link to="/signup">
            Get Started Free
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
        <Button variant="outline" className="border-interface/40 text-soft hover:text-highlight hover:border-highlight/40 h-12 px-8 rounded-xl text-sm bg-transparent" asChild>
          <Link to="/login">Log In to Continue</Link>
        </Button>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-soft">
        {benefits.map((benefit) => (
          <span key={benefit} className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-success" />
            {benefit}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default FinalCTA;
