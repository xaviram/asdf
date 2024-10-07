import React, { useState } from 'react';
import { Mail, Lock, ChevronLeft, Search } from 'lucide-react';

const LoginPage = () => {
  const [isPasswordScreen, setIsPasswordScreen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login submitted', { email, password });
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="flex-1 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')"}}>
        {/* Background image */}
      </div>
      <div className="w-full max-w-md bg-white p-8 shadow-lg">
        <div className="mb-8 flex items-center justify-between">
          <img src="https://www.e-e.ad/images/logo-comu-escaldes.svg" alt="Comú d'Escaldes-Engordany" className="h-12" />
          {isPasswordScreen && (
            <button onClick={() => setIsPasswordScreen(false)} className="text-blue-600 flex items-center">
              <ChevronLeft className="w-4 h-4 mr-1" />
              Atrás
            </button>
          )}
        </div>
        <h2 className="text-2xl font-bold mb-6">
          {isPasswordScreen ? 'Escribir contraseña' : 'Iniciar sesión'}
        </h2>
        <form onSubmit={handleSubmit}>
          {!isPasswordScreen ? (
            <>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Correo electrónico, teléfono o Skype
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="email"
                    className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Mail className="absolute right-3 top-2.5 text-gray-400 w-5 h-5" />
                </div>
              </div>
              <div className="mb-6">
                <a href="#" className="text-sm text-blue-600 hover:underline">
                  ¿No puede acceder a su cuenta?
                </a>
              </div>
              <button
                type="button"
                onClick={() => setIsPasswordScreen(true)}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Siguiente
              </button>
            </>
          ) : (
            <>
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Contraseña
                </label>
                <div className="relative">
                  <input
                    type="password"
                    id="password"
                    className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <Lock className="absolute right-3 top-2.5 text-gray-400 w-5 h-5" />
                </div>
              </div>
              <div className="mb-6">
                <a href="#" className="text-sm text-blue-600 hover:underline">
                  He olvidado mi contraseña
                </a>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Iniciar sesión
              </button>
            </>
          )}
        </form>
        <div className="mt-6">
          <button className="text-sm text-gray-600 flex items-center">
            <Search className="w-4 h-4 mr-1" />
            Opciones de inicio de sesión
          </button>
        </div>
        <div className="mt-8 text-center text-sm text-gray-600">
          Comú d'Escaldes-Engordany
        </div>
      </div>
    </div>
  );
};

export default LoginPage;