import React, { useState, useEffect } from 'react'
import axios from "axios"
function AllGenres() {
    const [genres, setGenres] = useState([]);

    useEffect(() => {

        axios.get("http://localhost:8080/allGenres").then((response) => {

            setGenres(response.data)
        },
        
        )
    }, [])
   
    return (
        <div><h3>A L L   G E N R E S</h3>
            <br>
            </br>
<hr></hr>



<div class="container text-center">
  <div class="row row-cols-4">
  {genres.map((g) =>
                    <div class="col"key={g.id}>
                        <div class="card" >
      
                           
                                <div className="card-body">
                                    <h5 className="card-title">{g.titre}</h5>
                                    


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

export default AllGenres