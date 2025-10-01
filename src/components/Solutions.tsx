import { ProblemSolutionCard } from "./ProblemSolutionCard";

export const Solutions = () => {
  const solutions = [
    {
      problem: "Publishing a Book Is Expensive and Complex",
      solution: "YouBook makes publishing simple, free, and multilingual, turning every book into an eBook and audiobook in 22 Indian languages.",
      starPosition: 'top-right' as const,
    },
    {
      problem: "Limited Revenue Streams for Authors (In India, an Average Author Earns ₹10,000–₹20,000 in Their Entire Lifetime)",
      solution: "On YouBook, Authors Have Four Different Ways to Generate Revenue From a Single Book.",
      starPosition: 'top-left' as const,
    },
    {
      problem: "Difficulty in Selling Books (Most Debut Books in India Sell 500–2,000 Copies Total Over Their Lifetime)",
      solution: "On YouBook, Authors Can Showcase Their Books to a Diverse and Wide Range of Readers.",
      starPosition: 'bottom-right' as const,
    },
    {
      problem: "Authors Don't Have Access to Real Time Reader Data or Analytics",
      solution: "YouBook Believes in Transparency, Providing Authors With Real-Time Reader Data and Analytics of Their Book.",
      starPosition: 'bottom-left' as const,
    },
    {
      problem: "High Cost of Books",
      solution: "YouBook Offers Free Access to All Books.",
      starPosition: 'top-right' as const,
    },
    {
      problem: "Unavailability of Multilingual eBooks and Audiobooks",
      solution: "On YouBook, Every Book Is Available in 22 Indian Languages as an eBook and Audiobook.",
      starPosition: 'top-left' as const,
    },
    {
      problem: "Authors Have No Direct Way to Interact With Readers and Fellow Authors",
      solution: "YouBook Offers a Dedicated Community Page Where Authors Can Interact With Readers and Fellow Authors by Sharing Thoughts, Pictures, Videos, or Going Live",
      starPosition: 'bottom-right' as const,
    },
  ];

  return (
    <section id="solutions" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-6">
            Solving Real Problems
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We understand the challenges authors face. Here's how YouBook transforms the publishing landscape.
          </p>
        </div>

        <div className="space-y-20">
          {solutions.map((item, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <ProblemSolutionCard
                problem={item.problem}
                solution={item.solution}
                starPosition={item.starPosition}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
