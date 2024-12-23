import React from "react";
import "./NewCollections.css";
import new_collection from '../Assets/new_collections';


const NewCollections = () => {

    return (
        <div className="newCollections">
            <h1>New Collections</h1>
            <hr />
            <div className="collections">
                {new_collection.map((item,id)=>{
                     return <item key={id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price} />
                })
                };
            </div>
        </div>
    );
}

export default NewCollections;