import { BrowserRouter , Routes , Route} from "react-router-dom";
import './App.css';
import AdminHome from "./Pages/admin/Home";
import Login from "./Pages/admin/Login";
import AdminMembers from "./Pages/admin/Members";
import ConfirmList from "./Pages/ConfirmList";
import Home from "./Pages/Home";
import Members from "./Pages/Members";

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/members" element={<Members />} />
        <Route path="/confirm_list" element={<ConfirmList />} />
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/admin_login" element={<Login />} />
        <Route path="/admin_members" element={<AdminMembers />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
