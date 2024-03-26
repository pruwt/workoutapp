import { useState } from 'react';
import { useAuthContext } from './useAuthContext';

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // Initialize isLoading to false
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    try {
      console.log('Fetching login response...');
      const response = await fetch('/api/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      console.log('Response received:', response);

      if (!response.ok) {
        throw new Error('Login failed'); // Throw a custom error
      }

      const json = await response.json();
      console.log('Response JSON:', json);

      localStorage.setItem('user', JSON.stringify(json));
      dispatch({ type: 'LOGIN', payload: json });
    } catch (error) {
      console.error('Login error:', error);
      setError(error.message || 'An error occurred while logging in');
    } finally {
      setIsLoading(false); // Always set loading to false, even in case of errors
    }
  };

  return { login, isLoading, error };
};
