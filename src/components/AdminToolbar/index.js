import React from 'react'
import {Link} from 'react-router-dom';
//import './styles.scss'
import { useSelector } from 'react-redux';
import {CheckUserIsAdmin} from './../../Utils'
import  Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'



const mapSate= ({user})=>({
  currentUser:user.currentUser
});

const AdminToolbar = (props) => {
    const {currentUser}=useSelector(mapSate)

    const isAdmin=CheckUserIsAdmin(currentUser)
    if(!isAdmin) return null;
    return (
        <div className='admintoolbar'>
             <Navbar bg="dark" variant="dark" style={{position:'relative'}}>
             <Nav className="mr-auto">
      <Nav.Link href="admin">My Admin</Nav.Link>
      
    </Nav>
   
  </Navbar>
            {/* <ul>
                <li>
                    <Link to='/admin'>
                    My Admin
                    </Link>
                </li>
            </ul> */}
            
        </div>
    )
}

export default AdminToolbar
