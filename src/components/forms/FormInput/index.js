import React from 'react'
//import './styles.scss'

//import Form from 'react-bootstrap/Form'
//import FormInput from './index';

function FormInputFunc({handleChange,label,...otherProps}) {
    return (

  
         <div className='formrow'>
           {label &&(
               <label>
                   {label}
               </label>
           )} 

           <input className='forminput' onChange={handleChange} {...otherProps}/>

           
        </div> 
    );
    
}

export default FormInputFunc
