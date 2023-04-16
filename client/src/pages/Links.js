import { useEffect } from "react";

//components
import LoginForm from "../components/LoginForm";
import BuildingForm from "../components/BuildingForm";
import FacilityLinks from "../components/LoginForm";

const Facility = () => {

    return (
        <div className="login-page-container">
            <div>
                <FacilityLinks />
            </div>
        </div>
    )
}

export default Facility