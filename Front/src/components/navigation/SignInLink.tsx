import { NavLink } from "react-router-dom";

function SignInLink(){
    return (
        <NavLink
        to="/login"
        className={({ isActive, isPending }) =>
            isPending ? "pending main-nav-item" : isActive ? "active main-nav-item" : "main-nav-item"
        }
        >
        Sign in
        </NavLink>
    )
}

export default SignInLink