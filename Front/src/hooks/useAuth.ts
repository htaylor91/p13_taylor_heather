import { useMemo } from 'react'
import { selectCurrentToken} from '../features/auth/authSlice'
import { useTypedSelector } from './store'

/**
 * A custom hook to check for an auth token before allowing user to navigate to the Private Outlet
 */
export const useAuth = () => {
    const token = useTypedSelector(selectCurrentToken)
    return useMemo(() => (token), [token])
}