import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthForm from '../components/AuthForm/AuthForm'
import Home from '../pages/Home/Home'
import LookForPhotograph from '../pages/LookForPhotograph/LookForPhotograph'
import Contact from '../pages/Contact/Contact'
import Devis from '../pages/Devis/Devis'
import Pricing from '../pages/Pricing/Pricing'
import Blog from '../pages/Blog/Blog'
import Legal from '../pages/Legal/Legal'
import Store from '../pages/Store/Store'
import Gallery from '../pages/Gallery/Gallery'
import Services from '../pages/Services/Services'
import Results from '../pages/Results/Results'
import NotFound from '../pages/NotFound/NotFound'
import SingleBlog from '../pages/SingleBlog/SingleBlog'
import PhotographDashboard from '../pages/PhotographDashboard/PhotographDashboard'

const AppRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/look-for-photograph' element={<LookForPhotograph/>}/>
        <Route path='/login' element={<AuthForm isRegister={false}/>}/>
        <Route path='/register' element={<AuthForm isRegister={true}/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/devis' element={<Devis/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/store' element={<Store/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/legal' element={<Legal/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/results' element={<Results/>}/>
        <Route path='/post/:postId' element={<SingleBlog/>}/>
        <Route path='/photograph-dashboard' element={<PhotographDashboard/>}/>
        <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRouter