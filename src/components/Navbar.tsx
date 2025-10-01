import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center space-x-2">
            <a href="/" aria-label="YouBook homepage" className="flex items-center space-x-2">
              <img
                src="/src/assets/Youbook_Final logo-01.png"
                alt="YouBook logo"
                className="h-12 md:h-16 lg:h-20 w-auto"
              />
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-foreground hover:text-primary transition-colors font-medium">
              Features
            </a>
            <a href="#solutions" className="text-foreground hover:text-primary transition-colors font-medium">
              Solutions
            </a>
            <a href="#community" className="text-foreground hover:text-primary transition-colors font-medium">
              Community
            </a>
          </div>

          <div className="flex items-center space-x-4">
            {/* <Button variant="outline" className="hidden sm:inline-flex">
              Sign In
            </Button>
            <Button className="bg-primary hover:bg-primary/90">
              Get Started
            </Button> */}
          </div>
        </div>
      </div>
    </nav>
  );
};
