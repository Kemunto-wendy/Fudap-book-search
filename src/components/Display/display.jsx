 import React, {useEffect, useState} from "react";
import "./display.css"

const Display = ( ) => {
    const [data, setData] = useState([])

//implemented the get request n
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
                <div className="book">
                <div className="title">
                <h1>{item.title}</h1>
                <h2>{item.subtitle}</h2>
                </div>
                <div  className="publish">
                    <h3>{item.publisher}</h3>
                    <h4>{item.published}</h4>
                    <h5>{item.pages}</h5>
                </div>
                <div className="image">
                <img src={item.imgUrl} alt="cover" />
                </div>
                <div className="author">
                <h4>{item.author}</h4>
                </div>
                </div>

            )
        })
    }

    </div>
    )
}

export default Display
