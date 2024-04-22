import './App.css'
import Footer from './footer/components/Footer'
import Inicio from './inicio/components/Inicio'
import Navbar from './navbar/components/Navbar'

function App() {
  return (
    //TODO
    //Implementar un componente home para la primera pagina
    <div className='bg-custom-black min-h-screen'>
      <Navbar/>
      <div>
        <Inicio/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
