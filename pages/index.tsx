
import type { NextPage } from 'next'
import React from 'react'
import Carousel from '../components/Carousel'
import SearchBar from '../components/SearchBar'
const Home: NextPage = () => {

  return (
    <html default-lang="lt" lang="lt">
    <div>
      <main>
        <title>Technology comparison Website Design</title>
        <p>Pagrindinis</p>
      </main>
      <body>
        <h1>Kursinis darbas</h1>
        <SearchBar></SearchBar>
        <Carousel></Carousel>
      </body>
    </div>
    </html>
  )}
export default Home