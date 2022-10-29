 import React, {useEffect, useState} from "react";
import "./display.css"

const Display = ( ) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch("https://fudap-books-api.herokuapp.com/books/")
        .then((resp) =>resp.json())
        .then((apiData) => {
            setData(apiData.book)
        })
    }, [ ])
    return(
        <div className="icon">
        <h1>WELCOME BACK</h1>
        <form>
        <input type="text" id="search" className="search" placeholder="Enter the movie name" />
    </form>
    </div>
    )
}

export default Display
