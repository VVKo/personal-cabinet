import React from 'react';
import {MainTW} from "./STYLED/Main";
import {useStateContext} from "../contexts/ContextProvider";

const Main = ({children}) => {
    const { activeMenu } = useStateContext();

    return (
        <MainTW $activeMenu={activeMenu}>
            {children}
        </MainTW>
    );
};

export default Main;
