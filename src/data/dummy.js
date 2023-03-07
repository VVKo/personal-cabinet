import {
  AiOutlineCalendar,
  AiOutlineShoppingCart,
  AiOutlineAreaChart,
  AiOutlineBarChart,
  AiOutlineStock,
  AiOutlineSetting
} from 'react-icons/ai';
import { FiShoppingBag, FiEdit, FiPieChart, FiBarChart, FiCreditCard, FiStar, FiShoppingCart } from 'react-icons/fi';
import { BsKanban, BsBarChart, BsBoxSeam, BsCurrencyDollar, BsShield, BsChatLeft } from 'react-icons/bs';
import { BiColorFill } from 'react-icons/bi';
import { IoMdContacts } from 'react-icons/io';
import { RiContactsLine, RiStockLine } from 'react-icons/ri';
import { MdOutlineSupervisorAccount } from 'react-icons/md';
import { HiOutlineRefresh } from 'react-icons/hi';
import { TiTick } from 'react-icons/ti';
import { GiLouvrePyramid } from 'react-icons/gi';
import { GrLocation } from 'react-icons/gr';
import avatar from './avatar.jpg';
import {SlPeople} from "react-icons/sl";
import {FaCriticalRole} from "react-icons/fa";

export const userProfileData = [
  {
    icon: <BsCurrencyDollar />,
    title: 'My Profile',
    desc: 'Account Config',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
  },
  {
    icon: <BsShield />,
    title: 'My Inbox',
    desc: 'Messages & Emails',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
  },
  {
    icon: <FiCreditCard />,
    title: 'My Tasks',
    desc: 'To-do and Daily Tasks',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
  },
];

export const IconsMaker = (name) =>{
  switch (name) {
    case 'FiShoppingBag':
      return <FiShoppingBag />
    case 'AiOutlineShoppingCart':
      return <AiOutlineShoppingCart />
    case 'IoMdContacts':
      return <IoMdContacts />
    case 'RiContactsLine':
      return <RiContactsLine />
    case 'AiOutlineCalendar':
      return <AiOutlineCalendar />
    case 'BsKanban':
      return <BsKanban />
    case 'FiEdit':
      return <FiEdit />
    case 'BiColorFill':
      return <BiColorFill />
    case 'AiOutlineStock':
      return <AiOutlineStock />
    case 'AiOutlineAreaChart':
      return <AiOutlineAreaChart />
    case 'AiOutlineBarChart':
      return <AiOutlineBarChart />
    case 'FiPieChart':
      return <FiPieChart />
    case 'RiStockLine':
      return <RiStockLine />
    case 'BsBarChart':
      return <BsBarChart />
    case 'GiLouvrePyramid':
      return <GiLouvrePyramid />
    case 'SlPeople':
      return <SlPeople />
    case 'FaCriticalRole':
      return <FaCriticalRole />
    case 'AiOutlineSetting':
      return <AiOutlineSetting />
    default:
      return null

  }

}


export const links = [
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
