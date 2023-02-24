import { Input } from "../components/form/form";
import HeroSection from "../components/herosection/heroSection";
import Partenaire from "../components/partenaire/patenaire";

export default function ContactUs(){
    return(
        <div>
            <HeroSection image="images_2.png"></HeroSection>
            <Partenaire />
        </div>
    )
}