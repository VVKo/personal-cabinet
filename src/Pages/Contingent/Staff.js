import React, {useEffect} from "react";

import Button from "../../components/Button";
import {useStateContext} from "../../contexts/ContextProvider";

import StaffTable from "../../components/tables/StaffTable";
import Spinner from "../../components/Spinner";
import { useLocation } from 'react-router-dom';







const Staff = () => {
    const {pathname} = useLocation()
    console.log('pathname', pathname)

    const {state, currentColor, getStaff } = useStateContext();
    const {staff} = state
    useEffect(()=>{

        if (!staff)  getStaff(pathname)
    },[])
    console.log('Staff', staff)
    // if (!staff) return <Spinner />

    return (
        <div>
            <div className="flex flex-wrap lg:flex-nowrap justify-between ">
                <div className="ml-2">
                    <h2 className="flex justify-center px-2">Співробітники</h2>
                    <h5 className="flex justify-center px-2">Welcome</h5>
                </div>
                <div>
                    <Button
                        color="white"
                        bgColor={currentColor}
                        text="Додати нового співробітника"
                        borderRadius="10px"
                    />
                </div>
            </div>
            {staff && <StaffTable />}
        </div>
    );
};

export default Staff;
