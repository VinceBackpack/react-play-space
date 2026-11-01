import { Link } from 'react-router-dom';
import './Property.css';

export const Property = ({
    property: {
        id,
        externalID,
        purpose,
        title,
        coverPhoto,
        price,
        rentFrequency,
        rooms,
        baths,
        area,
        location
    }
}) => {

    const locationName =
        location?.find(item => item.type === "neighbourhood")?.name ||
        location?.find(item => item.level === 2)?.name ||
        location?.find(item => item.level === 1)?.name ||
        "UAE";

    const formattedPrice =
        price?.toLocaleString("en-US") || "Price unavailable";

    const frequency =
        rentFrequency === "yearly"
            ? "year"
            : rentFrequency === "monthly"
                ? "month"
                : rentFrequency === "weekly"
                    ? "week"
                    : rentFrequency === "daily"
                        ? "day"
                        : "";

    return (
        <Link
            to={`/property/${externalID}`}
            className="property-link"
        >
            <article className="property-card">
                <div className="property-image-wrapper">
                    <img
                        src={coverPhoto?.url}
                        alt={title?.en || "Property"}
                        className="property-image"
                    />

                    <span className="property-purpose">
                        {purpose === "for-sale"
                            ? "FOR SALE"
                            : "FOR RENT"}
                    </span>
                </div>

                <div className="property-content">
                    <p className="property-location">
                        {locationName}
                    </p>
                    <h3 className="property-title">
                        {title?.en || "Property"}
                    </h3>
                    <p className="property-price">
                        AED {formattedPrice}

                        {frequency && (
                            <span> / {frequency}</span>
                        )}
                    </p>

                    <div className="property-details">
                        <span>
                            <strong>{rooms ?? "-"}</strong> Beds
                        </span>
                        <span>
                            <strong>{baths ?? "-"}</strong> Baths
                        </span>
                        <span>
                            <strong>
                                {area
                                    ? Math.round(area).toLocaleString("en-US")
                                    : "-"}
                            </strong>{" "}
                            m²
                        </span>
                    </div>
                </div>
            </article>
        </Link>
    );
};