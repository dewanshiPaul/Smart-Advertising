import React, { useEffect, useState } from 'react';
import { Header } from './components/header/header';
import { Sidebar } from './components/sidebar/sideBar';
import { Homescreen } from './components/screens/homescreen';
import { Loginscreen } from './components/screens/loginscreen';
import { CreateAccount } from './components/screens/createaccountscreen';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Watchscreen } from './components/screens/watchscreen';
import { Searchscreen } from './components/screens/searchscreen';
import { Subscriptionscreen } from './components/screens/subscriptionscreen';
import { Adsheader } from './components/adsheader/adsheader';
import { Agewebcam } from './components/screens/agewebcam';
import './_App.scss';
import { Channelscreen } from './components/screens/chhannelscreen';

const LayoutHome = ({ children,noAdultAds }) => {
  const [sidebar,toggleSidebar] = useState(false);
  const [adsData,setAdsData] = useState('');

  const loading =  useSelector(state => state.auth.loading);
  const accessToken = useSelector(state => state.auth.accessToken)
  
  const navigate = useNavigate();

  const handleToggleSidebar = () => toggleSidebar(!sidebar);
  const handleData = (adsData) => setAdsData(adsData);

  useEffect(()=> {
    if(!loading && !accessToken) {
      navigate('/login')
    }
  },[accessToken,loading,navigate])
  return (
    <div className='main' handleData={handleData}>
      <Header handleToggleSidebar={handleToggleSidebar} />
        <div className="sidebar-container">
          <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar}/>
          <div className="content-container">
            <div className="d-flex align-items-center justify-content-center">
              <Agewebcam handleData={handleData}/>
            </div>
            {children}
          </div>
        </div> 
        <Adsheader adsData={adsData} noAdultAds={noAdultAds}/>
    </div>
  )
} 


function App() {
//fpr not showing adult ads when ticked
  const [noAdultAds,setNoAdultAds] = useState(false);
  const handleNoAdultAds = (noAdultAds) => {
    setNoAdultAds(noAdultAds);
    console.log(noAdultAds);
  }

  return (
    <div className="App" handleNoAdultAds={handleNoAdultAds}>
      <Router>
        <Routes>
          <Route exact path="/" element={<LayoutHome children={<Homescreen/>} noAdultAds={noAdultAds}/>}/>
          <Route exact path="/login" element={<Loginscreen handleNoAdultAds={handleNoAdultAds}/>}/>
          <Route exact path="/signIn" element={<CreateAccount/>}/>
          <Route exact path="/video/:id" element={<LayoutHome children={<Watchscreen/>} noAdultAds={noAdultAds}/>}/>
          <Route exact path="/search/:query" element={<LayoutHome children={<Searchscreen/>} noAdultAds={noAdultAds}/>}/>
          <Route exact path="/subscriptions" element={<LayoutHome children={<Subscriptionscreen/>} noAdultAds={noAdultAds}/>}/>
          <Route exact path="/channel/:channelId" element={<LayoutHome children={<Channelscreen/>} noAdultAds={noAdultAds}/>}/>
          <Route path='*' element={<Loginscreen/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
