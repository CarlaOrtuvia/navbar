import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Inicio from './components/inicio';
import Contacto from './components/contacto';
import Productos from './components/productos';
import Flores from './components/flores';
import Tarot from './components/tarot';
import Biodeco from './components/biodeco';
import CartWidget from './components/cartWidget';
import NavbarEjemplo from './layouts/Navbar';


function App() {
  return (
   <div className='App'>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <NavbarEjemplo /> }> 
      <Route path='inicio' element={ <Inicio /> }/>
        <Route path='contacto' element={ <Contacto /> }/>
        <Route path='productos' element={ <Productos /> }/>
        <Route path='flores' element={ <Flores /> }/>
        <Route path='tarot' element={ <Tarot /> }/>
        <Route path='biodeco' element={ <Biodeco /> }/>
        <Route path='cartWidget' element={ <CartWidget /> }/>



        <Route path='*' element={ <Navigate replace to='/'/> }/>
      </Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
