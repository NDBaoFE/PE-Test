import axios from 'axios'
import React, { useEffect, useState } from 'react'
import  "./style.css"
import { Link } from 'react-router-dom';
import InfoIcon from '@mui/icons-material/Info';
function Home() {
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
    <div className='wrapper'>
    {members && <div className='members'>
        {members.map((member)=>{ 
            return(
                <div className='member' key={member.id}>
                    <div className='action'>
                        <div className='left'>
                            <div className='member-image'>
                                <img src={member.avatar} alt="" />
                            
                            </div>
                        </div>
                        <div className='right'>
                            <Link to={`/detail/${member.id}`}><InfoIcon fontSize='large' style={{color:"#2eb161"}}/></Link>
                        </div>
                    </div>
                    <div className='action'>
                    <div className='left'> 
                     <h3>Name: {member.name}</h3>
                     <p>Age: {member.age}</p>
                     </div>
                    <div className='right'>
                    <p>Address: {member.address}</p>
                    </div>
                    </div>
                </div>
            ) 
        
        })}
        </div>}
    </div>
  )
}

export default Home