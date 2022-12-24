import React, { useState, useEffect } from 'react'
import axios from "axios"
import { url } from './utils';
function AllLivres() {
    const [books, setBook] = useState([]);
    const [genres, setGenres] = useState([]);

    useEffect(() => {

        axios.get(`${url}/allLivres`).then((response) => {

            setBook(response.data)
        });
        axios.get(`${url}/allGenres`).then((response) => {

            setGenres(response.data)
        },
        )}, [])
   
    return (
        <div><h3>A L L   B O O K S</h3>
         
<hr></hr>


{genres.map((g) =><p>{ g.name}</p>)}
<div class="container text-center">
  <div class="row row-cols-5">
  {books.map((book) =>
                    <div class="col"key={book.id}>
                        <div class="card" >
      
                            <img src={book.couverture} class="card-img-top" alt="..."></img>
   
                                <div className="card-body">
                                    <h5 className="card-title">{book.titre}</h5>
                                    <p classname="card-text">{book.description}</p>
                                    <p classname="card-text">💰 {book.prix} $</p>


                                </div>
                        </div>  
                        <button  type="button" class="btn btn-danger">Delete</button>      
                        <button type="button" class="btn btn-success">Update</button>
                        </div>
                )}
    {/* <div class="col">Column</div> */}
  </div>
</div>






         
          
        </div>

    )
}

export default AllLivres