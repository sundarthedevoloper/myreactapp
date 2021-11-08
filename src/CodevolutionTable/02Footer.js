import React, { useMemo } from 'react'
import { useTable } from 'react-table'
import DATA from  './mockData.json'
import {COLUMNS} from './columns'
import './styles.css'

function App() {
    const columns = useMemo(()=> COLUMNS, [])
    const data = useMemo(()=>DATA, [])
    const tableInstance = useTable({
        columns,
        data
    })
    const {getTableProps, getTableBodyProps, headerGroups, footerGroups, rows, prepareRow}= tableInstance


    return (
        <table {...getTableProps()}> 
            <thead>
                {headerGroups.map((headerGroup)=>(
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {
                            headerGroup.headers.map((column)=>(
                                <th {...column.getHeaderProps()}>
                                    {column.render('Header')}
                                </th>
                            ))
                        }
                    </tr> 
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    rows.map((row)=>{
                        prepareRow(row)
                        return(
                            <tr {...row.getRowProps}>
                                {
                                    row.cells.map(cell =>{
                                        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td> 
                                    })
                                }
                            </tr>
                        )
                    })
                }
            </tbody>
            <tfoot>
                {footerGroups.map((footerGoup)=>(
                    <tr {...footerGoup.getFooterGroupProps()}>
                        {
                            footerGoup.headers.map((column)=>(
                                <th {...column.getFooterProps()}>
                                    {column.render('Footer')}
                                </th>
                            ))
                        }
                    </tr> 
                ))}
            </tfoot>
        </table>
    )
}

export default App
