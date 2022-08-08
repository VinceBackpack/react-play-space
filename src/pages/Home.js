import './Home.css';
import React from "react";
import { NavBar } from '../components/NavBar';
import { Banner } from '../components/Banner';

export const Home = () => {
    return(
        <div>
            <NavBar />
            <div className="homepage">
            <Banner 
                purpose="Rent A Home"
                title="Rental homes for everyone"
                desc="description"
                buttonText="Explore Renting"
                // linkName="/search?purpose=for-rent"
                imageUrl="https://mybayutcdn.bayut.com/mybayut/wp-content/uploads/emirates-13.jpg"
            />

            <Banner 
                purpose="Buy A Home"
                title="Houses for Sale"
                desc="description"
                buttonText="Explore Sales"
                // linkName="/search?purpose=for-sale"
                imageUrl="https://mybayutcdn.bayut.com/mybayut/wp-content/uploads/emirates-13.jpg"
            />
            </div>
         </div>
    );
}