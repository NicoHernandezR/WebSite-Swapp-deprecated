import './App.css'
import { ToggleManager } from './context/ToggleManager'
import Footer from './footer/components/Footer'
import Inicio from './inicio/components/Inicio'
import Navbar from './navbar/components/Navbar'

function App() {
  return (
    //TODO
    //Implementar un componente home para la primera pagina
    <ToggleManager>
      <Navbar/>
      <Inicio/>
      <Footer/>
    </ToggleManager>
  )
}

export default App
