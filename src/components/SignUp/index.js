import React, { useState,useEffect } from 'react'
import {useHistory} from 'react-router-dom'
import {useDispatch,useSelector } from 'react-redux'


//import './styles.scss'
import FormInputFunc from './../forms/FormInput/index';
import Buttons from '../forms/Buttons';
import Form from 'react-bootstrap/Form';

import ListGroup from 'react-bootstrap/ListGroup';

import AuthWrapper from '../AuthWrapper';
import {signUpUserStart} from './../../redux/User/users.action'
import  Card  from 'react-bootstrap/Card';

const mapState = ({ user }) => ({
    currentUser: user.currentUser,
    userErr: user.userErr
  });
  
  const Signup = props => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { currentUser, userErr } = useSelector(mapState);
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState([]);
  
    useEffect(() => {
      if (currentUser) {
        reset();
        history.push('/');
      }
  
    }, [currentUser]);// eslint-disable-line react-hooks/exhaustive-deps
  
    useEffect(() => {
      if (Array.isArray(userErr) && userErr.length > 0) {
        setErrors(userErr);
      }
  
    }, [userErr]);// eslint-disable-line react-hooks/exhaustive-deps
  
    const reset = () => {
      setDisplayName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setErrors([]);
    };
  
    const handleFormSubmit = event => {
      event.preventDefault();
      dispatch(signUpUserStart({
        displayName,
        email,
        password,
        confirmPassword
      }));
    }
  
   
  
    return (
     
        <div className="formWrap">
          <Card style={{ width: '35rem', alignItems:'center', marginLeft:'30%',marginTop:'2rem',paddingTop:'2rem',paddingBottom:'2rem'}}>
<Card.Title style={{fontSize:'3rem', fontWeight:'bold'}}>Registration</Card.Title>
<Form onSubmit={handleFormSubmit}  
style={{display: 'block',
width: '100%',
fontSize: '1.5rem',

fontWeight: 400,
textAlign: 'center',
padding: '10px' ,


outline: 'none'}}>
{errors.length > 0 && (
            <ul>
              {errors.map((err, index) => {
                return (
                  <li key={index}>
                    {err}
                  </li>
                );
              })}
            </ul>
          )}
  <ListGroup variant="flush" >
  <ListGroup.Item >
         
            <FormInputFunc
              type="text"
              name="displayName"
              value={displayName}
              placeholder="Full name"
              handleChange={e => setDisplayName(e.target.value)}
              style={{
                width: '25rem',
              }}

            />
    </ListGroup.Item>
    <ListGroup.Item>
            <FormInputFunc
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              handleChange={e => setEmail(e.target.value)}
              style={{
              width: '25rem',
            }}
            />
    </ListGroup.Item>
    <ListGroup.Item>
            <FormInputFunc
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              handleChange={e => setPassword(e.target.value)}
             
              style={{
                width: '25rem',
              }}
            />

      </ListGroup.Item>
            <FormInputFunc
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              placeholder="Confirm Password"
              handleChange={e => setConfirmPassword(e.target.value)}
              style={{
                width: '25rem',
                marginTop:'1rem',
                marginBottom:'1rem'
              }}
             
            />
        <ListGroup.Item  >
            <Buttons type="submit"  >
              Register
              </Buttons>
              </ListGroup.Item>
              </ListGroup>
          </Form>
          </Card>
        </div>
      
    );
  }
  
  export default Signup;