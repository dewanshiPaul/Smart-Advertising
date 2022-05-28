import React,{ useCallback,useEffect,useRef, useState } from "react";
import axios from 'axios';
import Webcam from 'react-webcam';

export function Agewebcam({handleData}) {
    const webcamRef = useRef(null);
    const[getData,setGetData] = useState('');

    const videoConstraints = {
        width: 300,
        height: 300,
        facingMode: 'user'
    };

    const screenshot = useCallback(() => {
        const Imagesrc = webcamRef.current.getScreenshot();
        // console.log(Imagesrc);
        axios.post('http://127.0.0.1:5000/verify',{data:Imagesrc})
            .then(res => {
                console.log(`response = ${res}`);
                setGetData(res.data);
            })
            .catch(error => {
                console.log(`error = ${error}`);
            })
    },[webcamRef])

    useEffect(() => {
        // console.log(getData);
        handleData(getData);
    },[getData])

    setInterval(screenshot,5000);
    
    return (
        <>
        <Webcam audio={false} height={400} ref={webcamRef} screenshotFormat="image/jpeg" width={350} videoConstraints={videoConstraints}/>
        <button onClick={screenshot} style={{display:'none'}}>Click me!</button>
        </>
    )
}