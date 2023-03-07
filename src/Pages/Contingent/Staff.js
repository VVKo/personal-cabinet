
import DataGrid from 'react-data-grid'
import Button from "../../components/Button";
import {useStateContext} from "../../contexts/ContextProvider";
import {useEffect} from "react";
import Spinner from "../../components/Spinner";



const columns = [
    { key: 'id', name: 'ID' },
    { key: 'title', name: 'Title' }
];

const rows = [
    { id: 0, title: 'Example' },
    { id: 1, title: 'Demo' }
];
const Staff = () => {
    const {state, getStaff, currentColor, currentMode  } = useStateContext();
    const {staff} = state
    useEffect(()=>{

        if (!staff)  getStaff()
    },[])
    console.log('Staff', staff)
    if (!staff) return <Spinner />

    return (
        <div>
            <div className="flex flex-wrap lg:flex-nowrap justify-between ">
                <div>
                    <h2>Співробітники</h2>
                    <h5>Welcome</h5>
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
            {staff && <DataGrid columns={staff.columns} rows={staff.rows} />}
        </div>
    );
};

export default Staff;
