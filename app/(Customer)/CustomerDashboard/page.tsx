import DashboardOverview from '@/app/components/Dashboard/DashboardReview/DashboardReview';
import { DashboardActivityHub } from '@/app/components/Dashboard/DashboardActivityHub';
export default function Home() {
    return (
        <div className="space-y-8"> {/* Add spacing between the main page components */}
            <DashboardOverview />

            <DashboardActivityHub />
        </div>
    );
}