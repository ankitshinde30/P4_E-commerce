import React from "react";
import Hero from "../components/Hero/Hero";
import Popular from "../components/Popular/Popular";
import Offer from "../components/Offers/Offer";
import NewCollections from "../components/NewCollections/NewCollections";

const Shop = () => {
    return (
        <div>
            <Hero />
            <Popular/>
            <Offer/>
            <NewCollections/>
        </div>
    );
}

export default Shop;