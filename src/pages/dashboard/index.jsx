import React, { useEffect, useState } from 'react'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import "./style.css"
import { Link } from 'react-router-dom';

function DashBoard() {
    const [members,setMembers]=useState([]);
    const url="https://64b03602c60b8f941af5682b.mockapi.io/pe/staffManagement"
    const fetchData= async ()=>{
        const res=await axios(url);
        setMembers(res.data);
    }
    useEffect(()=>{
        fetchData();
    },[])
  return (
    <div  style={{padding: "0 40px",marginTop:"30px"}}>
        <div className='row'>
            <h1>DashBoard</h1>
            <Link to="/employee/add">
            <button className='btn add-btn'>Add</button>
            </Link>
        </div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow style={{backgroundColor:"#2eb161"}}>
            <TableCell style={{color:"#fff"}}>Avatar</TableCell>
            <TableCell style={{color:"#fff"}}>Name</TableCell>
            <TableCell style={{color:"#fff"}}>Age</TableCell>
            <TableCell style={{color:"#fff"}}>Address</TableCell>
            <TableCell style={{color:"#fff"}}>Created day</TableCell>
            <TableCell style={{color:"#fff"}} align='center'>Action</TableCell>
          </TableRow>
        </TableHead>
       { members && <TableBody>
          {members.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                 <TableCell align="left"><img  src={row?.avatar} alt="avatar" /></TableCell>
                <TableCell align="left">{row.name}</TableCell>
              <TableCell align="left">{row.age}</TableCell>
              <TableCell align="left">{row.address}</TableCell>
              <TableCell align="left">{new Date(row?.createdAt *1000).toLocaleDateString()}</TableCell>
              <TableCell align="center">
                <Link  to={`/employee/edit/${row.id}`}><button className='btn edit-btn'>Edit</button> </Link><button className='btn delete-btn'>Delete</button></TableCell>
            </TableRow>
          ))}
        </TableBody>} 
      </Table>
    </TableContainer>
    </div>
  )
}

export default DashBoard