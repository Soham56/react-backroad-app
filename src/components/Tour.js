import { tourData } from "../data";

function Tour() {
    return tourData.map((data) => {
        const {
            id,
            tourImage,
            tourCountry,
            tourDate,
            tourDuration,
            tourInfoBody,
            tourInfoTitle,
            tourPrice,
        } = data;
        return (
            <article className="tour-card" key={id}>
                <div className="tour-img-container">
                    <img src={tourImage} className="tour-img" alt="" />
                    <p className="tour-date">{tourDate}</p>
                </div>
                <div className="tour-info">
                    <div className="tour-title">
                        <h4>{tourInfoTitle}</h4>
                    </div>
                    <p>{tourInfoBody}</p>
                    <div className="tour-footer">
                        <p>
                            <span>
                                <i className="fas fa-map"></i>
                            </span>
                            {tourCountry}
                        </p>
                        <p>{tourDuration} days</p>
                        <p>from ${tourPrice}</p>
                    </div>
                </div>
            </article>
        );
    });
}
export default Tour;
