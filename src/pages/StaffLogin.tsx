import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock } from 'lucide-react';

export function StaffLogin() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple redirect without actual authentication
    navigate('/');
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
              <p className="text-center text-gray-600">
                スタッフログイン機能は現在無効化されています
              </p>
              <button
                type="submit"
                className="w-full bg-red-800 text-white py-3 rounded-md hover:bg-red-900 transition"
              >
                ホームに戻る
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default { StaffLogin };