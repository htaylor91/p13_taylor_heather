import { NavLink } from "react-router-dom"

function ProfileLink({children}: {children: React.ReactNode}) {
    return (
        <NavLink
        to="/profile"
        className={({ isActive, isPending }) =>
            isPending ? "pending main-nav-item" : isActive ? "active main-nav-item" : "main-nav-item"
        }
    >
        <span>{children}</span>
    </NavLink>
    )
}

export default ProfileLink