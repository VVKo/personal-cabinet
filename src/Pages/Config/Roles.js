import React from "react";
import Button from "../../components/Button";
import {useStateContext} from "../../contexts/ContextProvider";

const Roles = () => {
    const { currentColor } = useStateContext();
    return (
        <div className="mt-4">
            <div className="flex flex-wrap lg:flex-nowrap justify-between ">
                <div>
                    <h2>HOME</h2>
                    <h5>Welcome</h5>
                </div>
                <div>
                    <Button
                        color="white"
                        bgColor={currentColor}
                        text="Download"
                        borderRadius="10px"
                    />
                </div>
            </div>
            Roles
        </div>
    );
};

export default Roles;
