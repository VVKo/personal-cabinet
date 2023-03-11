import React from 'react';
import {Outlet, Route, Routes, useParams} from "react-router-dom";

import Students from "./Students";
import Staff from "./Staff";

const Contingent = () => {

    return (
        <>
            <h1>Контингент</h1>
            <Routes>
                <Route path='students' element={<Students />}/>
                <Route path='staff' element={<Staff />}/>
            </Routes>
        </>
    );
};

export default Contingent;
