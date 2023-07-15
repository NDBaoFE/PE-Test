import React, { useEffect, useState } from 'react'
import "./style.css"
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
function Detail() {
    const navigate=useNavigate();
    const [detail,setDetail]=useState()
    const{id}=useParams();
    const url=`https://64b03602c60b8f941af5682b.mockapi.io/pe/staffManagement/${id}`;
    const fetchData= async ()=>{
        const res=await axios(url);
        setDetail(res.data);
    }
    useEffect(()=>{
        fetchData();
    },[])
  return (
    <div className='container'>
        {detail &&
        <div className='detail'>
            <div className='button' onClick={()=>navigate(-1)}><ChevronLeftIcon fontSize='inherit'/></div>
            <h2>Detail Information</h2>
            <img src={detail?.avatar} alt="avatar" /> 
            <h2 style={{marginBottom:0}}>Name: {detail?.name}</h2>
            <h4>Age: {detail?.age}</h4>
            <h4>Address: {detail?.address}</h4>
            <h4>Created on : {new Date(detail?.createdAt *1000).toLocaleDateString()}</h4>
        </div> }
        
    </div>
  )
}

export default Detail