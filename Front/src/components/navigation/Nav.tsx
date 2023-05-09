import { NavLink } from "react-router-dom";
import { Children } from "react";
import argentBankLogo from '../../assets/argentBankLogo.png';
import '../../styles/Nav.css'

function Nav({children}:{children?: React.ReactNode}){

    return (
        <nav className="main-nav">
            <NavLink
                to="/"
                className="main-nav-logo"
            >
                <img
                className="main-nav-logo-image"
                src={argentBankLogo}
                alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>
            <ul className="main-nav-list">
                {Children.map(children, (child) => (
                    <li>{child}</li>
                ))}
            </ul>
        </nav>
    )
}

export default Nav