import { useCallback, useEffect, useState } from 'react';

function useValidation(input) {
  const [validation, setValidation] = useState(true);

  const checkInputValidation = useCallback(() => {
    const { name, email, password } = input;
    const MIN_NAME_LENGTH = 12;
    const MIN_PASS_LENGTH = 6;
    const re = /\S+@\S+\.\S+/;

    if (
      (Object.keys(input).includes('name') && name.length < MIN_NAME_LENGTH)
      || (Object.keys(input).includes('email') && !re.test(email))
      || (Object.keys(input).includes('password') && password.length < MIN_PASS_LENGTH)
    ) {
      return false;
    }

    return true;
  }, [input]);

  useEffect(() => {
    let control = true;
    if (control) setValidation(checkInputValidation());

    return () => {
      control = false;
    };
  }, [checkInputValidation]);

  return validation;
}

export default useValidation;
