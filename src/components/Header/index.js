import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signOutUserStart } from './../../redux/User/users.action';
import { selectCartItemsCount } from './../../redux/Cart/cart.selectors';
//import './styles.scss';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from './../../assets/logo.jpg';

const mapState = (state) => ({
  currentUser: state.user.currentUser,
  totalNumCartItems: selectCartItemsCount(state)
});

const Header = props => {
  const dispatch = useDispatch();
  const { currentUser, totalNumCartItems } = useSelector(mapState);

  const signOut = () => {
    dispatch(signOutUserStart());
  };

  return (
    <header className="header" style=
      {{ height: '6.5rem' }} >
      <Navbar bg="light" variant="light" style={{
        position: 'relative',
        height: '100%',
        maxWidth: '1450px',
        margin: '0'
      }} >
        <Navbar.Brand href="/"><img src={Logo} alt="My Mart LOGO" style={{
          width: '5.5rem', position: 'absolute',
          top: '.5rem', left: '10px'
        }} />
        </Navbar.Brand>
        <Nav className="mr-auto" style={{
          fontSize: '1.8rem',
          lineHeight: '6.5rem',
          textAlign: 'center',
          color: 'black',
          textDecoration: 'none',
          textTransform: 'uppercase',
          cursor: 'pointer',
          margin: '50rem'
        }}
        >
          <Nav.Link href="/"style={{marginLeft:'2rem'}}>Home</Nav.Link>
          <Nav.Link href="/search"style={{marginLeft:'2rem'}}>Search</Nav.Link>

        </Nav>


        {currentUser && [
          <Nav className="mr-auto"  style={{
            fontSize: '1.8rem',
            lineHeight: '1rem',
            
            color: 'black',
            textDecoration: 'none',
            textTransform: 'uppercase',
            cursor: 'pointer',
            margin: '.5rem'
          }}>
            <Nav.Link to="/cart">
              Your Cart ({totalNumCartItems})
                          </Nav.Link>


            <Nav.Link href="/dashboard" >My Account</Nav.Link>


            <Nav.Link href="logout" onClick={() => signOut()} >LogOut</Nav.Link>




          </Nav>
        ]}

        {!currentUser && [

          <Nav className="mr-auto"  style={{
            fontSize: '1.8rem',
            lineHeight: '1rem',
            alignItems:'right',
            color: 'black',
            textDecoration: 'none',
            textTransform: 'uppercase',
            cursor: 'pointer',
            margin: '25rem'
          }}>

            <Nav.Link href="/registration"style={{marginLeft:'2rem'}}>
              Register</Nav.Link>



            <Nav.Link href="/login" style={{marginLeft:'2rem'}}>LogIn</Nav.Link>


          </Nav>


        ]}

      </Navbar>




     

    </header>
  );
};

Header.defaultProps = {
  currentUser: null
};

export default Header;





























