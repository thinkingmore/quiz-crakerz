import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz';

const Qjavascript = () => {
    const quiz = useLoaderData();
    console.log(quiz);
    return (
        <div>
            <h2>This is js quiz</h2>
            {
                quiz.data.questions.map(qs => <Quiz
                key={qs.id}
                options={qs.options}
                question={qs.question}
                correct={qs.correctAnswer}
                >
                </Quiz>
                )
            }
        </div>
    );
};

export default Qjavascript;