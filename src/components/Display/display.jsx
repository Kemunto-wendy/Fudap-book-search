 import React, {useEffect, useState} from "react";
import "./display.css"

const Display = ( ) => {
    const [data, setData] = useState([])

    useEffect(() => {
        const url = "https://fudap-books-api.herokuapp.com/books/"
        fetch(url)
        .then((response) =>
        response.json()).then(json => {
            console.log("jsonn", json)
            setData(json)
        }).catch(e =>{
            console.log("e", e)
        })
        } , [ ])
    return(
        <div className="icon">
        <h1>ARE YOU A BOOK LOVER!</h1>
        <form>
        <input type="text" id="search" className="search" placeholder="Enter book name" />
    </form>
    {
        data.map(item => {
            return(
                <div>{item.title}</div>
            )
        })
    }

    </div>
    )
}

export default Display
