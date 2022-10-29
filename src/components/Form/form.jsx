import { useState } from "react";
import React from "react";
import "./form.css"

const Create = ({onAddBook}) => {
  const blogUrl = "https://fudap-books-api.herokuapp.com/books/";

  const [formData, setFormData ] = useState({
    title: "",
    subtitle:"",
    author:"",
    imgUrl:"assets/five.jpg",
    publisher: "",
    description: "",
  });

  function handleChange(event){
    setFormData({...formData, [event.target.name]: event.target.value,})
  }

  function handleSubmit(event){
    event.preventDefault();

    const addBlogForm = {
       title: formData.title,
   subtitle: formData.subtitle,
    author: formData.author,
     imgUrl:formData.imgUrl,
     publisher:formData.publisher,
     description:formData.description

  }

    fetch(blogUrl, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(addBlogForm)

    })
    .then(response => response.json())
    .then(newBlog => {
      onAddBook(newBlog)
      setFormData({...formData,  title: "", subtitle: "", author:"", imgUrl:"", publisher:"",description:""})
    })
  }

  return (
    <div className="create">
      <h2>New Blog loading!!!! </h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
        name="title"
          type="text"
          required
          value={formData.title}
          onChange={handleChange}
        />
        <label>Blog content:</label>
        <input
        name="subtitle"
        type ="text"
          required
          value={formData.subtitle}
          onChange={handleChange}
        />
        <label>Blog author:</label>
        <select
          value={formData.author}
          onChange={handleChange}
        >
          <option value="Female">Female</option>
          <option value="Male">Male</option>
        </select>
        <button>Add Blog</button>



      </form>
    </div>
  );
}

export default Create;
