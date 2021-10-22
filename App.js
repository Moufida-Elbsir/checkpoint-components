
import './App.css';
import FullName from './Profile/FullName';
import ProfilePhoto from './Profile/ProfilePhoto';
import Adress from './Profile/Adress';


function App() {
  return (
    <div className="App">
      <ProfilePhoto />
      <FullName />
      <Adress />
    </div>
  );
}

export default App;
