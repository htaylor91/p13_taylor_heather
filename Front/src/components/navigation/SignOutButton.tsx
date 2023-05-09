import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/store";
import { resetUser} from "../../features/user/userSlice";
import { logout} from "../../features/auth/authSlice";

function SignOutButton(){
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleSignoutClick = () => {
        dispatch(logout())
        dispatch(resetUser())
        navigate("/")
    }

    return (
        <button type="button" className="sign-out-button" onClick={handleSignoutClick}>
            <span>Sign out</span>
        </button>
    )
}

export default SignOutButton