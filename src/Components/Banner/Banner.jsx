import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const Banner = () => {
  return ( 
    <>
      <Box width={'100%'} height={'100vh'} sx={{ display:'flex' , justifyContent:'center' , alignItems:'center' , backgroundImage:'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQildNZcyTIAJpmE1XH-ZLPTEc_pFs2T6LWL5S-Grbf&s")' }}>
        <Box sx={{ display:'block' }}>
          <img src="/banner.png" alt="" />
          <Box sx={{ textAlign:'center' }}>
            <Typography sx={{ fontSize:'35px' }}>Welcome to</Typography>
            <Typography sx={{ fontSize:'43px' , fontFamily:'cursive' , color:'#fff' }}>BIG SHOTS GROUP</Typography>
          </Box>
        </Box>
      </Box>
    </>
   );
}
 
export default Banner;