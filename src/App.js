
import {FiSettings} from "react-icons/fi";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { ToastContainer } from 'react-toastify';
import {AppStyles, Settings, TooltipBtn} from "./components/STYLED";
import {Tooltip} from "react-daisyui";
import {useStateContext} from "./contexts/ContextProvider";
import {useEffect} from "react";
import Home from "./Pages/Home";

const App = () => {

  return (
    <BrowserRouter>
        <AppStyles>
            <Settings>
                <Tooltip message={"Settings"} >
                    <TooltipBtn
                        type="button"
                        onClick={() => {}}
                        style={{ background: 'black', borderRadius: '50%' }}
                    >
                        <FiSettings />
                    </TooltipBtn>
                </Tooltip>

            </Settings>

            <Sidebar />
            <Navbar />
            <div>
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path="/ecommerce" element={<Home />} />
                </Routes>
            </div>
            <ToastContainer />
        </AppStyles>

    </BrowserRouter>
  );
};

export default App;
