
import {FiSettings} from "react-icons/fi";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { ToastContainer } from 'react-toastify';
import {AppStyles, Settings, TooltipBtn} from "./components/STYLED";
import {Tooltip} from "react-daisyui";
import Home from "./Pages/Home";
import Main from "./components/Main";
import Footer from "./components/Footer";
import React, {useEffect} from "react";
import {useStateContext} from "./contexts/ContextProvider";
import ThemeSettings from "./components/ThemeSettings";
import Protected from "./components/Protected";
import Test from "./Pages/Test";
import Students from "./Pages/Contingent/Students";
import Staff from "./Pages/Contingent/Staff";
import Config from './Pages/Config/Config'
import Contingent from "./Pages/Contingent/Contingent";
import Roles from "./Pages/Config/Roles";
import ModalLayot from "./components/layouts/Modal/ModalLayot";

const App = () => {
    const {state, setCurrentColor, setCurrentMode, currentMode, currentColor, themeSettings, setThemeSettings } = useStateContext();
    console.log('APP', state)
    useEffect(() => {
        const currentThemeColor = localStorage.getItem('colorMode');
        const currentThemeMode = localStorage.getItem('themeMode');
        if (currentThemeColor && currentThemeMode) {
            setCurrentColor(currentThemeColor);
            setCurrentMode(currentThemeMode);
        }
    }, []);
  return (
      <div className={currentMode === 'Dark' ? 'dark' : ''}>
    <BrowserRouter>
        <AppStyles>
            <Settings>
                <Tooltip message={"Налаштування"} >
                    <TooltipBtn
                        type="button"
                        onClick={() => setThemeSettings(true)}
                        style={{ background: currentColor, borderRadius: '50%' }}
                    >
                        <FiSettings />
                    </TooltipBtn>
                </Tooltip>

            </Settings>

            <Sidebar />
            <Main>
                <Navbar />

                    {themeSettings && (<ThemeSettings />)}
                    <Routes>
                        <Route path='/' element={<Home />}/>
                        <Route path="/ecommerce" element={<Protected/>} >
                            <Route path='/ecommerce' element={<Test />}/>
                        </Route>
                        <Route path="/config" element={<Protected/>} >
                            <Route path='/config' element={<Config />}>
                                <Route path='roles' element={<Roles />}/>
                            </Route>
                        </Route>
                        <Route path="/contingent" element={<Protected/>} >
                            <Route path='/contingent' element={<Contingent />}>
                                <Route path='students' element={<Students />}/>
                                <Route path='staff' element={<Staff />}/>
                            </Route>
                        </Route>

                        <Route path='/*' element={<Home />}/>
                    </Routes>

                <Footer />
            </Main>
            <ToastContainer />
            <ModalLayot />
        </AppStyles>

    </BrowserRouter>
      </div>
  );
};

export default App;
