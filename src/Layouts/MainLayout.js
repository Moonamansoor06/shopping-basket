import React from 'react';



//Pages
import Header from './../components/Header/index';
import Footer from './../components/Footer/index';

function MainLayout(props) {
    return (
        <div >
            <Header {...props}/>
            <div className='main'>
                {props.children}
            </div>
            <Footer/>
        </div>
    )
}

export default MainLayout
