import React from 'react';



//Pages
import Header from './../components/Header/index';
import Footer from './../components/Footer/index';

function HomepageLayout(props) {
    return (
        <div className='fullheight'>
            <Header {...props}/>
           
                {props.children}

            <Footer/>
        </div>
    )
}

export default HomepageLayout
