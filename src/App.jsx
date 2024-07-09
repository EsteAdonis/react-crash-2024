// import React from 'react'
import {
  Router,
  createBrowserRouter,
  createRoutersFromRoutes,
  RouterProvider
} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import HomeCards from './components/HomeCards/HomeCards'
import JobListings from './components/JobListings/JobListings'
import ViewAllJobs from './components/VIewAllJobs/ViewAllJobs'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero title='Test Tile' subtitle='This is the subtitle' />
      <HomeCards />
      <JobListings />
      <ViewAllJobs />
    </>
  )
}

export default App