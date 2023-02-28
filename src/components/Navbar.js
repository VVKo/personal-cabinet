import {useEffect} from 'react'
import UserProfile from './UserProfile';

import { MdKeyboardArrowDown } from 'react-icons/md';
import { useStateContext } from '../contexts/ContextProvider';
import { AiOutlineMenu } from 'react-icons/ai';

import { NavbarFlexTW, NavbarTW } from "./STYLED/Navbar";
import {Tooltip, Button, Navbar as NavDaisy, Dropdown} from "react-daisyui";
import {signInWithGoogle} from "../Firebase";
import {BiLogIn, BiLogOut} from "react-icons/bi";

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
  const { state, currentColor, activeMenu, setActiveMenu, handleClick, isClicked, setScreenSize, screenSize, user, setUser, getAcademicYears } = useStateContext();

  const { academicYears, currentAcademicYear} = state

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



  const signIN = () => {
    signInWithGoogle(setUser)
  }
  console.log('Navbar', currentAcademicYear, academicYears, user)
  return (
    <NavbarTW $activeMenu={activeMenu}>
      <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
        <NavDaisy>
          <NavDaisy.Start >
            <NavButton title="Menu" customFunc={handleActiveMenu} color={currentColor} icon={<AiOutlineMenu />} />
          </NavDaisy.Start>
          <div className="flex-1">
            <Dropdown >
              <Dropdown.Toggle color="ghost">{currentAcademicYear || 'Оберіть навчальний рік'}</Dropdown.Toggle>
              <Dropdown.Menu className="w-52">
                {academicYears && academicYears.map(year => <Dropdown.Item key={year.id}>{year.name}</Dropdown.Item> )}

              </Dropdown.Menu>
            </Dropdown>
            <Button className="text-xl normal-case" color="ghost" />
          </div>
          <div className="flex-none">
            <NavbarFlexTW>
              {/*<NavButton title="Cart" customFunc={() => handleClick('cart')} color={currentColor} icon={<FiShoppingCart />} />*/}
              {Object.keys(user).length === 0 ? (<>
              <Button className="text-xl normal-case" onClick={signIN}>
                <BiLogIn />
              </Button>
              </>): (<>
                  <NavButton title="Вийти" customFunc={() => setUser({})} color={currentColor} icon={<BiLogOut />} />
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
              </>)}

              {isClicked.userProfile && (<UserProfile />)}
            </NavbarFlexTW>
          </div>
        </NavDaisy>
      </div>

    </NavbarTW>
  )
}

export default Navbar
