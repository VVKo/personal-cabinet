import React, { useLayoutEffect, useRef, useState} from 'react';
import {useStateContext} from "../../contexts/ContextProvider";
import DataGrid, {RowsChangeData, textEditor} from "react-data-grid";
import {createPortal} from "react-dom";
import {ContextMenuTable, HeaderSTYLED} from "./STYLED/styles.tw";

const StaffTable = () => {
    const [contextMenuProps, setContextMenuProps] = useState(null)
    const {state, getStaff, currentColor, currentMode, updateContext  } = useStateContext();
    const {staff} = state
    const rows = staff.rows
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


    const handleFill = ({ columnKey, sourceRow, targetRow }) => {
        return { ...targetRow, [columnKey]: sourceRow[columnKey] };
    }

    const columns = staff.columns.map(obj => {
        return {...obj, editor: textEditor,
            headerRenderer: () => <HeaderSTYLED><h1>{obj.name}</h1></HeaderSTYLED>
        }
    })


    console.log('rows', rows)
    return (
        <>
            <DataGrid on
                      columns={columns}
                      rows={rows}
                      defaultColumnOptions={{
                          resizable: true,


                      }}
                      // onFill={handleFill}
                      onRowsChange={(r, d)=>updateContext('UPDATEROW',r) }
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
            />

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
        </>
    );
};

export default StaffTable;
