// add state
import { useState } from "react"
// add login context


const LoginForm = () => {

    return (
        <div className="login-form-container">
            <h2>testing login</h2>
            <form>
                <label>Username</label>
                <input
                    type='text'
                // onchange set username
                // value = {username}
                />
                {/* todo: other labels, this is just for tesing the login 
                component to make sure the login will show up.*/}
            </form>
        </div>
    )
}

export default LoginForm