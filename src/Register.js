import React from 'react'

function Register() {
    return (
        <div>
            <hr></hr>
            RE G I S T E R
            <hr></hr>
            <input type="text" placeholder='name' ></input>
            <br></br>
            <br></br><br></br>
            <input type="text" placeholder='email' ></input>
            <br></br>
            <br></br><br></br>
            <input type="text" placeholder='password' ></input>
            <br></br>
            <br></br><br></br>
            <input type="text" placeholder='repeat password' ></input>

            <br></br>
            <br></br><br></br>
            <button type="button" class="btn btn-info">Register </button>
            <br></br>
            <br></br><br></br>
            <button type="button" class="btn btn-link">have an account?</button>
        </div>
    )
}

export default Register