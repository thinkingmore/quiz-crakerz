import React from 'react';
import './Quizes.css';

const Quizes = (quize) => {
    const {id, name, logo, total} = quize;
    return (       
        <div className="card">
            <img src={logo} alt='logo'></img>
            <h2>This Quizes:{name}</h2>
            <p>Quize:{id}</p>
            <p>Total quizes:{total}</p>
            <button className="card-btn">
                Start 
            </button>
        </div>         
    );
};

export default Quizes;