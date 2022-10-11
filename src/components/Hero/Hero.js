import React from 'react';
import './Hero.css';
import Typewriter from 'typewriter-effect';
const Hero = () => {
    return (
        <div className='hero'>
              <div className='typewriter'>
                <Typewriter
                  options={{
                    strings: ['Take a test today', 'HTML,CSS,JavaScript or React', 'What will you do today?'],
                    autoStart: true,
                    loop: true,
                  }}
                />
            </div>
        </div>    
    );
};

export default Hero;