import { Box, Button, Container, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import TableComponent from './TableComponent'
import rows from '../resources/data.json'

const Search = () => {
    // const [values, setValues] = useState({
    //     searchText: '',
    //     list: rows,
    //     display: rows
    // })
    const [list, setList] = useState(rows)
    const [display, setDisplay] = useState(rows)
    const [searchText, setSearchText] = useState('')

    const filteredList = (q) =>{
        console.log(q)
        const modified = list.filter(val => {
            return val.name.toLowerCase().includes(q.toLowerCase())
        })
        console.log(modified)
        return modified
    }
    const onHandleChange = (event) => {
        if(event.target.value){
            const data = filteredList(event.target.value)
            setDisplay(data)
        } else {
            setDisplay(list)
        }
        setSearchText(event.target.value)
    }
    return (
        <Container>
        <Box display='flex' mb={2} mt={4} justifyContent='flex-start' alignItems='center'>
            <Box mr={2} width={1/2}>
                <TextField size='small' fullWidth value={searchText} onChange={(e) => onHandleChange(e)} id="outlined-search" label="Search..." type="search" variant="outlined" />
            </Box>
        </Box>
            <TableComponent rows={display}/>
        </Container>
    )
}

export default Search
