import React from 'react'
import Navbar from '../components/navbar'
import Announcement from '../components/announcement'
import Slider from "../components/Slider"
import Categories from "../components/Categories";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Footer from "../components/Footer";
function home() {
    return (
        <div>
            <Announcement/>
            <Navbar/>
            <Slider/>
            <Categories />
            <Products/>
            <Newsletter/>
            <Footer/>
        </div>
    )
}

export default home
