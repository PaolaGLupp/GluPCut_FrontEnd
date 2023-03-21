import '../assets/Shortener.css'
import { useState } from 'react';
import NewUrl from './NewUrl';
import PopUp from './PopUp';

const Shortener = () => {

    const url = 'http://localhost:5000/shortener'

    const [newUrl, setNewUrl] = useState()

    const [shortUrl, setShortUrl] = useState();

    const [data, setData] = useState({
        url: ''
    })

    const [popUp, setPopUp] = useState(false);


    const token = localStorage.getItem("token")


    const shortenUrl = async (e) => {
        e.preventDefault();


        if(!token){
            setPopUp(true)
            return
        } else {

        const body = {
            longUrl: data.url
        }

        try {
            const res = await fetch(url,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        'token': token
                    },
                    body: JSON.stringify(body)
                }
            );
            const parseRes = await res.json();



            setNewUrl(true)
            setShortUrl(parseRes.shortUrl)


        } catch (err) {
            console.error(err.message);
        }

    }


    }


    function handle(e) {
        const newData = { ...data };
        newData[e.target.id] = e.target.value;
        setData(newData);
    }


    return (

        <div>
            <div className='shortener-input-container'>
                <input className="shortener-input" type="text" placeholder='Shorten your Link!' id="url" onChange={(e) => handle(e)} value={data.url}></input>

                <button className='shortener-btn' onClick={shortenUrl}>Shorten</button>
            </div>
            {newUrl ?
                <NewUrl shortUrl={shortUrl} /> :
                <> </>
            }

            {popUp ? <div>

                <PopUp />

            </div>
                : null}

        </div>

    )
}

export default Shortener;