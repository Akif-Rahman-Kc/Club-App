import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import AdminNavbar from "../../Components/Navbar/AdminNavbar";

const AdminHome = () => {

    const navigate = useNavigate()

    useEffect(()=>{
        const logged = localStorage.getItem('logged')
        if (!logged) {
            navigate('/admin_login')
        }
    })

    return (
        <>
            <AdminNavbar/>
            <Banner/>
        </>
     );
}

export default AdminHome;