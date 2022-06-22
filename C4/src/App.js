import logo from './logo.svg';
import './App.css';
import Header from './Header';
import PersonalInformation from './PersonalInformation';
import {Info} from './Data';
import Institutos from './Institutos';

function App() {
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
  );
}

export default App;
