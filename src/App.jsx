import { useEffect, useState } from 'react'
import { fetchDataFromApi } from './utils/api'
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfiguration } from './store/homeSlice'
import './App.css'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Details from './pages/details/Details'
import SearchResults from './pages/searchResutls/SearchResults'
import Explore from './pages/explore/Explore'
import PageNotFound from './pages/404/PageNotFound'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

function App() {
  const dispatch = useDispatch()
  const url = useSelector((state)=>state.home.url)
  useEffect(()=>{
    apiTesting()
  },[])
  const apiTesting =()=>{
    fetchDataFromApi('/discover/movie?')
    .then((res)=>{
      console.log(res)
      dispatch(getApiConfiguration(res))
    })
  }

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/:mediaType/:id" element={<Details/>}/>
        <Route path="/search/:query/" element={<SearchResults />}/>
        <Route path="/explore/:mediaType/" element={<Explore/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
