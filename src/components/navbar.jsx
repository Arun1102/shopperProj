import React from 'react'
import './navbar.css'
import {Badge} from "@material-ui/core"
import {Search, ShoppingCartOutlined } from "@material-ui/icons"
function navbar() {
    return (

        <div className="container">
            <div className="wrapper">
                <div className="left">
                  
                  <div className="search">
                  <span>EN</span> 
                  <input type="text" ></input>
                    <Search className='Icons'/>
                    </div>
                </div>
                
                <div className="middle">iShoppee</div>
                <div className="right">
                    <span>Register</span> 
                    <span>Sign In</span> 
                    <span><Badge badgeContent={4} color="success">
                        <ShoppingCartOutlined color="red" />
                    </Badge>
                    </span> 
                </div>
                
            </div>
        </div>
        
    )
}

export default navbar
