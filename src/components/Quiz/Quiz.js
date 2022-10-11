import React from 'react';
import './Quiz.css';

const Quiz = (qs) => {
    const { key, options, question, correct } = qs;
    return (
        <div>
            <section className='quiz'>
                <h3>{question}</h3> 
                <input type="radio" name="quizAnswer"/>{options[0]}
                <br />
                <input type="radio" name="quizAnswer"/>{options[1]}
                <br />
                <input type="radio" name="quizAnswer"/>{options[2]}
                <br />
                <input type="radio" name="quizAnswer"/>{options[3]}
                <br />
            </section>
                
                          
        </div>
    );
};

export default Quiz;