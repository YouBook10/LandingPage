import { Button } from "@/components/ui/button";
import { StarDecoration } from "./StarDecoration";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <StarDecoration position="top-left" size="lg" />
      <StarDecoration position="bottom-right" size="lg" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-foreground leading-tight">
            Empowering Authors,
            <span className="block text-primary">Connecting Readers</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            YouBook makes publishing simple, free, and multilingual, turning every book into an eBook and audiobook in 22 Indian languages.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            {/* <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90">
              Start Publishing Free
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              Explore Books
            </Button> */}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 max-w-4xl mx-auto">
            <div className="space-y-2">
              <div className="text-4xl font-heading font-bold text-primary">22</div>
              <div className="text-sm text-muted-foreground">Indian Languages</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-heading font-bold text-primary">Free</div>
              <div className="text-sm text-muted-foreground">For All Readers</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-heading font-bold text-primary">4x</div>
              <div className="text-sm text-muted-foreground">Revenue Streams</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-heading font-bold text-primary">Real-time</div>
              <div className="text-sm text-muted-foreground">Analytics</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
