import styled from "styled-components";
import tw from "tailwind-styled-components";

export const AppStyles = styled.div.attrs({
    className: "flex relative dark:bg-main-dark-bg"
})``;

export const SettingsStyles = styled.div.attrs({
    className: "fixed right-4 bottom-4"
})`
  z-index: 1000;
`

export const TooltipBtnStyles = styled.button.attrs({
    className: "text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
})`
`
