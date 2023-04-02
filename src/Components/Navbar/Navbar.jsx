import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PlaylistAddCheckCircleIcon from '@mui/icons-material/PlaylistAddCheckCircle';
import { useNavigate } from 'react-router-dom';

function Navbar() {

  const navigate = useNavigate()

  return (
    <AppBar position="fixed" sx={{ bgcolor:'#0967c3d1' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img onClick={()=> navigate('/')} width={'60px'} src="/logo.png" alt="" />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'revert',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            BIG SHOTS
          </Typography>
          <Box sx={{ display:'flex' , ml:'auto' }}>
            <IconButton
              onClick={()=>navigate('/members')}
              sx={{ borderRadius: "10px", width: "105px" , color:'#fff' }}
              size="medium"
              color="inherit"
            >
              <Box
                sx={{
                  display: { xs: "block", md: "block", textAlign: "center" },
                }}
              >
                <PeopleAltIcon />
                <h6 style={{ fontSize: "12px" , margin:'2px' }}>Members</h6>
              </Box>
            </IconButton>
            <IconButton
              onClick={()=>navigate('/confirm_list')}
              sx={{ borderRadius: "10px", width: "105px" , color:'#fff' }}
              size="medium"
              color="inherit"
            >
              <Box
                sx={{
                  display: { xs: "Block", md: "block", textAlign: "center" },
                }}
              >
                <PlaylistAddCheckCircleIcon />
                <h6 style={{ fontSize: "12px" , margin:'2px' }}>Confirm List</h6>
              </Box>
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;