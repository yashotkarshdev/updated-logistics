import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layout/layout'
import HomeMain from './pages/home/HomeMain'
import AboutMain from './pages/about/AboutMain'
import AppRoute from './routes/AppRoute'
import ScrollToTop from './components/common/ScrollToTop'

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppRoute />
    </BrowserRouter>
  )
}

export default App