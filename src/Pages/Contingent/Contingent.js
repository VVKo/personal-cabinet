import React from 'react';
import {Outlet, Route, Routes, useParams} from "react-router-dom";

import Students from "./Students";
import Staff from "./Staff";

const Contingent = () => {
    const {contingentId} = useParams()
    return (
        <>
            {contingentId}
<Outlet />
        </>
    );
};

export default Contingent;
