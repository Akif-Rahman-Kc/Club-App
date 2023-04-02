import { Backdrop, Button, Fade, Grid, IconButton, Input, Modal, TextField } from "@mui/material";
import { Box } from "@mui/system";
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import { useEffect, useState } from "react";
import AddAPhotoOutlinedIcon from "@mui/icons-material/AddAPhotoOutlined";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ErrorIcon from '@mui/icons-material/Error';
import AdminMembersModal from "../Modal/AdminMembersModal";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 280,
    bgcolor: '#fff',
    boxShadow: 24,
    borderRadius:'10px',
    p: 4,
    textAlign:'center'
  };

const AdminMembersCards = () => {

    const [open, setOpen] = useState(false);
    const [editOpen, setEditOpen] = useState(false);
    const [refresh, setRefresh] = useState(false);
    const [ image, setImage  ] = useState('')
    const [ name, setName  ] = useState('')
    const [ allMembers, setAllMembers  ] = useState([])
    const [ modalMember, setModalMember  ] = useState({})
    const [ modalIndex, setModalIndex  ] = useState('')

    useEffect(()=>{
        let members = localStorage.getItem('members')
        setAllMembers(JSON.parse(members))
    },[refresh])

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleOpenEditModal = (member, index) => {
        setModalMember(member)
        setModalIndex(index)
        setEditOpen(true);
    }
    const handleCloseEditModal = () => setEditOpen(false);

    const handleSubmit = async () => {
        let imgBase = ''
        if (image) {
                const toBase64 = (image) =>
                new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.readAsDataURL(image);
                    reader.onload = () => resolve(reader.result);
                    reader.onerror = (error) => reject(error);
                }).catch((err) => {
                    console.log(err);
                });
            imgBase = await toBase64(image);
        }
        let members = localStorage.getItem('members')
        members = JSON.parse(members)
        let member
        if (members) {
            member = {
                name:name,
                image:imgBase
            }
        }else{
            member = [{
                name:name,
                image:imgBase
            }]
        }
        let membersDetails = [...members,member]
        localStorage.setItem('members', JSON.stringify(membersDetails))
        toast.success("Successfully added a member", {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
        setImage('')
        setRefresh(!refresh)
        setOpen(false)
    }

    function deleteMember(index) {
        let members = localStorage.getItem('members')
        members = JSON.parse(members)
        if (index === 0) {
            members = members.splice(index,0)
        }else{
           members = members.splice(index,1)
        }
        console.log(members);
        localStorage.setItem('members', JSON.stringify(members))
        setRefresh(!refresh)
    }

    return (
        <>
            <ToastContainer/>
            <Box width={'100%'} height={'90vh'} sx={{ pt: 10 , backgroundImage:'url("https://media.istockphoto.com/id/535983237/photo/beautiful-green-grass-pattern-from-golf-course.jpg?s=612x612&w=0&k=20&c=EsWZu1jXQ2AJ5kkNp-jUu6ZmlYwdqHbqZCEtRHVWslE=")' }}>
                <Box sx={{ textAlign:'center' }}>
                    <Button onClick={handleOpen} sx={{ width:'60%' , color:'#fff' , bgcolor:'#000' , fontSize:'12px' , ":hover":{ bgcolor:'#000' } , ":active":{ bgcolor:'#444' } }} variant="contained" size="small">
                        <GroupAddIcon sx={{ mr: 1 }} /> Add Members
                    </Button>
                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        open={open}
                        onClose={handleClose}
                        closeAfterTransition
                        slots={{ backdrop: Backdrop }}
                        slotProps={{
                        backdrop: {
                            timeout: 500,
                        },
                        }}
                    >
                        <Fade in={open}>
                        <Box sx={style}>
                            <Box
                                sx={{
                                p: 0.5,
                                backgroundColor: "#fff",
                                width: "fit-content",
                                display: "flex",
                                }}
                            >
                                <img
                                src={ image ? URL.createObjectURL(image) : "/null-profile.jpg" }
                                style={{
                                    width: "98px",
                                    height: "98px",
                                    borderRadius: "50%",
                                }}
                                alt=""
                                />
                                <div style={{ marginTop: "auto" }}>
                                <label for="upload" class="file-upload__label">
                                    <AddAPhotoOutlinedIcon sx={{ ml: -0.5 }} />
                                </label>
                                <Input
                                    sx={{ display:'none' }}
                                    id="upload"
                                    class="file-upload__input"
                                    type="file"
                                    name="image"
                                    onChange={(e)=> {
                                    let allowedFormats = /(\.jpg|\.jpeg|\.png|\.gif)$/i
                                    let fileType = e.target.files[0].name
                                    if (!allowedFormats.exec(fileType)) {
                                        toast.error("Invalid file type!", {
                                        position: "top-right",
                                        autoClose: 4000,
                                        hideProgressBar: false,
                                        closeOnClick: true,
                                        pauseOnHover: true,
                                        draggable: true,
                                        progress: undefined,
                                        theme: "colored",
                                        });
                                    } else {
                                        setImage(e.target.files[0])
                                    }
                                    }}
                                />
                                </div>
                            </Box>
                            <Grid mt={1} item xs={6}>
                                <TextField
                                fullWidth
                                id="name"
                                label="Name"
                                size="small"
                                name="name"
                                autoComplete="family-name"
                                autoFocus
                                onChange={(e)=>setName(e.target.value)}
                                />
                            </Grid>
                            <Button onClick={handleSubmit} sx={{ mt: 1 , width:'100%' }} variant="contained" color="success" size="small">
                                Add
                            </Button>
                        </Box>
                        </Fade>
                    </Modal>
                </Box>
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
                            <img width={'110px'} style={{ borderRadius:'50%' , marginBottom:'-20px' }} src={member?.image ? member?.image : "/null-profile.jpg"} alt="" />
                            <h4>{member.name}</h4>
                            <Box mt={-2}>
                                <IconButton onClick={()=>handleOpenEditModal(member, index)} sx={{ mx:1 }}>
                                    <EditIcon sx={{ color:'#000' , bgcolor:'#fff' , p: 0.5 , borderRadius:'15px' , fontSize:'17px' }}/>
                                </IconButton>
                                <Modal
                                    aria-labelledby="transition-modal-title"
                                    aria-describedby="transition-modal-description"
                                    open={editOpen}
                                    onClose={handleCloseEditModal}
                                    closeAfterTransition
                                    slots={{ backdrop: Backdrop }}
                                    slotProps={{
                                    backdrop: {
                                        timeout: 500,
                                    },
                                    }}
                                >
                                    <Fade in={editOpen}>
                                    <Box sx={style}>
                                        <AdminMembersModal member={modalMember} index={modalIndex} image={image} setImage={setImage}/>
                                    </Box>
                                    </Fade>
                                </Modal>
                                <IconButton onClick={()=>deleteMember(index)} sx={{ mx:1 }}>
                                    <DeleteIcon sx={{ color:'red' , bgcolor:'#fff' , p: 0.5 , borderRadius:'15px' , fontSize:'17px' }}/>
                                </IconButton>
                            </Box>
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
 
export default AdminMembersCards;