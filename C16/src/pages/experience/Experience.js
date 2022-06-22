import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import PersonalInformation from '../../components/PersonalInformation';
import {Info} from '../../components/Data';
import Institutos from '../../components/Institutos';

const Experience = () => {
  const navigate = useNavigate();
  return (
    
    <div className="App">
        <Header/>
        <PersonalInformation
        name={Info.personalData.name}
        nationality={Info.personalData.nationality}
        age={Info.personalData.age}
        occupation={Info.personalData.occupation}
        avatar={Info.personalData.avatar}
        />
        <Institutos 
        institutos={Info.education}
        />
    </div>
  )
}

export default Experience