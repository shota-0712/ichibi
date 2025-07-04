import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock } from 'lucide-react';
import { supabase } from '../lib/supabase';

export function StaffLogin() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const { data, error } = await supabase.auth.signInWithPassword({
      email: 'staff@ichimi.com',
      password: 'ichimi2024'
    });

    setIsLoading(false);

    if (error) {
      setError('ログインに失敗しました');
      return;
    }

    if (data.user) {
      navigate('/staff-dashboard');
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-sm">
          <div className="flex justify-center mb-6">
            <div className="bg-stone-100 p-4 rounded-full">
              <Lock className="h-8 w-8 text-stone-600" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-center mb-8">従業員ログイン</h1>
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              {error && (
                <p className="text-sm text-red-600">{error}</p>
              )}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-red-800 text-white py-3 rounded-md hover:bg-red-900 transition disabled:opacity-50"
              >
                {isLoading ? 'ログイン中...' : 'ログイン'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}