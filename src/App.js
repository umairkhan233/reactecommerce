import React from 'react';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginSignup from './pages/LoginSignup';
import Cart from './pages/Cart';
import Product from './pages/Product';
import ShopCategory from './pages/ShopCategory';
import Shop from './pages/Shop';
import Footer from './components/Footer/Footer';
import men_banner from './components/assets/banner_mens.png'
import women_banner from './components/assets/banner_women.png'
import kid_banner from './components/assets/banner_kids.png'

const App = () => {  
    return (
        <div> 
            <Router>          
            <Navbar />
                <Routes>
                    <Route path='/' element={<Shop/>} />
                    <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>} />
                    <Route path='/womens' element={<ShopCategory banner={women_banner} category="women" />} />
                    <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid" />} />
                    <Route path='/product' element={<Product/>}>
                        <Route path=':productId' element={<Product/>} />
                    </Route>
                    <Route path='/cart' element={<Cart/>} />
                    <Route path='/login' element={<LoginSignup/>} />
                </Routes>
            </Router>
            <Footer />

        </div>
    )
}

export default App;