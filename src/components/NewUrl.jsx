import { CopyToClipboard } from 'react-copy-to-clipboard';
import '../assets/Shortener.css'
import { useState } from 'react';


const NewUrl = (props) => {

    const [copy, setCopy] = useState(false);


    return (

        <div className="shortener-output-container">
            <input className="shortener-output" value={`http://localhost:3000/${props.shortUrl}`} read-only></input>
            <CopyToClipboard
                text={`http://localhost:3000/${props.shortUrl}`}
                onCopy={() => setCopy(true)}
            >
                <button className='newurl-btn'>{
                    copy ? 'Copied!' : 'Copy your link!'}</button>
            </CopyToClipboard>
        </div>
    )

}

export default NewUrl;