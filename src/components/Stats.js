import React, { useState } from 'react';
import axios from 'axios';
import { BarChart, Bar,XAxis, YAxis, Tooltip} from 'recharts';
import './Stats.css';

const Stats = () => {
    const [total,setTotal] = useState();
    
    axios.get('https://openapi.programming-hero.com/api/quiz')
    .then(data => 
        {
            const quizTotal = data.data.data;
            const quizData = quizTotal.map(quiz =>{
                const qz = quiz.total;
                const singleQuiz = {
                    name: quiz.name,
                    total: quiz.total
                }
                return singleQuiz;
            })
            console.log(quizData);
            setTotal(quizData)
        }
        );
    return (  
        <div> 
            <h3>See the details of quiz data</h3>
            <div className='chart-container'>
                <BarChart width={500} height={400} data={total}>
                    <Bar dataKey="total" fill="#8884d8" />
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <Tooltip></Tooltip>
                </BarChart>
            </div> 
        </div>
           
        
    );
};

export default Stats;