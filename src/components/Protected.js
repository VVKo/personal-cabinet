import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom"
import {useStateContext} from "../contexts/ContextProvider";
const Protected = () => {
    const { state } = useStateContext();
    const {user} = state
    const location = useLocation()
    if (!user) return <Navigate to="/" state={{ from: location }} />
    switch (user.role) {
        case 'SuperAdmin':
            return <Outlet />
        default:
            return <Navigate to="/" state={{ from: location }} />

    }
};

export default Protected;
