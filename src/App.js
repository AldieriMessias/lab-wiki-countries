import {Routes, Route} from "react-router-dom"
import {Navbar} from "./Components/Navbar"
import {SideMenu} from './Components/SideMenu'
import {CountryPage} from "../src/pages/CountryPage"


function App() {
  return (
    <div className="App">
      <Navbar/>

      <div className="d-flex" >
        <SideMenu />
        
        <Routes>
          <Route path="/:countryCode" element={<CountryPage />} />
          
        </Routes>
      </div>
    </div>
  );
}

export default App;
