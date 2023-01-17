import NavBar from './NavBar';
import ItemListContainer from './ItemListContainer';
import React from 'react'

export default function Home() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="CoderHouse - Primera Preentrega"/>
    </div>
    
  )
}
