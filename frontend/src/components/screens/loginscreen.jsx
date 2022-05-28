import React, { useEffect, useState } from 'react';
import { Webcamcapture } from './webcam';
import YOUTUBELOGO from '../header/youtube_logo.jpg';
import './_loginscreen.scss';
//login screen template
//face detection at backend by sending base64 code of frame
//allow google auth for face matched user
//checkbox for allow adult ads
export function Loginscreen({handleNoAdultAds}) {

    const[showWebcam, setShowWebcam] = useState(false);
    const[showCheckBox,setShowCheckBox] = useState(false);
    const[isChecked,setIsChecked] = useState(false);

    const handleToggleWebcam = () => {setShowWebcam(!showWebcam)};
    const handleShowCheckBox = (showCheckBox) => {setShowCheckBox(showCheckBox)};
    const handleOnCheckBox = () => { 
        setIsChecked(!isChecked); 
        handleNoAdultAds(!isChecked);
    }

    return (
        <div className="login" handleShowCheckBox={handleShowCheckBox}>
            <div className="login_header">
                <img src={YOUTUBELOGO} alt='youtube logo' />
                <span className='login_header_span'>
                    Login via facial recognition
                    <input type='submit' value={ showWebcam ? 'Close':'Open'} onClick={() => handleToggleWebcam()} className='login_header_span_show'/>
                    { showWebcam ? 
                        <div>
                            <Webcamcapture handleShowCheckBox={handleShowCheckBox}/>
                            { showCheckBox ? 
                                <div>
                                <input type='checkbox' id='adultAdsRestricted' checked={isChecked} onChange={handleOnCheckBox}/> 
                                <label for='adultAdsRestricted' style={{marginLeft: '1rem'}}>Do not allow adult ads</label>
                                </div>
                                : null } 
                        </div>
                        : null
                    }
                </span>
                <div className='login_header_account'>
                    <span>
                    <a href="./signIn">Create Account</a>
                    </span>
                </div>
            </div>
        </div>
    );
}