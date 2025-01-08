import AboutMe from "../AboutMe";
import HeroSection from "../HeroSection";
import MySkills from "../MySkills";
import MyPortfolio from "../MyPortfolio";
import Footer from "../Footer";
import Experience from "../Experience";

export default function HomeScreen() {
    return(
        <>
            <HeroSection />
            <Experience />
            <AboutMe />
            <MySkills />
            <MyPortfolio />
            <Footer />
        </>
    )
}