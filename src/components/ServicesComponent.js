import Services from "./Services";
import Title from "./Title";

function ServicesComponent() {
    return (
        <>
            <section className="section services" id="services">
                <Title title="our" subtitle="services" />
                <div className="section-center services-center">
                    <Services />
                </div>
            </section>
        </>
    );
}
export default ServicesComponent;
