import About from "../../components/About/About"
import Hero from "../../components/Hero/Hero"
import MyServices from "../../components/MyServices/MyServices"
import Portfolio from "../../components/Portfolio/Portfolio"
import TechStack from "../../components/TechStack/TechStack"


const Homepage = () => {
    return (
        <>
            <Hero />
            <About />
            <MyServices />
            <TechStack />
            <Portfolio />
        </>
    )
}

export default Homepage