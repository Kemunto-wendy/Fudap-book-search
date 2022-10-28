import React from "react";
import "./home.css"
import SIX from "../../assets/six.jpg"
import Social from "../Social/social";

const Home = ( ) => {

    return (
        <div className="bar">
            <h1>BOOK HUB</h1>
            <img src={SIX}  alt="background picture" />
            <p>“If you only read the books that everyone else is reading, you can only think what everyone else is thinking.”
            ― Haruki Murakami, Norwegian Wood</p>
            <Social />
            <a href="#display" class="btn">Available Books</a>

            </div>
    )
    }


export default Home
