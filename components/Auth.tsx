import React, { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import Button from './Button';
import { Lock, Mail, Loader } from 'lucide-react';

const Auth: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage(null);

        const { error } = await supabase.auth.signInWithOtp({
            email,
            options: {
                // This assumes the app is running on localhost:5173 for development.
                // In production, this URL needs to be added to Supabase Allow List.
                emailRedirectTo: window.location.origin,
            }
        });

        if (error) {
            setMessage({ type: 'error', text: error.message });
        } else {
            setMessage({ type: 'success', text: 'Link de login enviado para seu e-mail!' });
        }
        setLoading(false);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full border border-gray-200">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-corporate-petrol/10 mb-4">
                        <Lock className="text-corporate-petrol" size={24} />
                    </div>
                    <h1 className="text-2xl font-light text-corporate-dark">Área Restrita</h1>
                    <p className="text-gray-500 mt-2 text-sm">Digite seu e-mail para acessar via Magic Link</p>
                </div>

                {message && (
                    <div className={`p-4 mb-6 text-sm rounded ${message.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                        {message.text}
                    </div>
                )}

                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Mail className="text-gray-400" size={18} />
                            </div>
                            <input
                                id="email"
                                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-corporate-petrol focus:border-corporate-petrol sm:text-sm transition duration-150 ease-in-out"
                                type="email"
                                placeholder="seu@email.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-corporate-petrol hover:bg-corporate-dark focus:outline-none focus:border-corporate-dark focus:shadow-outline-indigo active:bg-corporate-dark transition duration-150 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? <Loader className="animate-spin" size={20} /> : 'Enviar Link de Acesso'}
                    </button>
                </form>

                <div className="mt-6 text-center">
                    <p className="text-xs text-gray-400">
                        Apenas usuários autorizados.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Auth;
