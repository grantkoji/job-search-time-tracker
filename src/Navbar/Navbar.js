import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import * as action from '../modules/actionCreators/actionCreators'
import {connect} from 'react-redux'



 
 const Navbar = props => {

    const redirectHomePage = () => {
        props.history.push('/')
    }

    const redirectToBlogs = () => {
        props.history.push('/blogs')
    }

    const redirectToResume = () => {
        props.history.push('/gamegram')
    }

    const redirectToAboutMe = () => {
        props.history.push('/aboutme')
    }

    // const redirectToSignUp = () => {
    //     props.history.push('/signup')
    // }

    // const redirectToLogin = () => {
    //     props.history.push('/login')
    // }

    // const redirectToNewGame = () => {
    //   props.history.push('/games/new')
    // }

    // const redirectToScheduledGames = () => {
    //   props.history.push('/scheduledgames')
    // }


    const changePointer = (e) => {  
      e.target.style.cursor = 'pointer'
    }

            
     return (
       <>
        <div className='about-me-navbar'>
            <div className='navbar-button' alt="Reviews Index Button" onClick={redirectHomePage} onMouseOver={changePointer} >Home Page</div>
            <div className='navbar-button' alt="Users Index Button" onClick={redirectToBlogs} onMouseOver={changePointer}>Blogs</div>
            <div className='navbar-button' alt="Resume Index Button" onClick={redirectToResume} onMouseOver={changePointer}>Resume</div>
            <div className='navbar-button' alt="Games Index Button" onClick={redirectToAboutMe} onMouseOver={changePointer} >About Me</div>
        </div>
       </>
     )
   
 }
 



export default withRouter(Navbar)

