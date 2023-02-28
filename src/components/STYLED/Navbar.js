import styled from "styled-components";
import tw from "tailwind-styled-components";

// <div
//     className={
//         activeMenu
//             ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
//             : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
//     }
// >
//     <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
//         <Navbar />
//     </div>
//     <div>

export const NavbarTW = tw.div`
${(p) => (p.$activeMenu ? 
    "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  " 
    : 
    "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
)}
`;

export const NavbarWrapTW = tw.div`
    fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full  
`
export const NavbarContainerTW = tw.div`
    flex justify-between p-2 md:ml-6 md:mr-6 relative
`
export const NavbarFlexTW = tw.div`
    flex
`
