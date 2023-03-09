
import DataGrid, {textEditor} from 'react-data-grid'
import Button from "../../components/Button";
import {useStateContext} from "../../contexts/ContextProvider";
import {useEffect, useLayoutEffect, useRef, useState} from "react";
import Spinner from "../../components/Spinner";
import {createPortal} from "react-dom";
import tw from 'twin.macro'
import styled from "styled-components";


const ContextMenuTable = styled.menu`
  position: absolute;
  background-color: #ffffff;
  border: 1px solid black;
  padding: 16px;
  list-style: none;
  > li {
    padding: 8px;
  }
`;

const HeaderSTYLED = styled.div.attrs({
    className: "flex items-center justify-center"
})`
  & {
    h1 {
      ${tw`font-sans text-6xl font-hairline text-6xl text-teal-500`}
      transform: scale(1);
      transition: all 0.3s ease-in-out;
    }
    h1:hover {
      transform: scale(2);
    }
`


const Staff = () => {
    const [contextMenuProps, setContextMenuProps] = useState(null)
    const {state, getStaff, currentColor, currentMode  } = useStateContext();
    const {staff} = state
    const menuRef = useRef(null);
    const isContextMenuOpen = contextMenuProps !== null;
    useLayoutEffect(() => {
        if (!isContextMenuOpen) return;

        function onClick(event) {
            if (event.target && menuRef.current?.contains(event.target)) {
                return;
            }
            setContextMenuProps(null);
        }

        addEventListener('click', onClick);

        return () => {
            removeEventListener('click', onClick);
        };
    }, [isContextMenuOpen]);
    useEffect(()=>{

        if (!staff)  getStaff()
    },[])
    console.log('Staff', staff)
    if (!staff) return <Spinner />

    const handleFill = ({ columnKey, sourceRow, targetRow }) => {
        return { ...targetRow, [columnKey]: sourceRow[columnKey] };
    }

    const columns = staff.columns.map(obj => {
        return {...obj, editor: textEditor, headerRenderer: () => <><HeaderSTYLED><h1>{obj.name}</h1></HeaderSTYLED></>}
    })

    const rows = staff.rows

    return (
        <div>
            <div className="flex flex-wrap lg:flex-nowrap justify-between ">
                <div className="ml-2">
                    <h2 className="flex justify-center px-2">Співробітники</h2>
                    <h5 className="flex justify-center px-2">Welcome</h5>
                </div>
                <div>
                    <Button
                        color="white"
                        bgColor={currentColor}
                        text="Додати нового співробітника"
                        borderRadius="10px"
                    />
                </div>
            </div>
            {staff &&
                <DataGrid on
                    columns={columns}
                    rows={rows}
                          onFill={handleFill}
                onCellContextMenu={({ row, column }, event) => {
                    event.preventGridDefault();
                    // Do not show the default context menu
                    event.preventDefault();
                    console.log(row, column)
                    setContextMenuProps({
                        rowIdx: rows.indexOf(row),
                        top: event.clientY,
                        left: event.clientX
                    });
                }}
            />}

            {isContextMenuOpen &&
                createPortal(
                    <ContextMenuTable
                        ref={menuRef}
                        style={
                            {
                                top: contextMenuProps.top,
                                left: contextMenuProps.left
                            }
                        }
                    >
                        <li>
                            <button
                                onClick={() => {
                                    const { rowIdx } = contextMenuProps;
                                    // setRows([...rows.slice(0, rowIdx), ...rows.slice(rowIdx + 1)]);
                                    setContextMenuProps(null);
                                }}
                            >
                                Delete Row
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => {
                                    const { rowIdx } = contextMenuProps;
                                    // insertRow(rowIdx);
                                    setContextMenuProps(null);
                                }}
                            >
                                Insert Row Above
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => {
                                    const { rowIdx } = contextMenuProps;
                                    // insertRow(rowIdx + 1);
                                    setContextMenuProps(null);
                                }}
                            >
                                Insert Row Below
                            </button>
                        </li>
                    </ContextMenuTable>,
                    document.body
                )}
        </div>
    );
};

export default Staff;
