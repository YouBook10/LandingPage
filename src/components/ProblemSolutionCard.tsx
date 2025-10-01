import { StarDecoration } from "./StarDecoration";

interface ProblemSolutionCardProps {
  problem: string;
  solution: string;
  starPosition?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  reverse?: boolean;
}

export const ProblemSolutionCard = ({ 
  problem, 
  solution, 
  starPosition = 'top-right',
  reverse = false 
}: ProblemSolutionCardProps) => {
  return (
    <div className={`grid md:grid-cols-2 gap-6 max-w-5xl mx-auto ${reverse ? 'md:grid-flow-dense' : ''}`}>
      <div className={`relative problem-solution-card ${reverse ? 'md:col-start-2' : ''}`}>
        <StarDecoration position={starPosition} />
        <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
          Problem
        </h3>
        <p className="text-lg md:text-xl text-primary leading-relaxed">
          {problem}
        </p>
      </div>

      <div className={`relative problem-solution-card ${reverse ? 'md:col-start-1 md:row-start-1' : ''}`}>
        <StarDecoration position={starPosition === 'top-right' ? 'bottom-left' : 'bottom-right'} />
        <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
          Solution
        </h3>
        <p className="text-lg md:text-xl text-foreground leading-relaxed">
          {solution}
        </p>
      </div>
    </div>
  );
};
