import { useParams, Link } from 'react-router-dom';
import { NavBar } from '../components/NavBar';
import { GetList, baseURL } from '../services/fetchAPI';
import './PropertyDetails.css';

export const PropertyDetails = () => {
    const { externalID } = useParams();
    const purpose = "for-rent";
    const url =
        `${baseURL}/search-property` +
        `?external_id=${externalID}` +
        `&langs=en` +
        `&purpose=${purpose}`;

    const response = GetList(url);

    if (!response) {
        return (
            <div className="property-details-page">
                <NavBar />
                <main className="property-details-main">
                    <div className="property-details-loading">
                        Loading property...
                    </div>
                </main>
            </div>
        );
    }

    const property = response?.data?.properties?.[0];

    if (!property) {
        return (
            <div className="property-details-page">
                <NavBar />
                <main className="property-details-main">
                    <div className="property-details-error">
                        Property not found.
                    </div>
                </main>
            </div>
        );
    }

    const {
        title,
        description,
        price,
        rentFrequency,
        rooms,
        baths,
        area,
        coverPhoto,
        location,
        category,
        agency,
        amenities,
        furnishingStatus,
        completionStatus,
        isVerified,
        photoCount
    } = property;

    const locationName =
        location?.find(item => item.type === "neighbourhood")?.name ||
        location?.find(item => item.level === 2)?.name ||
        "Dubai";

    const buildingName =
        location?.find(item => item.type === "condo-building")?.name;

    const propertyType =
        category?.find(item => item.level === 1)?.name ||
        "Property";

    const formattedPrice =
        price?.toLocaleString("en-US");

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
        <div className="property-details-page">
            <NavBar />
            <main className="property-details-main">
                <Link
                    to="/search"
                    className="back-link"
                >
                    ← Back to Search
                </Link>
                <section className="property-hero">
                    <div className="property-main-image">
                        <img
                            src={coverPhoto?.url}
                            alt={title?.en || "Property"}
                        />
                        {isVerified && (
                            <span className="verified-badge">
                                ✓ VERIFIED
                            </span>
                        )}
                    </div>
                </section>
                <section className="property-info">
                    <div className="property-info-main">
                        <p className="details-location">
                            {locationName}
                            {buildingName && ` · ${buildingName}`}
                        </p>

                        <h1>
                            {title?.en || "Property"}
                        </h1>
                        <p className="details-type">
                            {propertyType}
                        </p>

                        <div className="details-price">
                            AED {formattedPrice}
                            {frequency && (
                                <span> / {frequency}</span>
                            )}
                        </div>
                    </div>
                </section>

                <section className="property-stats">
                    <div>
                        <span>Bedrooms</span>
                        <strong>{rooms ?? "-"}</strong>
                    </div>

                    <div>
                        <span>Bathrooms</span>
                        <strong>{baths ?? "-"}</strong>
                    </div>

                    <div>
                        <span>Area</span>
                        <strong>
                            {area
                                ? `${Math.round(area).toLocaleString()} m²`
                                : "-"}
                        </strong>
                    </div>

                    <div>
                        <span>Furnished</span>
                        <strong>
                            {furnishingStatus
                                ? furnishingStatus
                                : "-"}
                        </strong>
                    </div>
                </section>

                <div className="property-details-grid">
                    <section className="details-section">
                        <h2>Property Description</h2>
                        <p>
                            {description?.en ||
                                "No description is available for this property."}
                        </p>
                    </section>

                    <aside className="agency-card">
                        <p className="agency-label">
                            LISTED BY
                        </p>

                        <h3>
                            {agency?.name || "Real Estate Agency"}
                        </h3>

                        <p>
                            {agency?.location || "Dubai"}
                        </p>

                        {agency?.licenses?.length > 0 && (
                            <div className="agency-license">
                                {agency.licenses.map((license, index) => (
                                    <span key={index}>
                                        {license.authority}: {license.number}
                                    </span>
                                ))}
                            </div>
                        )}
                    </aside>
                </div>

                {amenities?.length > 0 && (
                    <section className="amenities-section">
                        <h2>Amenities</h2>
                        <div className="amenities-grid">
                            {amenities.map((amenity, index) => (
                                <div
                                    className="amenity"
                                    key={index}
                                >
                                    ✓ {amenity}
                                </div>
                            ))}
                        </div>
                    </section>
                )}
                <section className="property-summary">
                    <div>
                        <span>Property Type</span>
                        <strong>{propertyType}</strong>
                    </div>

                    <div>
                        <span>Completion</span>
                        <strong>
                            {completionStatus || "-"}
                        </strong>
                    </div>

                    <div>
                        <span>Photos</span>
                        <strong>{photoCount ?? 0}</strong>
                    </div>
                </section>
            </main>
        </div>
    );
};