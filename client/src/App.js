import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import LandingPage from './componentes/LandingPage/landing';
import HomePage from './componentes/Home/home';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
      <Route path='/' element={<LandingPage />}/>
      <Route path= '/home' element= {<HomePage />}/> 
    </Routes>
    </div>
</BrowserRouter>
  );
}

export default App;
