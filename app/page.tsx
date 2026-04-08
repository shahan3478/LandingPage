
import { Header } from "./components/Landingpageheader";
import {ImageGrid} from "./components/LandingpageImagegrid"
import {Footer} from "./components/LandingPagefooter"
import {AnnouncementBar} from '@/app/components/Annoucementheader';

export default function Home() {
  return (
    <div>
      <AnnouncementBar/>
      <Header />
        <ImageGrid/>
        <Footer/>
    </div>
  );
}
