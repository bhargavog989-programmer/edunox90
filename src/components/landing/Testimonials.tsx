import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Eduonx completely transformed how I study. The AI tutor explains concepts better than my textbooks, and the quizzes helped me identify my weak areas instantly.",
    name: "Priya Sharma",
    role: "12th Grade Student",
    metric: "+35% in Physics scores",
  },
  {
    quote: "I used to struggle with consistency, but the streak system and XP rewards keep me motivated. I have not missed a study day in 45 days!",
    name: "Arjun Mehta",
    role: "Engineering Aspirant",
    metric: "45-day study streak",
  },
  {
    quote: "The document upload feature is a game-changer. I upload my notes and the AI creates practice questions from them. It is like having a personal tutor available 24/7.",
    name: "Sneha Patel",
    role: "Medical Student",
    metric: "Saved 10+ hours/week",
  },
];

const Testimonials = () => (
  <section className="py-24 bg-background" aria-labelledby="testimonials-heading">
    <div className="container max-w-7xl mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">Student Success Stories</p>
        <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
          Trusted by Thousands of Students
        </h2>
        <p className="text-muted-foreground mt-4 text-lg">
          Join students who are already studying smarter with Eduonx
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <article key={t.name} className="bg-card border border-border rounded-2xl p-7 flex flex-col relative">
            <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/10" aria-hidden="true" />
            <div className="flex gap-1 mb-4" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-cta text-cta" aria-hidden="true" />
              ))}
            </div>
            <blockquote className="text-foreground text-sm leading-relaxed flex-1 mb-6">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <div className="bg-success-light rounded-lg px-3 py-2 text-xs font-semibold text-success mb-4 w-fit">
              {t.metric}
            </div>
            <footer>
              <cite className="not-italic">
                <div className="text-sm font-semibold text-foreground">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </cite>
            </footer>
          </article>
        ))}
      </div>

      {/* Trust indicators */}
      <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-center">
        <div className="flex flex-col items-center">
          <span className="text-3xl font-bold text-foreground">10,000+</span>
          <span className="text-sm text-muted-foreground">Active Students</span>
        </div>
        <div className="h-10 w-px bg-border hidden sm:block" />
        <div className="flex flex-col items-center">
          <span className="text-3xl font-bold text-foreground">500K+</span>
          <span className="text-sm text-muted-foreground">Questions Solved</span>
        </div>
        <div className="h-10 w-px bg-border hidden sm:block" />
        <div className="flex flex-col items-center">
          <span className="text-3xl font-bold text-foreground">4.9/5</span>
          <span className="text-sm text-muted-foreground">Average Rating</span>
        </div>
        <div className="h-10 w-px bg-border hidden sm:block" />
        <div className="flex flex-col items-center">
          <span className="text-3xl font-bold text-foreground">95%</span>
          <span className="text-sm text-muted-foreground">Score Improvement</span>
        </div>
      </div>
    </div>
  </section>
);

export default Testimonials;
