import { Button } from "@/components/ui/button";
import { StarDecoration } from "./StarDecoration";

export const CTA = () => {
  return (
    <section id="community" className="section-padding relative overflow-hidden">
      <StarDecoration position="top-left" size="lg" />
      <StarDecoration position="top-right" size="lg" />
      <StarDecoration position="bottom-left" size="lg" />
      <StarDecoration position="bottom-right" size="lg" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative problem-solution-card max-w-5xl mx-auto text-center py-12">
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6">
            Ready to Transform Your
            <span className="block text-primary">Publishing Journey?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Join thousands of authors who are already reaching millions of readers across India
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="text-lg px-10 py-6 bg-primary hover:bg-primary/90">
              Start Publishing Today
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-10 py-6">
              Download the App
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
