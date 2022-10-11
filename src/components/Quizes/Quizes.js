import React from 'react';
import { Link } from 'react-router-dom';
import './Quizes.css';

const Quizes = (quize) => {
    const {id, name, logo, total} = quize;
    return (       
        <div className="card">
            <img src={logo} alt='logo'></img>
            <h2>Take the quiz on:{name}</h2>
            <p>Quize:{id}</p>
            <p>Total quizes:{total}</p>          
            {<Link to={`${name}`}><button className="card-btn">{name}</button></Link>}
            
        </div>         
    );
};

export default Quizes;