import axios from "axios";
import React, { useEffect, useState } from "react";
import './_adsheader.scss';
import BOXER from '../../adsimages/adult/boxer.jpg';
import BRA from '../../adsimages/adult/bra.jpg';
import MANFORCE from '../../adsimages/adult/manforce.jpg';
import VIMAL from '../../adsimages/adult/vimal.jpg';
import WHISPER from '../../adsimages/adult/whisper.jpg';
import LEGOS from '../../adsimages/kids/legos.jpg';
import APSARA from '../../adsimages/kids/apsara.jpg';
import BARBIE from '../../adsimages/kids/barbie.jpg';
import MPP from '../../adsimages/kids/mamypokopants.jpg';
import KJ from '../../adsimages/kids/kinderjoy.jpeg';




export function Adsheader({adsData,noAdultAds}) {
    const imageList1 = [LEGOS, APSARA, BARBIE, MPP, KJ];
    const imageList2 = [BOXER, BRA, MANFORCE, VIMAL,WHISPER];
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