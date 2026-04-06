import { Brain, Zap, Timer, BarChart3, Upload, Compass } from "lucide-react";
import DecryptedText from "@/components/ui/DecryptedText";
import { MagicBento } from "@/components/ui/MagicBento";

const features = [
  {
    icon: Brain,
    title: "AI Homework Helper",
    description: "Get instant step-by-step solutions with detailed explanations. Understand concepts, not just answers.",
  },
  {
    icon: Zap,
    title: "Adaptive Quiz Generator",
    description: "Auto-generated quizzes that identify knowledge gaps and reinforce weak areas with spaced repetition.",
  },
  {
    icon: Timer,
    title: "Study Timer with Streaks",
    description: "Build consistent study habits with Pomodoro-style timers, daily goals, and motivating streaks.",
  },
  {
    icon: BarChart3,
    title: "Learning Analytics",
    description: "Track your progress with detailed insights, mastery levels, and performance trends over time.",
  },
  {
    icon: Upload,
    title: "Document-Based Learning",
    description: "Upload your notes, textbooks, or PDFs. AI creates summaries, flashcards, and quizzes from your content.",
  },
  {
    icon: Compass,
    title: "AI Study Recommendations",
    description: "Get personalized suggestions on what to study next based on your performance and learning goals.",
  },
];

const FeaturesGrid = () => (
  <section id="features" className="py-24 bg-background">
    <div className="container max-w-7xl mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">Powerful Learning Features</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
          Everything You Need to Excel Academically
        </h2>
        <div className="text-muted-foreground text-lg h-16">
          <DecryptedText 
            text="AI-powered tools for homework help, quiz generation, progress tracking, and personalized learning." 
            animateOn="view" 
            revealDirection="start" 
            sequential 
            useOriginalCharsOnly={false} 
          />
        </div>
      </div>

      <div className="mt-8">
        <MagicBento
          cards={features.map(f => ({ 
            ...f, 
            color: 'hsl(var(--card))',
            label: 'Study Tool'
          }))}
          textAutoHide={true}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={false}
          enableMagnetism={false}
          clickEffect={true}
          spotlightRadius={400}
          particleCount={12}
          glowColor="29, 78, 216"
          disableAnimations={false}
        />
      </div>
    </div>
  </section>
);

export default FeaturesGrid;
