import '../assets/PopUp.css'
import { Link } from 'react-router-dom';


export default function PopUp() {

    return (

        <div className='popup'>
            <h1>Ups!</h1>
            <p>It looks like you aren't allowed to do that!</p> 
            <Link className='link' to="/login">
                <button className="popup-btn">
                <p>Sign In first!</p></button>
            </Link>
        </div>
    )
}
