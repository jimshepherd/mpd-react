import { useEffect, useState } from 'react';

type ErrorsObject = Partial<{
  [key: string]: string;
}>;



function useErrorMessage(errors: (string|ErrorsObject|null)[]): [string|null, (msg: string) => void] {
  const [errorMessage, setErrorMessage] = useState<string|null>(null);

  useEffect(() => {
    if (errors == null || errors.length === 0) {
      setErrorMessage(null);
      return;
    }
    for (let error of errors) {
      if (typeof error === 'object' && error !== null) {
        const errorMessages = Object.values(error) as string[];
        if (errorMessages.length > 0 && errorMessages[0] != null) {
          setErrorMessage(errorMessages[0]);
          return;
        }
      } else {
        setErrorMessage(error);
        return;
      }
    }
  }, [errors]);

  function setError(message: string) {
    setErrorMessage(message);
  }

  return [errorMessage, setError];
}

export default useErrorMessage;
