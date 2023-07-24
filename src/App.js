import NavBar from './components/NavBar/NavBar'
import MainContent from './components/MainContent/MainContent'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Aside from './components/Aside/Aside'
import './App.css'
import { Router, Switch, Route } from 'react-router-dom'

function App(){
    return (
      <Router>
        <div>
          <Header />
          <NavBar />
          <Aside />
          <MainContent />
          <Footer />
          <Switch>
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
          </Switch>
        </div>
      </Router>
  )
}

export default App
