
import {BrowserRouter as Router,Route, Routes, Link,useParams } from 'react-router-dom';
import './App.css';
import Home from  './Home';
import Cursos from './Cursos';
import Modulos from './Modulos';
import Aulas from './Aulas';


function App() {
  return (
     <Router>
       <div>
          <Routes>

          <Route path='/:nomeCurso/:nomeModulo/:nomeAula'>
           
          </Route>

          <Route path='/:nomeCurso/:nomeModulo' element={<Aulas/>}>
                 
                 </Route>
          <Route path='/:nomeCurso' element={<Modulos/>}>
                  
            </Route>

          <Route path='/cursos'element={<Cursos/>}>
               
           </Route>

           <Route path='/'element={<Home/>}>
               
           </Route>

          </Routes>
       </div>
     </Router>
    
  );
}




export default App;
