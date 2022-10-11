import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Hero from '../Hero/Hero';
import Quizes from '../Quizes/Quizes';
import Stats from '../Stats';

import './Home.css';

const Home = () => {
    const quizes = useLoaderData();
    console.log(quizes);

   

    return (
        <div>
            <Hero></Hero>
            <div className='quize-container'>
                {
                    quizes.data.map(quize=><Quizes
                    key={quize.id}
                    id={quize.id}
                    name={quize.name}
                    logo={quize.logo}
                    total={quize.total}
                    >
                    </Quizes>
                    )
                }
            </div>
        </div>
        
    );
};

export default Home;