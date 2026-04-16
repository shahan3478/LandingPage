
import { SelfPurchaseHeader } from '@/app/components/SelfPurchase/SelfpurchaseHeader';
import {SelfPurchaseFlowForm} from '@/app/components/SelfPurchase/SelfPurchaseFlow';

export default function Home() {
    return (
        <div className="space-y-8"> {/* Add spacing between the main page components */}
            <SelfPurchaseHeader/>
            <SelfPurchaseFlowForm/>
        </div>
    );
}