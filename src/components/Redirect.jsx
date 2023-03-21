import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';


function Redirect() {

    const { id } = useParams(); // id from /:id

    useEffect(() => {

        const getUrl = async () => {
            const res = await axios.get(`http://localhost:5000/${id}`);
            window.location.replace(res.data)    
          }
        getUrl();

    });

    return(<>
    <h1>This Route Doesnt Exists!</h1>
    </>)

}

export default Redirect;
