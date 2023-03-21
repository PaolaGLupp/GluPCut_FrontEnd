import '../assets/Home.css';

import Navbar from './Navbar.jsx'
import Shortener from './Shortener'
import image from '../img.png'
 
function Home () {

    return (
        <div className='home-container'>
            
            <img src={image} className="home-image" alt="image" />

            <Shortener/>

        </div>
    );
}

export default Home;