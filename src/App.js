import './App.css'
import {Routes , BrowserRouter , Route} from 'react-router-dom';
import Navbar from '../src/Gym/Components/Home/Navbar/Navbar';
import Home from '../src/Gym/pages/Home';
import FreeWorkOut from './Gym/pages/FreeWorkOut';
import Shedule from './Gym/pages/Shedule';
import MemberShipHome from './Gym/pages/MemberShipHome';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <BrowserRouter>
            <Navbar/>
              <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path='/Schedule' element={<Shedule/>}/>
                <Route exact path='/Exercises' element={<FreeWorkOut/>}/>
                <Route exact path='/MemberShip' element={<MemberShipHome/>}/>
              </Routes>
          </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
