import { GeneratedReward } from "./rewards/GeneratedReward";
import { EmailCapture } from "./rewards/EmailCapture";
import { RewardsList } from "./rewards/RewardsList";

interface RewardsSectionProps {
  rewardCode: string | null;
}

export const RewardsSection = ({ rewardCode }: RewardsSectionProps) => {
  return (
    <div className="space-y-6">
      <GeneratedReward rewardCode={rewardCode} />

      <div className="bg-gradient-to-br from-primary/5 via-accent to-primary/5 rounded-2xl p-8 border border-primary/10 shadow-lg">
        <EmailCapture rewardCode={rewardCode} />
        <RewardsList />
      </div>
    </div>
  );
};