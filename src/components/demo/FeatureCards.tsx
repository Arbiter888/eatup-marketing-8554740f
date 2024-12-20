import { Mail, Gift, MessageSquare } from "lucide-react";

export const FeatureCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto mb-8 md:mb-12 px-2">
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-lg">
        <div className="inline-block p-3 bg-[#E94E87]/10 rounded-full mb-3 md:mb-4">
          <Mail className="h-6 w-6 md:h-8 md:w-8 text-[#E94E87]" />
        </div>
        <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Instant Email Generation</h3>
        <p className="text-sm md:text-base text-muted-foreground">
          Create beautiful, engaging email campaigns with AI-powered content generation and professional templates
        </p>
      </div>
      
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-lg">
        <div className="inline-block p-3 bg-[#E94E87]/10 rounded-full mb-3 md:mb-4">
          <Gift className="h-6 w-6 md:h-8 md:w-8 text-[#E94E87]" />
        </div>
        <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Smart Reward System</h3>
        <p className="text-sm md:text-base text-muted-foreground">
          Include unique reward codes in your emails to track and boost conversion rates from your mailing list
        </p>
      </div>
      
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-lg">
        <div className="inline-block p-3 bg-[#E94E87]/10 rounded-full mb-3 md:mb-4">
          <MessageSquare className="h-6 w-6 md:h-8 md:w-8 text-[#E94E87]" />
        </div>
        <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">AI Marketing Advisor</h3>
        <p className="text-sm md:text-base text-muted-foreground">
          Get personalized marketing advice and campaign suggestions from our AI advisor to maximize your email performance
        </p>
      </div>
    </div>
  );
};