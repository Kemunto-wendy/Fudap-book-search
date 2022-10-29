import React from "react";
import "./home.css"
import THREE from "../../assets/four.jpg"
import Social from "../Social/social";

const Home = ( ) => {


    return (
        <div className="bar">
            <h1>BOOK HUB</h1>
            <Social />
            <img src={THREE}  alt=""/>
            <p>“If you only read the books that everyone else is reading, you can only think what everyone else is thinking.”
            ― Haruki Murakami, Norwegian Wood</p>

            </div>
    )
    }


export default Home
