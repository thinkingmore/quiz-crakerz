import { faBook, faEye, faLockOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Quiz.css';

const Quiz = (qs) => {
    const { options, question, correct } = qs;
    const [answer,setAnswer] = useState();
   
    const checkAnswer = () => {
    if(answer === correct){    
        toast("Correct")
    }
    else if (answer === undefined) {
        alert("please select an answer")
    }
    else{
        toast("Incorrect")
    }
   }

   const showAnswer = () => {
      toast(correct);
   }

   
    return (
        <div>
            <section className='quiz'>
                <h3>{question}<span onClick={()=>showAnswer()} className='ans-icon'><FontAwesomeIcon icon={faBook}></FontAwesomeIcon></span></h3> 
                <input type="radio" onChange={e=> setAnswer(e.target.value)} value={options[0]} name="quizAnswer"/>{options[0]}
                <br />
                <input type="radio" value={options[1]} onChange={e=> setAnswer(e.target.value)} name="quizAnswer"/>{options[1]}
                <br />
                <input type="radio" value={options[2]} onChange={e=> setAnswer(e.target.value)} name="quizAnswer"/>{options[2]}
                <br />
                <input type="radio" value={options[3]} onChange={e=> setAnswer(e.target.value)} name="quizAnswer"/>{options[3] }
                <br />
                <button onClick={()=> checkAnswer(answer)} className='ans-submit-btn' type="button" onclick="displayRadioValue()">
                    Submit
                </button>
            </section>
            <ToastContainer />                           
        </div>
    );
};

export default Quiz;