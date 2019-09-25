import React from 'react';

import './homepage.style.scss';

const HomePage = () => (
    <div className='homepage'>
        <div className='directory-menu'>
            <div className='menu-item'>
                <div className='content'>
                    <div className='tilte'>HATS</div>
                    <span className='subtilte'>SHOP NOW</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <div className='tilte'>JACKETS</div>
                    <span className='subtilte'>SHOP NOW</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <div className='tilte'>SNEAKERS</div>
                    <span className='subtilte'>SHOP NOW</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <div className='tilte'>WOMENS</div>
                    <span className='subtilte'>SHOP NOW</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <div className='tilte'>MENS</div>
                    <span className='subtilte'>SHOP NOW</span>
                </div>
            </div>
        </div>
    </div>
);

export default HomePage;