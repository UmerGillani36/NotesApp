import React from 'react';
import {useParams , useNavigate} from 'react-router-dom';
import {Button, Divider} from '@mui/material';
import {useEffect, useState} from 'react'
import axios from 'axios';
const ReadNote = () => {

    const {id}=useParams();
    const navigate=useNavigate();
    const [data , setData]=useState([]);
    useEffect(() => {
        if (id) {
    
          getNoteData(id);
        }
      }, [id])

      const getNoteData= async(id)=>{
            const response = await axios.get(`http://localhost:5000/notes/${id}`);
            if(response.status===200){
                    setData(response.data)
                    
            }
            else{
                console.error("Something went Wrong");
            }
      }
  return (
    <div className='ReadNoteContainer'>
        <div className='HeadingSection'>
                <Button variant='contained' size='large' color='error' onClick={()=>navigate('/')}>Back</Button>
                <h1>{data.title}</h1>
                <span>{data.date}</span>
        </div>
        <Divider sx={{backgroundColor:'darkGrey'}}/>
        <div className='ContentSection'>
                    <p>{data.description}</p>
        </div>

    </div>
  )
}

export default ReadNote