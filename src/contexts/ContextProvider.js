import {createContext, useContext, useState, useReducer, useEffect} from 'react';
import ContextReducer from "./ContextReducer";
import {postDataFromAPI} from "../data/Utils";

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
  loading: false,
};

export const ContextProvider = ({ children }) => {
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState('#03C9D7');
  const [currentMode, setCurrentMode] = useState('Light');
  const [themeSettings, setThemeSettings] = useState(false);
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [user, setUser] = useState({})

  const [state, dispatch] = useReducer(ContextReducer,initialState)
  const updateContext = (type, payload) =>
      dispatch({
        type,
        payload,
      });
  const setLoading = (msg, newtoast) =>
      dispatch({ type: 'SET_LOADING', payload: { msg, newtoast } });
  const updateToast = (status, newtoast) =>
      dispatch({
        type: 'UPDATE',
        payload: {
          loading: false,
          status,
          newtoast,
        },
      });

  const getAcademicYears = () => {
    const toastName = 'acYears';
    const API = 'CRUD_API';
    const action = 'GETLISTOFACADEMICYEARS';
    setLoading('Завантажуємо навчальні роки ...', toastName);
    postDataFromAPI(API, action, {}).then(resp => {
      updateContext(action, resp.data);
      updateToast(resp.status, toastName);
    });
  };
  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem('themeMode', e.target.value);
  };


  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem('colorMode', color);
  };

  const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });
  useEffect(()=>{
    console.log('ContextProvider')
    getAcademicYears()
  },[])
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider value={{ state, user, getAcademicYears, setUser, currentColor, currentMode, activeMenu, screenSize, setScreenSize, handleClick, isClicked, initialState, setIsClicked, setActiveMenu, setCurrentColor, setCurrentMode, setMode, setColor, themeSettings, setThemeSettings }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
