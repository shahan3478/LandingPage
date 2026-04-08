
import { HeaderComponent } from '@/app/components/ShopPage/Header';
import {SpotlightCollection} from '@/app/components/ShopPage/Spotlight';
import {FeaturedMarketplaces} from '@/app/components/ShopPage/FeaturesMarket';
import {HotSale} from '@/app/components/ShopPage/HotSale';
import {ExclusiveDeals} from '@/app/components/ShopPage/ExclusiveDeals';
import {DubaiBites} from '@/app/components/ShopPage/DubaiBites';
import {CustomerVoices} from '@/app/components/ShopPage/CustomerVoices';
import {Footer} from '@/app/components/ShopPage/Footer';


export default function Shop() {
    return (
        <div>

           <HeaderComponent/>
            <SpotlightCollection/>
            <FeaturedMarketplaces/>
            <HotSale/>
            <ExclusiveDeals/>
            <DubaiBites/>
            <CustomerVoices/>
            <Footer/>
        </div>
    );
}