import { ReviewCard } from "@/components/ReviewCard";
import { ExampleReviews } from "@/components/ExampleReviews";
import { Button } from "@/components/ui/button";
import { Phone, Bot } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();

  const handleSurveyCallClick = () => {
    toast({
      title: "Coming Soon!",
      description: "Our AI-powered survey calls will be available shortly. Join the prize pool by sharing your written feedback for now!",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4 py-12 space-y-8">
        <div className="text-center space-y-4 fade-in">
          <img 
            src="/lovable-uploads/50980a14-589f-4bd1-8267-536c582ff4e1.png" 
            alt="EatUP! Logo" 
            className="h-24 mx-auto"
          />
          <h1 className="text-4xl font-bold tracking-tight text-secondary">Share & Save!</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Share your dining experience and unlock exclusive rewards! Get instant savings on your next visit
            when you submit a review. It's that simple!
          </p>

          <div className="flex justify-center gap-4 pt-4">
            <Button
              onClick={handleSurveyCallClick}
              className="bg-secondary hover:bg-secondary/90 text-white"
              size="lg"
            >
              <Phone className="mr-2 h-4 w-4" />
              Take AI Survey Call
              <Bot className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="text-sm text-muted-foreground mt-2">
            Complete the AI survey call to enter our monthly prize pool! 🎉
          </div>
        </div>

        <ReviewCard
          businessName="The Local Kitchen & Bar"
          businessImage="/placeholder.svg"
        />

        <div className="text-center text-sm text-muted-foreground space-y-2 fade-in">
          <p className="font-medium text-base text-secondary">
            How it works:
          </p>
          <p>
            1. Share your experience (written or AI call)
          </p>
          <p>
            2. Get your unique reward code
          </p>
          <p>
            3. Show your code on your next visit to claim rewards!
          </p>
          <p className="text-primary font-medium mt-4">
            ✨ AI Survey Call participants are automatically entered into our monthly prize pool! ✨
          </p>
        </div>

        <ExampleReviews />
      </div>
    </div>
  );
};

export default Index;