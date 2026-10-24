import { Link } from 'react-router-dom';
import './Banner.css';

export const Banner = ({ purpose, title, desc, buttonText, linkName, imageUrl }) => {
    return (
        <article className="banner-card">
            <div className="banner-image-wrapper">
                <img
                    src={imageUrl}
                    alt={title}
                    className="banner-image"
                />
            </div>

            <div className="banner-content">
                <p className="banner-purpose">
                    {purpose}
                </p>
                <h2 className="banner-title">
                    {title}
                </h2>
                <p className="banner-description">
                    {desc}
                </p>
                <Link to={linkName}
                    className="banner-button"
                >
                    {buttonText}
                    <span>→</span>
                </Link>
            </div>
        </article>
    );
};