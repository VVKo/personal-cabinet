import tw, { styled } from 'twin.macro'

export const ContextMenuTable = styled.menu`
  ${tw`absolute bg-white border rounded border-solid border-black p-3.5`}
  > li {
    ${tw`p-2`}
  }
`;

export const HeaderSTYLED = styled.div`
  ${tw`flex items-center justify-center`}
  & {
    h1 {
      ${tw`scale-100 transition-all`}
    
    }

    h1:hover {
      ${tw`scale-150`}
    }
  }
`
