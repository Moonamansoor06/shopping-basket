import React from 'react'
import Button from 'react-bootstrap/Button';







//import './styles.scss'

function Buttons({children, ...otherProps}) {
    return (
        <Button variant="secondary" size="lg" block className='btn' {...otherProps}>
            {children}
        </Button>

    )
}

export default Buttons
