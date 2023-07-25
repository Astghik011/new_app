import NavBar from './components/NavBar/NavBar'
import MainContent from './components/MainContent/MainContent'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Aside from './components/Aside/Aside'
import './App.css'
import { Router, Routes, Route } from 'react-router-dom'
import Dessert from '../src/components/Routes/Dessert'
import HotDog from '../src/components/Routes/HotDog'
import Kombo from '../src/components/Routes/Kombo'
import Pizza from '../src/components/Routes/Pizza'
import Sauce from '../src/components/Routes/Sauce'
import Shawarma from '../src/components/Routes/Shawarma'
import Snacks from '../src/components/Routes/Snacks'
import Wok from '../src/components/Routes/Wok'
import Index from '../src/components/Routes/Index'

function App(){
    return (
      <Router>
        <div>
          <Header />
          <NavBar />
          <Aside />
          <MainContent />
          <Footer />
          
          <Routes>
            <Route path="/">
              <Index />
            </Route>
            <Route path="/dessert">
              <Dessert />
            </Route>
            <Route path="/hot-dog">
              <HotDog />
            </Route>
            <Route path="/kombo">
              <Kombo />
            </Route>
            <Route path="/pizza">
              <Pizza />
            </Route>
            <Route path="/sauce">
              <Sauce/>
            </Route>
            <Route path="/shawarma">
              <Shawarma />
            </Route>
            <Route path="/snacks">
              <Snacks />
            </Route>
            <Route path="/wok">
              <Wok />
            </Route>
          </Routes>
        </div>
      </Router>
  )
}

export default App
