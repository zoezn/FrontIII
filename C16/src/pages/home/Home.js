import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import {Info} from '../../components/Data';
import HomeRender from '../../components/HomeRender'

const Home = () => {
  const navigate = useNavigate();
  return (
    
    <div className="App">
        <Header/>
        <HomeRender nombre={Info.personalData.name} apellido={Info.personalData.lastname}/>
    </div>
  )
}

export default Home