import { serviceData } from "../data";

function Services() {
    return serviceData.map((data) => {
        const { id, title, text, icon } = data;
        return (
            <article className="service" key={id}>
                <span className="service-icon">
                    <i className={icon}></i>
                </span>
                <div className="service-info">
                    <h4 className="service-title">{title}</h4>
                    <p className="service-text">{text}</p>
                </div>
            </article>
        );
    });
}
export default Services;
