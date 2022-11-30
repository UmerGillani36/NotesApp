import React from 'react'
import { Button, Card, CardActions, CardContent, Typography, Divider } from '@mui/material'
import { useNavigate } from 'react-router-dom';

const Note = ({ id, title, description, excerpt, DeleteNote , EditNote }) => {

  const navigate=useNavigate(); 

  return (
    <>
      <Card
        sx={{
          margin: '20px 10px',
          boxSizing: 'border-box',
          width: '400px',
          height: '349.98px',
          border: '0.5px solid rgba(0,0,0,0.1)',

          backgroundColor: 'rgba(255,255, 255,0.2)',
          color: 'white',
          padding: '18px',
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between'
        }}>

        <CardContent sx={{ diplay: 'flex', padding: '0px ', margin: '10px 0px' }}>
          <Typography variant='h4' color='inherit' sx={{ padding: '0px', textAlign: 'center' }}>{title}

          </Typography>
          <Divider sx={{ backgroundColor: 'rgba(255,255, 255,0.3)' }} />
          <Typography variant='body2' color='inherit'
            sx={{ flexGrow: 2, padding: '0px', textAlign: 'left' }}>
            {excerpt(description)}

            <Button variant='contained' size='small'
              sx={{ width: '103px', height: '25px', margin: '2px 0px 8px 0px' }}
              color='success'
              onClick={() =>navigate(`/readnote/${id}`)}>Read More</Button>

          </Typography>
          <Divider sx={{ backgroundColor: 'rgba(255,255, 255,0.3)' }} />
        </CardContent>
        <CardActions sx={{ padding: '0px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>

          <Button variant='contained' size='small' color='error' onClick={() => DeleteNote(id)}>Delete</Button>
          <Button variant='contained' size='small' onClick={()=>EditNote(id)}>Edit</Button>

        </CardActions>
      </Card>
    </>

  )
}

export default Note