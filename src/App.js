import './App.css'
import Sidebar from '../src/components/Sidebar/Sidebar'
import MainDash from './components/MainDash/MainDash';
import RightSide from './components/RightSide/RightSide';
function App() {
  return (
  <div className="App">
  
    <div className= "AppGlass">
      <Sidebar/>
      <MainDash/>
      <RightSide/>

    </div>
  </div>
  );
}

export default App;
