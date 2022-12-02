import React from 'react'
import './Login.css';
function Commandes() {
    const handleSubmit = async e => {

    }
  return (
    <div><h3>A L L  C O M M A N D E S</h3>
    <div className="login-wrapper">
        <h1>Add a new commande</h1>
        <form onSubmit={handleSubmit}>
          <label>
            <p>Nom </p>
            <input type="text"/>
          </label>
          <label>
            <p>Prenom</p>
            <input type="text" />
          </label>
          <label>
            <p>adress Mail</p>
            <input type="text" />
          </label>

          <label>
            <p>Book</p>
            <input type="text" />
          </label>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    
    </div>
  )
}

export default Commandes