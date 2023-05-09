import { useState } from 'react';

type ValidatorFunction = (value: string) => boolean;

/**
 * Custom hook to validate form input
 */
function useValidatedInput(
    initialValue: string,
    validator: ValidatorFunction
    ): [string, boolean, string, (e: React.ChangeEvent<HTMLInputElement>) => void] {
    
    const [value, setValue] = useState<string>(initialValue);
    const [isValid, setIsValid] = useState<boolean>(true);
    const [error, setError] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        const valid = validator(inputValue);

        setValue(valid ? inputValue : "");
        setIsValid(valid);
        setError(valid ? "" : "Invalid input");
    };

    return [value, isValid, error, handleChange];
}

export default useValidatedInput;
