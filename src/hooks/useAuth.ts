import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { login } from '@/api/authApi';

export const useAuth = () => {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (username: string, password: string) => {
    setError('');
    setIsLoading(true);
    
    try {
      await login(username, password);
      router.push('/');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to login');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    error,
    isLoading,
    handleLogin,
  };
}; 