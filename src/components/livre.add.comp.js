import React, { useState } from 'react'
import LivreService from "../services/livre.service";

const AddLivre = () => {
    const initialLivreState = {

        "title": "data",
        "description": "",
        "prix": 0,
        "couverture": "",
        "stock": 0,
        "genre_id": 0,

    };
    const [livre, setLivre] = useState(initialLivreState);
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setLivre({ ...livre, [name]: value });
        alert(name+value)
    };

    const saveLivre = () => {
        var data = {
            title: livre.title,
            description: livre.description,
            prix: livre.prix,
            couverture: livre.couverture,
            stock: livre.stock,
            genre_id: livre.genre_id,
        };

        LivreService.create(data)
            .then(response => {
                setLivre({
                    id: response.data.id,
                    title: response.data.title,
                    description: response.data.description,
                    prix: response.data.prix,
                    couverture: response.data.couverture,
                    stock:response.data.stock,
                    genre_id: response.data.genre_id,
                });
                setSubmitted(true);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const newLivre = () => {
        setLivre(initialLivreState);
        setSubmitted(false);
    };

    return (
        <div className="submit-form">
          {submitted ? (
            <div>
              <h4>You submitted successfully!</h4>
              <button className="btn btn-success" onClick={newLivre}>
                Add
              </button>
            </div>
          ) : (
            <div>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  required
                  value={livre.title}
                  onChange={handleInputChange}
                  name="title"
                />
              </div>
              <div className="form-group">
                <label htmlFor="c">couverture</label>
                <input
                  type="text"
                  className="form-control"
                  id="c"
                  required
                  value={livre.couverture}
                  onChange={handleInputChange}
                  name="c"
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  required
                  value={livre.description}
                  onChange={handleInputChange}
                  name="description"
                />
              </div>
              <div className="form-group">
                <label htmlFor="price">Price</label>
                <input
                  type="number"
                  className="form-control"
                  id="price"
                  required
                  value={livre.prix}
                  onChange={handleInputChange}
                  name="price"
                />
              </div>
              <div className="form-group">
                <label htmlFor="stock">stock</label>
                <input
                  type="number"
                  className="form-control"
                  id="stock"
                  required
                  value={livre.stock}
                  onChange={handleInputChange}
                  name="stock"
                />
              </div>
              <button onClick={saveLivre} className="btn btn-success">
                Submit
              </button>
            </div>
          )}
        </div>
      );
};







export default AddLivre;