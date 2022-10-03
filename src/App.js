//USESSTATE es un hook para ocupar componentes
// se debe instalar react-dom router =   npm install react-router-dom
import ListadoProfesores from './Profesores';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    
   <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Profesores' element={<ListadoProfesores />} />
    </Routes>
   
    
  );
  }
export default App;