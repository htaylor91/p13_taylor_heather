import {useState} from 'react'
import type { UserProfile } from '../../types';
import {selectCurrentUser } from './userSlice';
import { useTypedSelector } from '../../hooks/store';
import { useUpdateUserProfileMutation } from '../../app/services/api';
import EditUserForm from './EditUserForm'
import SignOutButton from '../../components/navigation/SignOutButton'
import UserAccounts from '../../components/accounts/UserAccounts'
import Nav from '../../components/navigation/Nav'
import ProfileLink from '../../components/navigation/ProfileLink'
import '../../styles/profile.css'

function ProfilePage() {
    const user = useTypedSelector(selectCurrentUser)
    const [updateProfile] = useUpdateUserProfileMutation()
    const [isEditing, setIsEditing] = useState(false)

    const handleEditClick = () => {
        setIsEditing(true)
    };

    const handleCancelClick = () => {
        const form = document.getElementById('editUserForm') as HTMLFormElement
        setIsEditing(false)
        form.reset()
    };

    const handleSaveClick = async (e: { preventDefault: () => void; currentTarget: HTMLFormElement }) => {
        e.preventDefault()
        const form = e.currentTarget
        const formData = new FormData(form)
        const editedFormData = Object.fromEntries(formData)
    
        const updatedUser: UserProfile = {
            firstName: editedFormData.firstName as string,
            lastName: editedFormData.lastName as string,
        };
        
        await updateProfile(updatedUser).unwrap()

        form.reset()
        setIsEditing(false);
    };

    return user && (
        <>
            <Nav>
                <ProfileLink>{user.firstName}</ProfileLink>
                <SignOutButton/>
            </Nav>
            <main className="main bg-dark">
                <header className="header">
                    <h2>
                        Welcome back
                        <br />
                        {!isEditing &&
                            <span id='welcome-name'>{user.firstName} {user.lastName}!</span>
                        }
                        
                    </h2>

                    {isEditing ? (
                    <EditUserForm onCancel={handleCancelClick} onSave={handleSaveClick} />
                    ) : (
                        <button id="edit-name-button" className="edit-button" type="button" onClick={handleEditClick}>Edit Name</button>
                    )}
                </header>
                <UserAccounts/>
            </main>
        </>
    )
}

export default ProfilePage