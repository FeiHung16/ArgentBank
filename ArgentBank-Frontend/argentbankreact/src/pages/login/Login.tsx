import React from 'react';
import { Footer } from '../../components/footer/Footer';
import { Navigation } from '../../components/navigation/Navigation';
import { LoginForm } from '../../components/loginForm/LoginForm';



export const Login: React.FC = () => {
    return (
        <div className="login-container">
            <Navigation />
            <main className="main-login bg-dark">
                <LoginForm />
            </main>
            <Footer />
        </div>
    );
}