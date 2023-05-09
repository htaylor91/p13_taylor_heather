import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useCreateAuthTokenMutation, useFetchUserProfileMutation} from '../../app/services/api'
import type { Login} from '../../types'

function LoginForm(){
        const navigate = useNavigate()
        const [login] = useCreateAuthTokenMutation();
        const [profile] = useFetchUserProfileMutation();
        const [formState, setFormState] = useState<Login>({email: '', password: ''})

        const handleSubmit = async (e: { preventDefault: () => void }) => {
            e.preventDefault();
        
            try {
                await login(formState).unwrap()
                await profile(undefined).unwrap()
                navigate('/profile')
        
            } catch (error: any) {
                alert(error.data.message)
            } 
        };
    
        const handleChange = ({target: { name, value }}: React.ChangeEvent<HTMLInputElement>) => {
            return setFormState((prev) => ({ ...prev, [name]: value }))
        };
        
        return(
            <form onSubmit={handleSubmit}>
                <div className="input-wrapper">
                    <label htmlFor="email">Username</label>
                    <input 
                        type="email" 
                        id="email"
                        name="email"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        id="password"
                        name="password"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="input-remember">
                    <input 
                        type="checkbox" 
                        id="remember-me" />
                    <label htmlFor="remember-me">Remember me</label>
                </div>
                <button className="sign-in-button" type="submit">Sign In</button>
            </form>
        )
    
}

export default LoginForm