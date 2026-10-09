import './Home.css';
import React from "react";
import { NavBar } from '../components/NavBar';
import { Banner } from '../components/Banner';
import { Footer } from '../components/Footer/Footer';

export const Home = () => {
    return (
        <div className="home">
            <NavBar />
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <p className="hero-eyebrow">UAE REAL ESTATE</p>
                    <h1>
                        Find Your
                        <br />
                        Next Home
                    </h1>

                    <p className="hero-description">
                        Modern homes. Great locations.
                        <br />
                        A better lifestyle in the UAE.
                    </p>

                    <a href="/search" className="hero-button">
                        Browse Listings →
                    </a>
                </div>

                <div className="hero-image">
                    <img
                        src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=80"
                        alt="Dubai skyline"
                    />
                </div>
            </section>

            {/* Featured Listings */}
            <section className="featured">

                <div className="section-header">
                    <h2>Featured Listings</h2>
                    <a href="/search">
                        View All →
                    </a>
                </div>
                <div className="listing-grid">
                    <Banner
                        purpose="Rent A Home"
                        title="Rental homes for everyone"
                        desc="Find comfortable homes in great locations."
                        buttonText="Explore Rentals"
                        linkName="/search?purpose=for-rent"
                        imageUrl="https://mybayutcdn.bayut.com/mybayut/wp-content/uploads/emirates-13.jpg"
                    />
                    <Banner
                        purpose="Buy A Home"
                        title="Houses for Sale"
                        desc="Discover homes that fit your lifestyle."
                        buttonText="Explore Sales"
                        linkName="/search?purpose=for-sale"
                        imageUrl="https://upload.wikimedia.org/wikipedia/commons/e/e1/Zwicker_House_%E2%80%93_Lunenburg%2C_NS_%E2%80%93_%282018-08-29%29.jpg"
                    />
                </div>
            </section>

            {/* Features */}
            <section className="features">
                <div className="feature">
                    <span>⌖</span>
                    <p>Prime Locations</p>
                </div>
                <div className="feature">
                    <span>⌂</span>
                    <p>Trusted Listings</p>
                </div>
                <div className="feature">
                    <span>♡</span>
                    <p>Your Dream, Our Priority</p>
                </div>
            </section>
            <Footer />
        </div>
    );
};