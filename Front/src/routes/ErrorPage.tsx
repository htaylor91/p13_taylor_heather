import { NavLink } from "react-router-dom";

function ErrorPage(){
    return (
        <main className="main error-page">
            <h1>Page not found</h1>
            <NavLink to="/">Return to Argent Bank home page</NavLink>
        </main>
        
    )
}

export default ErrorPage