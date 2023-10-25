import { useEffect, useState } from 'react'
import { fetchDataFromApi } from './utils/api'

function App() {
  useEffect(()=>{
    apiTesting()
  },[])
  const apiTesting =()=>{
    fetchDataFromApi('/discover/movie?')
    .then((res)=>{
      console.log(res)
    })
  }

  return (
    <div className="App">App</div>
  )
}

export default App
