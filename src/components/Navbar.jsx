import '../assets/Navbar.css'
import { Link } from "react-router-dom"
import { useAppContext } from "../context/context";
import Logout from "./Logout"
import { GiGinkgoLeaf } from 'react-icons/gi';



function Navbar() {

    const { isLog } = useAppContext()


    return (
        <div className='navbar-container'>
            <Link to="/"><div className='logo'><GiGinkgoLeaf size={35} /></div></Link>

            <div className='navbar-buttons'>

                {!isLog ?
                    <><Link to="/login"><button className='navbar-login-btn'>Login</button></Link>

                        <Link to="/register"><button className='navbar-register-btn'>Register</button></Link></>

                    :

                    <Logout />}
            </div>

        </div>

    )



}

export default Navbar;