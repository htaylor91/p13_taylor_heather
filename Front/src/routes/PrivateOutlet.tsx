import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

function PrivateOutlet(){
    const token = useAuth()
    const location = useLocation();

    return token ? (
        <Outlet/>
    ) : (
        <Navigate to="/login" state={{ from: location }} />
    )
}

export default PrivateOutlet