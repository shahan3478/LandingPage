import Header from "../components/Explore/Header/HeaderExplore";
import { ShopClient } from '@/app/components/Explore/ShopClient';
import {Footer} from '@/app/components/ShopPage/Footer';


export default function ExplorePage() {
    return (
        <div className="min-h-screen bg-[#f8f9fa] font-poppins text-[#111111]">
            <Header/>
            <ShopClient />
            <Footer/>
        </div>
    )
}