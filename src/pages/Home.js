import './Home.css';
import React from "react";
import { NavBar } from '../components/NavBar';
import { Banner } from '../components/Banner';
import { Footer } from '../components/Footer/Footer';

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
                linkName="/search?purpose=for-rent"
                imageUrl="https://mybayutcdn.bayut.com/mybayut/wp-content/uploads/emirates-13.jpg"
            />

            <Banner 
                purpose="Buy A Home"
                title="Houses for Sale"
                desc="description"
                buttonText="Explore Sales"
                linkName="/search?purpose=for-sale"
                imageUrl="https://upload.wikimedia.org/wikipedia/commons/e/e1/Zwicker_House_%E2%80%93_Lunenburg%2C_NS_%E2%80%93_%282018-08-29%29.jpg"
            />
            </div>
            <Footer />
         </div>
    );
}