import React, {createContext, useContext, useState, useReducer, useEffect} from 'react';
import ContextReducer from "./ContextReducer";
import {postDataFromAPI} from "../data/Utils";



const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
  loading: false,
  showModal: false,
    dataForModal: {
        title: 'title',
        body: { func: '', data: {} },
    },
};

const cury = new Date().getFullYear()
const curm = new Date().getMonth()

const curacyear = `${curm > 7 ? cury : cury - 1}-${curm > 7 ? cury + 1 : cury}`
export const ContextProvider = ({ children }) => {
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState('#03C9D7');
  const [currentMode, setCurrentMode] = useState('Light');
  const [themeSettings, setThemeSettings] = useState(false);
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);

  const [state, dispatch] = useReducer(ContextReducer,initialState)
  const updateContext = (type, payload) =>
      dispatch({
        type,
        payload,
      });
  const setLoading = (msg, newtoast) => {
      dispatch({ type: 'SET_LOADING', payload: { msg, newtoast } })};
  const updateToast = (status, newtoast) =>
      dispatch({
        type: 'UPDATE',
        payload: {
          loading: false,
          status,
          newtoast,
        },
      });

  const setShowModal = val => dispatch({ type: 'SET_SHOWMODAL', payload: val });
    const setDataForModal = obj =>
        dispatch({ type: 'SET_DATAFORMODAL', payload: obj });
  const login = (obj) => {
    updateContext('LOGIN', {...obj})
  }
  const logout = () => {
    updateContext('LOGOUT', {})
  }

  const getAcademicYears = () => {
    const toastName = 'toastGETLISTOFACADEMICYEARS';
    const API = 'CRUD_API';
    const action = 'GETLISTOFACADEMICYEARS';
    setLoading('Завантажуємо навчальні роки ...', toastName);
    postDataFromAPI(API, action, {}).then(resp => {
      updateContext(action, resp.data);
      updateToast(resp.status, toastName);
      updateContext('SET_CURRENT_YEAR', resp.data.filter(y => y.name === curacyear)[0])
    });
  };

  // TODO зробити getter
  const getStaff = (pathname) => {
    const toastName = 'toastGETSTAFF';
    const API = 'CRUD_API';
    const action = 'GETSTAFF';
    setLoading('Завантажуємо співробітників ...', toastName);
    const {token} = state.user
      const xlsId = state.user.links.filter(obj => {
          return obj.links.filter(ll => ll.path === pathname).length !== 0
      })[0].links.filter(obj => obj.path === pathname)[0].id
    postDataFromAPI(API, action, {token, data:{xlsId}}).then(resp => {
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
    console.log('ContextProvider', 'getAcademicYears')
    getAcademicYears()
  },[])

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider
        value={{
          state,
          updateContext,
          login,
          logout,
          getAcademicYears,
          getStaff,
          currentColor,
          currentMode,
          activeMenu,
          screenSize,
          setScreenSize,
          handleClick,
          isClicked,
          initialState,
          setIsClicked,
          setActiveMenu,
          setCurrentColor,
          setCurrentMode,
          setMode,
          setColor,
          themeSettings,
          setThemeSettings,
          setShowModal,
            setDataForModal
    }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
