import tw from "tailwind-styled-components";

export const MainTW = tw.div`
${(p) => (p.$activeMenu ?
        "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  "
        :
        "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
)}
`;
