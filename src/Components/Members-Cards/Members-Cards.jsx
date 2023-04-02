import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import ErrorIcon from '@mui/icons-material/Error';

const MembersCards = () => {

    const [ allMembers, setAllMembers  ] = useState([])

    useEffect(()=>{
        let members = localStorage.getItem('members')
        setAllMembers(JSON.parse(members))
    },[])

  return ( 
        <>
            <Box width={'100%'} height={'90vh'} sx={{ pt: 10 , backgroundImage:'url("https://media.istockphoto.com/id/535983237/photo/beautiful-green-grass-pattern-from-golf-course.jpg?s=612x612&w=0&k=20&c=EsWZu1jXQ2AJ5kkNp-jUu6ZmlYwdqHbqZCEtRHVWslE=")' }}>
                <Box sx={{ textAlign:'center' , color:'#fff' , textDecoration:'underline' }}>
                    <h2>MEMBERS</h2>
                </Box>
                {allMembers.length > 0 ?
                <Box sx={{ flexGrow: 1, p: 2 , mt: 5 }}>
                    <Grid
                        container
                        spacing={2}
                        sx={{
                            ml: '-8px',
                            color:'#fff',
                        }}
                    >
                        {allMembers?.map((member, index) => (
                        <Grid key={index} {...{ xs: 6, sm: 4, md: 3, lg: 2 }} minHeight={190} sx={{ textAlign:'center' }} >
                            <img width={'110px'} style={{ borderRadius:'50%' , marginBottom:'-20px' }} src={ member?.image ? member?.image : "/null-profile.jpg" } alt="" />
                            <h4>{member.name}</h4>
                        </Grid>
                        ))}
                    </Grid>
                </Box>
                :
                <Box sx={{ mt: 14 , width:'100%' , color:'#adadad' , textAlign:'center' }}>
                    <ErrorIcon sx={{ fontSize:'100px' }}/>
                    <h3>There are no Members</h3>
                </Box>
                }
            </Box>
        </>
   );
}
 
export default MembersCards;