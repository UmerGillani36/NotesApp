import { Box, Button, Card, CardActions, CardContent, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React ,{useState}from 'react';
import NoteList from './NoteList'

const AddNote = () => {
    const initialState={
        title:'',
        description:'',
        id:0
    }
    const [form , setForm] =useState(initialState);
    const {title , description}=form;
    const [counter,setCounter]=useState(100);
    const [isEdit , setIsEdit]=useState(false);

   
    const handleInput=(e)=>{
        const {id , value}=e.target;
        setForm({...form , [id]:value})
        console.log({[id]:value})
        
    }
    const getDate = () => {

        const date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
    
        let currentDate = `${day}-${month}-${year}`;
        return currentDate;
      }
    const handleSubmit= async(e)=>{
       e.preventDefault();
       console.log(isEdit)
       if(!isEdit){

       
        const date = getDate();
        const currentData={...form,date:date}
       const response= await axios.post('http://localhost:5000/notes',currentData);
       if(response.status===201){
            setForm(initialState)
            setCounter(counter-1);
       }
       else{
            console.error("Something went Wrong");
       }
    }
    else{
      const updatedData ={...form};
      const id=updatedData.id;
      // console.log(id)
      const response= await axios.put(`http://localhost:5000/notes/${id}`,updatedData);
       if(response.status===200){
            setForm(initialState)
            setCounter(counter-1);
       }
       else{
            console.error("Something went Wrong");
       }

    }
  }


    const EditNote= async(id)=>{
      const response = await axios.get(`http://localhost:5000/notes/${id}`);
      if (response.status === 200) {
        setForm({...response.data})
        console.log({...response.data})
        setIsEdit(true)
        
      }
      else {
        console.error("Something went wrong!!");
      }
    }


  return (
    <>
    <Box sx={{width:'400px', display:'flex',flexDirection:'column' ,justifyContent:'space-between' , margin:'20px'}}>
    <Card sx={{ backgroundColor:'white'}}>
            <CardContent  sx={{display:'flex' ,flexDirection:'column',justifyContent:'center'}}>

            <Typography variant="h4">Add Note</Typography>
            <TextField type='text' 
            label='Title' 
            variant='outlined' 
            id="title" 
            value={title || ""} 
            onChange={handleInput}
            sx={{margin:'4px 2px'}}
            >

            </TextField>
            <TextField type='text' 
            label='Description' 
            variant='outlined' 
            id="description" 
            multiline
            minRows={5} 
            maxRows={5}
            value={description || ""} 
            onChange={handleInput}
            sx={{margin:'4px 2px'}}
            ></TextField>
            </CardContent>
           <CardActions sx={{display:'flex' , justifyContent:'center'}}>
            <Button variant='contained'  size='small'  onClick={handleSubmit}>Save</Button>
            

           </CardActions>

    </Card>
    </Box>
            <NoteList counter={counter} EditNote={EditNote}/>
</>
    
  )
}

export default AddNote