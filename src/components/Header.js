import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import Container from '@mui/material/Container';



const Header = () => {


  return (
    <AppBar position="static" sx={{padding:'4px 10px',backgroundColor:'rgba(0, 0, 0, 0.7)'}}>
    
      <Toolbar >
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            fontFamily: 'monospace',
            fontSize:35,
            fontWeight:'bold',
            letterSpacing: '.2rem',
            color: '#fff',
            textDecoration: 'none',
          }}
        >
           Notes App
        </Typography>

        

      </Toolbar>
   
  </AppBar>
  )
}

export default Header;