import {Routes, Route} from 'react-router-dom'
import Nav from './components/Nav/Nav'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import ParkList from './pages/ParkList/ParkList'
import RideList from './pages/RideList/RideList'
import AddPark from './pages/AddPark/AddPark'
import './App.css';
import ParkDetails from './pages/ParkDetails/ParkDetails'

function App() {
  return (
    <div className='app'>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/parks-list' element={<ParkList/>}></Route>
        <Route path='/parks/details/:id' element={<ParkDetails/>}></Route>
        <Route path='/add-park' element={<AddPark/>}></Route>
        
      </Routes>
     
    </div>
  );
}

export default App;
