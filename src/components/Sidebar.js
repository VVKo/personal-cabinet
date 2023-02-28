
import { Link, NavLink } from 'react-router-dom';
import {MdOutlineCancel} from 'react-icons/md'
import { AiOutlineCalendar, AiOutlineShoppingCart, AiOutlineAreaChart, AiOutlineBarChart, AiOutlineStock } from 'react-icons/ai';
import { FiShoppingBag, FiEdit, FiPieChart, FiBarChart, FiCreditCard, FiStar, FiShoppingCart } from 'react-icons/fi';
import { BsKanban, BsBarChart, BsBoxSeam, BsCurrencyDollar, BsShield, BsChatLeft } from 'react-icons/bs';
import { BiColorFill } from 'react-icons/bi';
import { IoMdContacts } from 'react-icons/io';
import { RiContactsLine, RiStockLine } from 'react-icons/ri';
import { MdOutlineSupervisorAccount } from 'react-icons/md';
import { HiOutlineRefresh } from 'react-icons/hi';
import { TiTick } from 'react-icons/ti';
import { GiLouvrePyramid } from 'react-icons/gi';
import { SiShopware } from 'react-icons/si';


import { useStateContext } from '../contexts/ContextProvider';
import {SidebarBody, SidebarContainer, SidebarHeader, SidebarWrap} from "./STYLED";
import {Tooltip} from "react-daisyui";
import {SidebarCategoryStyles} from "./STYLED/Sidebar";


const links = [
  {
    title: 'Dashboard',
    links: [
      {
        name: 'ecommerce',
        icon: <FiShoppingBag />,
      },
    ],
  },

  {
    title: 'Pages',
    links: [
      {
        name: 'orders',
        icon: <AiOutlineShoppingCart />,
      },
      {
        name: 'employees',
        icon: <IoMdContacts />,
      },
      {
        name: 'customers',
        icon: <RiContactsLine />,
      },
    ],
  },
  {
    title: 'Apps',
    links: [
      {
        name: 'calendar',
        icon: <AiOutlineCalendar />,
      },
      {
        name: 'kanban',
        icon: <BsKanban />,
      },
      {
        name: 'editor',
        icon: <FiEdit />,
      },
      {
        name: 'color-picker',
        icon: <BiColorFill />,
      },
    ],
  },
  {
    title: 'Charts',
    links: [
      {
        name: 'line',
        icon: <AiOutlineStock />,
      },
      {
        name: 'area',
        icon: <AiOutlineAreaChart />,
      },

      {
        name: 'bar',
        icon: <AiOutlineBarChart />,
      },
      {
        name: 'pie',
        icon: <FiPieChart />,
      },
      {
        name: 'financial',
        icon: <RiStockLine />,
      },
      {
        name: 'color-mapping',
        icon: <BsBarChart />,
      },
      {
        name: 'pyramid',
        icon: <GiLouvrePyramid />,
      },
      {
        name: 'stacked',
        icon: <AiOutlineBarChart />,
      },
    ],
  },
];

const Sidebar = () => {
  const {activeMenu, setActiveMenu} = useStateContext()
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
                style={{ color: 'black' }}
                className="text-xl rounded-full hover:bg-light-gray md:hiddenp-3 mt-4 block "
              >
                <MdOutlineCancel />
              </button>
            </Tooltip>
          </SidebarHeader>
          <SidebarBody>
            {links.map((item) => (
              <div key={item.title}>
                <SidebarCategoryStyles>
                  {item.title}
                </SidebarCategoryStyles>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    onClick={()=>{}}
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? 'blue' : '',
                    })}
                    className={({ isActive }) => (isActive ? activeLink : normalLink)}
                  >
                    {link.icon}
                    <span className="capitalize ">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </SidebarBody>
        </>
      )}
    </SidebarContainer>

      </SidebarWrap>

  )
}

export default Sidebar
