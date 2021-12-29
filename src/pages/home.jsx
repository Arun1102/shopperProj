import React from 'react'
import Navbar from '../components/navbar'
import Announcement from '../components/announcement'
import Slider from "../components/Slider"
function home() {
    return (
        <div>
            <Announcement/>
            <Navbar/>
            <Slider/>
        </div>
    )
}

export default home
