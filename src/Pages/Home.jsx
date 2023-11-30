import React from 'react'
import Main from '../Components/Main'
import Row from '../Components/Row'
import requests from '../Requests'

function Home() {
  return (
    <div>
      <Main />
      <Row rowID='1' title='Horror' fetchURL={requests.HorrorMovies} />
      <Row rowID='2' title='Popular' fetchURL={requests.Popular} />
      <Row rowID='3' title='Top Rated' fetchURL={requests.Toprated} />
      <Row rowID='4' title='Trending' fetchURL={requests.trending} />
      <Row rowID='5' title='Upcoming' fetchURL={requests.Upcoming} />
      
    </div>
  )
}

export default Home
