import Title from "./Title";
import Tour from "./Tour";

function ToursComponent() {
    return (
        <>
            <section className="section" id="tours">
                <Title title="featured" subtitle="tours"></Title>
                <div className="section-center featured-center">
                    <Tour />
                </div>
            </section>
        </>
    );
}
export default ToursComponent;
