

import Buscador from "./components/Buscador"
{/*import Eliminar from './components/Eliminar'
import FormCrear from "./components/FormCrear"
import FormEditar from "./components/FormEditar"*/}
import NavBar from "./components/NavBar"
import Producto from "./components/Procucto"
import SideBar from "./components/SideBar"

import './App.css'

function App() {
  

    return ( 
      <div className="App"> 
          <NavBar />   
          <SideBar /> 
          <Buscador /> 
          <Producto />
         {/*  <FormCrear />    
          <FormEditar />
          <Eliminar />  */}     
           
      </div>
    )
    
  }
  
  export default App
  