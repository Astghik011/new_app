import NavBar from './components/NavBar/NavBar'
// import MainContent from './components/MainContent/MainContent'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Aside from './components/Aside/Aside'
import './App.css'
import {lazy, Suspense} from "react";

const MainContent = lazy(()=>import("./components/MainContent/MainContent"))

function App(){
  return <>
    <Header />
    <NavBar />
    <Aside />
    <Suspense fallback ={<div style = {{width: "200px", margin: "200px auto"}}>Loading...</div>}>
      <MainContent />
    </Suspense>
    <Footer />
  </>
}

export default App
