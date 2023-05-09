import { useTypedSelector } from '../../hooks/store';
import { selectCurrentUser } from './userSlice';
import type { FormEventParam } from '../../types';
import useValidatedInput from '../../hooks/useValidatedInput';
import '../../styles/edituserform.css'

function EditUserForm({ onCancel, onSave }: { onCancel: () => void; onSave: (e: FormEventParam) => Promise<void> }) {
    const user = useTypedSelector(selectCurrentUser);
    const nameRegex = /^(?=.{1,30}$)[a-zA-Z\u00C0-\u017F]+(([',. -][a-zA-Z\u00C0-\u017F ])?[a-zA-Z\u00C0-\u017F]*)*$/;
    const [firstName, firstNameValid, firstNameError, handleFirstNameChange] = useValidatedInput("", (value) => nameRegex.test(value));
    const [lastName, lastNameValid, lastNameError, handleLastNameChange] = useValidatedInput("", (value) => nameRegex.test(value));

    return (
      <form id="editUserForm" onSubmit={onSave}>
        <div className='input-group'>
          <div className='input-wrapper-edit'>
            <label htmlFor="firstName" className='sr-only'>First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              onChange={handleFirstNameChange}
              required
              aria-invalid={!firstNameValid}
              aria-errormessage="firstNameError"
              className={firstNameValid ? 'input-edit' : 'input-edit input-invalid'}
              placeholder={user.firstName || "First Name"}
            />
            {!firstNameValid && (
              <p id="firstNameError" className="error-message" role="alert">
                {firstNameError}
              </p>
              )
            }
          </div>
          <div className='input-wrapper-edit'>
            <label htmlFor="lastName" className='sr-only'>Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              onChange={handleLastNameChange}
              required
              aria-invalid={!lastNameValid}
              aria-errormessage="lastNameError"
              className={lastNameValid ? 'input-edit' : 'input-edit input-invalid'}
              placeholder={user.lastName || "Last Name"}
            />
            {!lastNameValid && (
              <p id="lastNameError" className="error-message" role="alert">
                {lastNameError}
              </p>
              )
            }
          </div>
        </div>
        <div className="buttons-wrapper">
          <button type="submit" className='save-button' disabled={!firstNameValid || !lastNameValid}>
            Save
          </button>
          <button type="reset" className='cancel-button' onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    )
}

export default EditUserForm