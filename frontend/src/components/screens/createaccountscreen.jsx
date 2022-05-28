import React,{ useState,useEffect } from "react";
import axios from 'axios';
import { FaUserAlt } from "react-icons/fa";
import YOUTUBELOGO from '../header/youtube_logo.jpg';
import './_createaccountscreen.scss';
//sign in page template 
//passing data to backend
export function CreateAccount() {
    const[details,setDetails] = useState({
        fname: '',
        mail: '',
    });

    const[image,setImage] = useState();
    const[preview,setPreview] = useState();

    const[status,setStatus] = useState();

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setDetails({...details,[name]:value});
        // console.log(value)
    }

    const onImageChange = (e) => {
        if (!e.target.files || e.target.files.length === 0) {
            setImage(undefined);
            return
        }
        setImage(e.target.files[0]);
        console.log(e.target.files[0]);
    }

    useEffect(() => {
        if(!image) {
            setPreview(undefined);
            return
        }
        var binaryData = [];
        binaryData.push(image);
        const objectUrl = window.URL.createObjectURL(new File(binaryData, {type: "image/jpeg"}))
        setPreview(objectUrl);

        return () => window.URL.revokeObjectURL(objectUrl);
    },[image]);

    const fileUploader = (e) => {
        e.preventDefault();
        const dt = new FormData();
        dt.append('file',image)
        dt.append('name',details.fname)
        dt.append('email',details.mail)
        console.log(image)
        axios({
            method: 'post',
            url: 'http://127.0.0.1:5000/signIn',
            data: dt

        })
            .then(res => {
                console.log(`response: ${res}`);
                setStatus(res.data);
            })
            .catch(error => {
                console.log(`error = ${error}`)
            })
    }

    return(
        <>
        <div className="createaccount">
            <div className="createaccount-header">
                <img src={YOUTUBELOGO} alt='youtube logo' />
                { status !== "Done" ? 
                <>
                <h1>Sign In</h1>
                <form className="createaccount-header-form" method="post" encType="multipart/form-data" action="http://127.0.0.1:5000/signIn">
                    <div className="field">
                        < FaUserAlt />
                        <input type="text" placeholder="username" name="fname"value={details.fname} onChange={handleInput} required autoComplete="off"/>
                    </div>
                    {/* <div className="field">
                        < MdEmail />
                        <input type="email" placeholder="email" name="mail" value={details.mail} onChange={handleInput} required autoComplete="off"/>
                    </div> */}
                    <div className="image">
                        <input type="file" accept="image/*" onChange={onImageChange} required/>
                        { image && <img src={ preview } /> }
                        <b>Note: Upload image with only your face. Make soure your image is clear.</b>
                    </div>
                    <div className="submit">
                        <input type="submit" value="Submit" onClick={fileUploader}/>
                    </div>
                </form>
                </> :
                <>
                    <div className="result">
                        <h3> Hello {details.fname}! <br/>
                        Your registration is successfully completed now you may proceed to login. 
                        </h3>
                    </div>
                </>
                }
                <div className='loginLink'>
                    <span>
                    <a href="./login">Return to Login</a>
                    </span>
                </div>
            </div>
        </div>
        </>
    );
}