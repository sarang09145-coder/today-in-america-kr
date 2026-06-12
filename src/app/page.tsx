import { NewsDashboard } from "@/components/NewsDashboard";
import { sampleArticles } from "@/data/sampleArticles";
import { sampleStoryClusters } from "@/data/sampleStoryClusters";

export default function HomePage() {
  return <NewsDashboard articles={sampleArticles} storyClusters={sampleStoryClusters} />;
}
