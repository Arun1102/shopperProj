import React from 'react'
import './slider.css'
import {ArrowBackIosOutlined, ArrowForwardIosOutlined} from "@material-ui/icons"

function slider() {
    return (
        <div className='slider'>
            <div className="icon-left">
            <ArrowBackIosOutlined className='arrocss'/>
            </div>
            <div className="sliderbg">
                <div className="sliderimg">
                    <img src="https://previews.123rf.com/images/subbotina/subbotina1402/subbotina140200006/25594198-fashion-shopping-model-girl-full-length-portrait.jpg?fj=1" alt="" />
                </div>
                <div className="sliderinfo">
                    <span className='title'>Summer Sale is on</span>
                    <span className='subtitle'>Sail it here</span>
                    <button className='buttontitle'>Shop Now</button>
                </div>
            </div>
            
           
            <div className="icon-right">
            <ArrowForwardIosOutlined className='arrocss'/>
            </div>
        </div>
    )
}

export default slider
