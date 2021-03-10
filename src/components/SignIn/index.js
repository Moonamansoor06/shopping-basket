import React,{useState,useEffect} from 'react'
import {Link,useHistory} from 'react-router-dom'
//import './styles.scss'
import Buttons from './../../components/forms/Buttons/index'
import FormInputFunc from './../forms/FormInput/index';
import AuthWrapper from '../AuthWrapper';
import { useDispatch,useSelector } from 'react-redux';
import {emailSignInStart,googleSignInStart} from './../../redux/User/users.action'
import Form from 'react-bootstrap/Form'
import { ListGroup } from 'react-bootstrap';
import  Card  from 'react-bootstrap/Card';


const mapState= ({user})=>({
    currentUser:user.currentUser
});

const SignIn=props=>  {
   
    const dispatch=useDispatch();
    const history = useHistory();
    const {currentUser}=useSelector(mapState);
    const [email,setEmail]= useState('');
    const [password, setPassword] = useState('')

    useEffect(()=>{
        
        if(currentUser){
       resetForm();
     
       history.push('/')
        }
        
    },[currentUser]);// eslint-disable-line react-hooks/exhaustive-deps

    
   const resetForm=() =>{
    setEmail('')
    setPassword('')
   }

   const handleSubmit=  e =>{
    e.preventDefault();
       dispatch(emailSignInStart({email,password}));
       
   }

   const handleGoogleSignIn=()=>{
    dispatch(googleSignInStart());
   }
        const configAuthWrapper={
            headline:'LogIn'
        };
        
    return (
        <div>
      
<Card style={{ width: '40rem', alignContent:'center',alignItems:'center', marginLeft:'30%',marginTop:'2rem',paddingTop:'2rem',paddingBottom:'2rem'}}>
<Card.Title style={{fontSize:'3rem', fontWeight:'bold'}}>Login</Card.Title> 
<Form onSubmit={handleSubmit}>
  <ListGroup variant="flush">
  
    <ListGroup.Item>
                      <FormInputFunc
                       type='email'
                        name='email'
                        value={email}
                        placeholder='Email'
                        handleChange={e=>setEmail(e.target.value)}
                      /></ListGroup.Item>
    <ListGroup.Item><FormInputFunc
                       type='password'
                        name='password'
                        value={password}
                        placeholder='Password'
                        handleChange={e=> setPassword(e.target.value)}
                      /></ListGroup.Item>
    <ListGroup.Item><Buttons type='submit'>
                          LogIn
                      </Buttons>
                      </ListGroup.Item>
                    <ListGroup.Item>
                              <Buttons onClick={handleGoogleSignIn}>
                                SignIn with Google
                              </Buttons>

                              </ListGroup.Item>
  </ListGroup>

</Form>
</Card>

</div>
    
    )
    }


export default SignIn;
