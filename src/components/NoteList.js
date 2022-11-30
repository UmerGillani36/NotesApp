import axios from 'axios';
import React, { useEffect ,useState} from 'react'
import Note from './Note'


const NoteList = ({counter,EditNote}) => {
 const [data,setData]=useState();
  useEffect(()=>{
    loadData()
  },[counter])

  const loadData= async()=>{
    const allResponse= await axios.get('http://localhost:5000/notes');
    if(allResponse.status===200){
        
     setData(allResponse.data)
    //  console.log(data)
}
else{
     console.error("Something went Wrong");
}
  }
  const excerpt = (str) => {
    if (str.length > 470) {

      str = str.substring(0, 470) + " ...";
    }
    else {
      str = str.substring(0, str.length) ;
    }
    return str;
  }
  const DeleteNote = async (id) => {

    // console.log("Delete is calling",id);
    if (window.confirm("Are you sure you want to delete your Note?")) {
      const response = await axios.delete(`http://localhost:5000/notes/${id}`);
      if (response.status === 200) {
        loadData();
      }
      else {
        console.error("Something went wrong!!");
      }

    }
  }

  
  return (
    <>
      {
        data&&(
          data.map((element,index)=>(<Note key={index} {...element } excerpt={excerpt} DeleteNote={DeleteNote} EditNote={EditNote}/>))
        )
      }
      </>
  )
}

export default NoteList