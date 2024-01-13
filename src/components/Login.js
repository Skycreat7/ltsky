import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

function Login() {
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleLogin = () => {
        login(() => navigate('/dashboard'));
    };

    return (
        <section>
            <div>
                <h1>Login</h1>
                <p>Not Logged In huh?</p>
                <button onClick={handleLogin}>Login</button>
            </div>
        </section>
    );
}

export default Login;
