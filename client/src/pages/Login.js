import { useEffect } from "react";

//components
import LoginForm from "../components/LoginForm";
import BuildingForm from "../components/BuildingForm";

const Login = () => {

    return (
        <div className="login-page-container">
            <div>
                <BuildingForm />
            </div>
        </div>
    )
}

export default Login