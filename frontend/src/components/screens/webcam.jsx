import React,{ useState,useRef,useCallback,useEffect } from "react";
import axios from 'axios';
import Webcam from 'react-webcam';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/action/authaction'
import { useNavigate } from 'react-router-dom';
import './_webcam.scss';

//webcam for sending data face detected from login page for detection

export function Webcamcapture({handleShowCheckBox}) {
    const webcamRef = useRef(null);
    const userRef = useRef('');

    const videoConstraints = {
        width: 400,
        height: 400,
        facingMode: 'user'
    };

    const[name,setName] = useState();
    const[show,setShow] = useState(false);
    const[user,setUser] = useState('');
    userRef.current = user;

    const accessToken = useSelector(state => state.auth.accessToken);
    const navigate = useNavigate();

    const screenshot = useCallback(() => {
        const Imagesrc = webcamRef.current.getScreenshot();
        const data = {
            imagebase: Imagesrc,
            username: userRef.current
        }
        axios.post('http://127.0.0.1:5000/login',data)
            .then(res => {
                console.log(`response = ${res}`)
                setName(res.data);
                if(res.data === 'Face detected') {
                    setShow(true);
                }
                else 
                    setShow(false)
            })
            .catch(error => {
                console.log(`error = ${error}`)
            })
    },[webcamRef])

    const dispatch = useDispatch();

    const handleLogin = () => {
        dispatch(login())
    }

    useEffect(() => {
        if(accessToken) {
            navigate('/');
        }
    },[accessToken])

    useEffect(() => {
        console.log(user);
        handleShowCheckBox(show);
    },[show,user])

    const handleInput = (e) => {
        setUser(e.target.value)
    }

    return(
        <div className="Webcam" >
            <div className="field">
                    <input type="text" placeholder="username" name="user" value={user} onChange={handleInput} required autoComplete="off"/>
            </div>
            <Webcam audio={false} height={400} ref={webcamRef} screenshotFormat="image/jpeg" width={350} videoConstraints={videoConstraints}/>
            <button onClick={screenshot}>Click me!</button>
            <div>{name}</div>
            <> { show ? <button onClick={handleLogin} type='Submit'>Continue</button>:null} </>
        </div>
    )
}