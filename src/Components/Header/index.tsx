import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping} from "@fortawesome/free-solid-svg-icons"
import { NavLink } from 'react-router-dom'
import './index.css'
import { RootState } from '../../data/store'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import Modal from '../Modal'
import CartItems from '../CartItems'



export default function Header(){
    const {coursesData}=useSelector((state:RootState)=> state.courses)
    const addedElements= coursesData?.filter((course)=>course.isAdded === true).length

    const [isModalOpen,setIsModalOpen]=useState(false)


    return (
        <header>
        <h1>LOGO</h1>
            <nav>
                <ul>
                    <li><NavLink to="/">Home </NavLink></li> 
                    <li><NavLink to="/aboutus">about us</NavLink></li> 
                    <li><NavLink to="/contactus">contact us</NavLink></li> 
                    <li><NavLink to="/courses">courses</NavLink></li> 
                </ul>     
           </nav>   
        <div className="buttons">
            <button>sign in</button>
            <button>sign up</button>
        </div>
        <div className='cart' onClick={() => setIsModalOpen(true)} >
                <FontAwesomeIcon icon={faCartShopping}/>
                <div id="added-items">{addedElements}</div>
        </div>
        {
            isModalOpen && (
                <Modal onClose={()=> setIsModalOpen(false)}>
                    <h1>Cart Items Info</h1>
                    <CartItems/> 
                </Modal>
            )
            
        }
        </header>
    )
}
