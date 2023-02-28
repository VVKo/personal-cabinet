import styled from "styled-components";
import tw from "tailwind-styled-components";

export const SidebarStyles = tw.div`
${(p) => (p.$activeMenu ? "w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white " : "w-0 dark:bg-secondary-dark-bg")}
`;

export const SidebarHeaderStyles = tw.div`
flex justify-between items-center
`

export const SidebarContainerStyles = tw.div`
ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10
`

export const SidebarBodyStyles = tw.div`
mt-10 
`

export const SidebarCategoryStyles = tw.p`
text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase
`
