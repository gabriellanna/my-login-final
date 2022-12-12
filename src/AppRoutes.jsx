import React, { useContext } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import LoginPage from './pages/LoginPage/index';
import HomePage from './pages/HomePage/index';
import { AuthProvider, AuthContext } from "./contexts/auth";


const AppRoutes = () => {
    const Private = ({children}) => {
        const { authenticated, loading } = useContext(AuthContext);

        if (loading) {
            return <div className="loading">Carregando...</div>;
        }

        if (!authenticated) {
            return <Navigate to="/login" />
        }

        return children;
    }

    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route exact path="/login" element={<LoginPage />} />
                    <Route exact path="/" element={<Private><HomePage /></Private>} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    )
}

export default AppRoutes;