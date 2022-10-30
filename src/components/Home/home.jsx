import React from "react";
import "./home.css"
import THREE from "../../assets/four.jpg"


const Home = ( ) => {
{/*const [search, setSearch] = useState ("")*/}
    return (
        <div className="bar">
            <h1>ARE YOU A BOOK LOVER !</h1>
            <img src={THREE}  alt=""/>
            <p>“If you only read the books that everyone else is reading, you can only think what everyone else is thinking.”
            ― Haruki Murakami, Norwegian Wood</p>
            <div className="bar">
            {/*<input type="text" placeholder="Search Book......" onChange={event => {setSearch(event.target.value)}} />*/}

                        </div>
            </div>
    )
    }


export default Home
