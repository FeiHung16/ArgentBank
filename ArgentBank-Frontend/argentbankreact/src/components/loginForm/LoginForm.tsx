import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { useNavigate } from 'react-router-dom';
import { selectError, selectIsAuthenticated, selectLoading } from '../../redux/feature/authSelector';
import { loginUser } from '../../redux/feature/authActions';




export const LoginForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const dispatch = useAppDispatch(); 
    const navigate = useNavigate();

    const error = useAppSelector(selectError);
    const loading = useAppSelector(selectLoading);
    const isAuthenticated = useAppSelector(selectIsAuthenticated);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Dispatch login action here
        dispatch(loginUser({ email, password, rememberMe }));
    };

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/profile'); // Rediriger vers la page de profil après une connexion réussie
        }
    }, [isAuthenticated, navigate]);

    return (
        <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <div className="input-wrapper">
                    <label htmlFor="username">Username</label>
                    <input
                        type="email"
                        id="username"
                        autoComplete="user-name"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="input-remember">
                    <input
                        type="checkbox"
                        id="remember-me"
                        checked={rememberMe}
                        onChange={() => setRememberMe(!rememberMe)} // In case of rememberMe checked, we send inverted response of initial state
                    />
                    <label htmlFor="remember-me">Remember me</label>
                </div>
                <button className="sign-in-button" type="submit">
                    {loading ? "Loading..." : "Sign In"}
                </button>
                {error && <p style={{ color: "red" }}>{error}</p>}
            </form>
        </section>
    );
}