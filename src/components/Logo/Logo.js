import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.svg';
import './Logo.css';

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt b2 shadow-2" options={{ max : 60, perspective: 500 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner pa4">
                    <img style={{paddingּּTop: '5px'}} alt='logo' src={brain}/>
                </div>
            </Tilt>
        </div>
    )
}

export default Logo;