import React , {FC} from 'react'
import {Table,TableBody,TableHead,TableRow,TableCell} from '@mui/material'
import {record} from '../interfaces'

interface Props {
 
}

const TotalRecords:FC<Props> = () => {
    return (
        <div>
            <h3>Total Records</h3>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Address</TableCell>
                        <TableCell>Age</TableCell>
                    </TableRow>
                </TableHead>
            </Table>
        </div>
    )
}

export default TotalRecords
