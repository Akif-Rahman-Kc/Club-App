import { Button, Grid, Input, TextField } from "@mui/material";
import { Box } from "@mui/system";
import AddAPhotoOutlinedIcon from "@mui/icons-material/AddAPhotoOutlined";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const AdminMembersModal = ({member, index, image, setImage}) => {

    const [ name, setName  ] = useState(member?.name)

    // useEffect(()=>{
    //     member?.image !== '' ? setImage(member?.image) : setImage('')
    // },[member?.image])

    const editMember = async () => {
        let members = localStorage.getItem('members')
        members = JSON.parse(members)
        console.log(members);
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
        } else if (member?.image !== '') {
            imgBase = member?.image
        }


        console.log(name);
        console.log(imgBase);
        setImage('')
    }

    return ( 
        <>
            <ToastContainer/>
            <Box
                sx={{
                p: 0.5,
                backgroundColor: "#fff",
                width: "fit-content",
                display: "flex",
                }}
            >
                <img
                src={ image ? URL.createObjectURL(image) : member?.image ? member?.image : "/null-profile.jpg" }
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
                defaultValue={member?.name}
                />
            </Grid>
            <Button onClick={editMember} sx={{ mt: 1 , width:'100%' }} variant="contained" color="success" size="small">
                Add
            </Button>
        </>
     );
}
 
export default AdminMembersModal;