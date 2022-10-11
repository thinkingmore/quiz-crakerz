import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quizes from '../Quizes/Quizes';
import './Home.css';

const Home = () => {
    const quizes = useLoaderData();
    console.log(quizes);

    return (
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
    );
};

export default Home;