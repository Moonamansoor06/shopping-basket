import React from 'react'
import './styles.scss'

function AuthWrapper({ headline, children }) {
    return (
        <div className='authwrapper'>
            <div className='wrap'>

                {headline && <h2>{headline}</h2>}
                <div className='children'>
                    {children && children}

                </div>

            </div>

        </div>
    );
}

export default AuthWrapper
