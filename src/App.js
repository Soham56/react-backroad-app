import AboutComponent from "./components/AboutComponent";
import NavBarComponent from "./components/NavBarComponent";
import FooterComponent from "./components/FooterComponent";
import HeroComponent from "./components/HeroComponent";
import ServicesComponent from "./components/ServicesComponent";
import ToursComponent from "./components/ToursComponent";

function App() {
    return (
        <>
            <NavBarComponent></NavBarComponent>
            <HeroComponent></HeroComponent>
            <AboutComponent></AboutComponent>
            <ServicesComponent></ServicesComponent>
            <ToursComponent></ToursComponent>
            <FooterComponent></FooterComponent>
        </>
    );
}

export default App;
