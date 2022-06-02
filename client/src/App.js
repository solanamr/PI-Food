import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import LandingPage from './componentes/LandingPage/landing';
import HomePage from './componentes/Home/home';
import RecipeCreate from './componentes/RecipeCreate/recipeCreate'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
      <Route path='/' element={<LandingPage />}/>
      <Route path= '/home' element= {<HomePage />}/> 
      <Route path = '/recipes' element = {<RecipeCreate />}/>
    </Routes>
    </div>
</BrowserRouter>
  );
}

export default App;
