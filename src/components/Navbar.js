import {useEffect} from 'react'
import UserProfile from './UserProfile';

import { MdKeyboardArrowDown } from 'react-icons/md';
import { useStateContext } from '../contexts/ContextProvider';
import { AiOutlineMenu } from 'react-icons/ai';

import { NavbarFlexTW } from "./STYLED/Navbar";
import {Tooltip, Button, Navbar as NavDaisy, Dropdown} from "react-daisyui";
import {signInWithGoogle} from "../Firebase";
import {BiLogIn, BiLogOut} from "react-icons/bi";
import {BsChatLeft} from "react-icons/bs";
import Chat from "./Chat";



const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <Tooltip message={title} position={'bottom'}>
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </Tooltip>
);

const Navbar = () => {
  const { state, updateContext, setShowModal, setDataForModal, login, logout, currentColor, activeMenu, setActiveMenu, handleClick, isClicked, setScreenSize, screenSize } = useStateContext();

  const { academicYears, currentAcademicYear, user} = state

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);
  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  const handleChat = () => {
    setShowModal(true);

    setDataForModal({
      title: 'Messages',
      body: {
        func: Chat,
        data: {},
      },
    });
  };

  console.log('Navbar', currentAcademicYear, academicYears, user)
  return (
      <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans dark:text-gray-400">
        <NavDaisy>
          <NavDaisy.Start >
            <NavButton title="Menu" customFunc={handleActiveMenu} color={currentColor} icon={<AiOutlineMenu />} />
          </NavDaisy.Start>
          <div className="flex-1 ">
            <Dropdown >
              <Dropdown.Toggle color="ghost">{currentAcademicYear?.name || 'Оберіть навчальний рік'}</Dropdown.Toggle>
              <Dropdown.Menu className="w-52">
                {academicYears && academicYears.map(year => <Dropdown.Item key={year.id} onClick={()=>updateContext('SET_CURRENT_YEAR', year)}>{year.name}</Dropdown.Item> )}

              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="flex-none">
            <NavbarFlexTW>
              {!user ? (<>
                <NavButton title={'Вхід'} customFunc={()=>signInWithGoogle(login, {currentAcademicYear})} color={currentColor} icon={<BiLogIn />} />
              </>): (<>
                <NavButton title="Chat" dotColor="#03C9D7" customFunc={handleChat} color={currentColor} icon={<BsChatLeft />} />

                  <div className="tooltip tooltip-bottom" data-tip="Profile">
                <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
                     onClick={() => handleClick('userProfile')}>
                  <img
                      className="rounded-full w-8 h-8"
                      src={user.photoURL}
                      alt="user-profile"
                  />
                  <p>
                    <span className="text-gray-400 text-14">Hi,</span>{' '}
                    <span className="text-gray-400 font-bold ml-1 text-14">
                    {user.displayName}
                  </span>
                  </p>
                  <MdKeyboardArrowDown className="text-gray-400 text-14" />
                </div>

              </div>
                <NavButton title="Вийти" customFunc={() => logout()} color={currentColor} icon={<BiLogOut />} />
              </>)}

              {isClicked.userProfile && (<UserProfile />)}
              {isClicked.chat && (<Chat />)}
            </NavbarFlexTW>
          </div>
        </NavDaisy>
      </div>


  )
}

export default Navbar
