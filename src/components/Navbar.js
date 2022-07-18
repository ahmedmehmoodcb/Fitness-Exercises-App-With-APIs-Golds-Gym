import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Logo from'../assets/images/Logo.png';

const Navbar = () => {
  console.log('here in navbar', Logo)
  return (
    <Stack>
      <Link to='/'>
        <img src={Logo} style={{width: '48px', height:'48px', margin:'0 20px'}} />
      </Link>
      <Stack>
        <link to='/'>Home</link>
        <a herf="" style={{textDecoration:'none', color:'#3A1212'}}>Exercises</a>
      </Stack>
    </Stack>
  )
}
 
export default Navbar