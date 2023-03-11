import React from "react";
import { Link, NavLink } from 'react-router-dom';
import {MdOutlineCancel} from 'react-icons/md'
import { SiShopware } from 'react-icons/si';


import { useStateContext } from '../contexts/ContextProvider';
import {SidebarBody, SidebarContainer, SidebarHeader, SidebarWrap} from "./STYLED";
import {Tooltip} from "react-daisyui";
import {SidebarCategoryStyles} from "./STYLED/Sidebar";
import { IconsMaker } from "../data/dummy";




const Sidebar = () => {
  const { state, currentColor, activeMenu, setActiveMenu, screenSize } = useStateContext();
  const { user } = state
  console.log('Sidebar', user)
  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };
  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';
  return (
      <SidebarWrap $activeMenu={activeMenu}>
      <SidebarContainer>
      {activeMenu && (
        <>
          <SidebarHeader>
            <Link to="/" onClick={()=>{}} className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900">
              <SiShopware /> <span>Кабінет</span>
            </Link>
            <Tooltip message={"Menu"} position="bottom">
              <button
                type="button"
                onClick={() => setActiveMenu(!activeMenu)}
                style={{ color: currentColor }}
                className="text-xl rounded-full hover:bg-light-gray md:hiddenp-3 mt-4 block "
              >
                <MdOutlineCancel />
              </button>
            </Tooltip>
          </SidebarHeader>
          <SidebarBody>
            {user && user.role !== 'guest' ? user.links.map((item) => (
              <div key={item.title}>
                <SidebarCategoryStyles>
                  {item.title}
                </SidebarCategoryStyles>
                {item.links.map((link) => (
                  <NavLink
                    to={link.path}
                    key={link.path}
                    onClick={()=>{}}
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? currentColor : '',
                    })}
                    className={({ isActive }) => (isActive ? activeLink : normalLink)}
                  >
                    {IconsMaker(link.icon)}
                    <span className="capitalize ">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            )) : <div>
              <SidebarCategoryStyles>
                Для гостей
              </SidebarCategoryStyles>
            </div> }
          </SidebarBody>
        </>
      )}
    </SidebarContainer>

      </SidebarWrap>

  )
}

export default Sidebar
