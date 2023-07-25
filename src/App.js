import NavBar from './components/NavBar/NavBar'
import MainContent from './components/MainContent/MainContent'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Aside from './components/Aside/Aside'
import './App.css'


function App(){
    return (
        <div>
          <Header />
          <NavBar />
          <Aside />
          <MainContent />
          <Footer />
        </div>
  )
}

export default App
