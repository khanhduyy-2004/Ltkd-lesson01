import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import LtkdNavBar from './components/LtkdNavBar'
import LtkdHome from './pages/LtkdHome'
import LtkdAbout from './pages/LtkdAbout'
import LtkdContact from './pages/LtkdContact'
import LtkdProduct from './pages/LtkdProduct'
import LtkdProductDetail from './pages/LtkdProductDetail'
import LtkdNotFound from './pages/LtkdNotFound'
import LtkdUsers from './pages/LtkdUsers'
import LtkdUserAdd from './pages/LtkdUserAdd'
import LtkdUserEdit from './pages/LtkdUserEdit'
import LtkdCategories from './pages/LtkdCategories'

export default function LtkdApp() {
  return (
    <div className='container border'>
        <h1>React Route - Demo [Lê Trần Khánh Duy]</h1>
        <hr/>
        <BrowserRouter>
            <LtkdNavBar />
            <Routes>
                <Route path='/' element={<LtkdHome />} />
                <Route path='/about' element = {<LtkdAbout />} />
                <Route path='/contact' element = {<LtkdContact />} />

                {/* Nested route  */}
                <Route path='/products' element = {<LtkdProduct />} >
                  <Route path=":id" element = {<LtkdProductDetail />} />
                </Route>

                <Route path='/users' element = {<LtkdUsers />}> </Route>
                <Route path="/users/add" element = {<LtkdUserAdd />} />
                <Route path="/users/edit/:id" element = {<LtkdUserEdit />} />

                <Route path='/categories' element = {<LtkdCategories />}> </Route>

                {/* 404 page  */}
                <Route path='*' element = {<LtkdNotFound />} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}