import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz';

const Qcss = () => {
    const quiz = useLoaderData();
    console.log(quiz);
    return (
        <div>
            <h3>This is css</h3>
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

export default Qcss;