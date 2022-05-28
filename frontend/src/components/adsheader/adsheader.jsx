import axios from "axios";
import React, { useEffect, useState } from "react";
import './_adsheader.scss';
import ADULT1 from '../../adsimages/adult/adult1.jpg';
import ADULT2 from '../../adsimages/adult/adult2.jpg';
import ADULT3 from '../../adsimages/adult/adult3.jpg';
import ADULT4 from '../../adsimages/adult/adult4.jpg';
import ADULT5 from '../../adsimages/adult/adult5.jpg';
import KIDS1 from '../../adsimages/kids/kids1.jpg';
import KIDS2 from '../../adsimages/kids/kids2.jpg';
import KIDS3 from '../../adsimages/kids/kids3.jpg';
import KIDS4 from '../../adsimages/kids/kids4.jpg';
import KIDS5 from '../../adsimages/kids/kids5.jpeg';



//get age details from backend and display images as conditions
export function Adsheader({adsData,noAdultAds}) {
    const imageList1 = [KIDS1, KIDS2, KIDS3, KIDS4, KIDS5];
    const imageList2 = [ADULT1, ADULT2, ADULT3, ADULT4,ADULT5];
    const idx = Math.floor(Math.random()*5);
    console.log(noAdultAds)
    const getImage = (adsData,noAdultAds) => {
        if(noAdultAds == true) {
            return imageList1[idx];
        }
        else { 
            if(adsData =='kid') {
                return imageList1[idx];
            }
            else {
                const listIdx = Math.floor(Math.random()*2);
                if(listIdx == 0) {
                    return imageList1[idx];
                }
                else {
                    return imageList2[idx];
                }
            }
        }
    }

    return (
        <div className="Adsheader">
            <img src={getImage(adsData,noAdultAds)} alt=''/>
        </div>
    )
}