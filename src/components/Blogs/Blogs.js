import React from 'react';
import './Blogs.css';
const Blogs = () => {
    return (
        <div className='blogs'>
            <section>
                <h2>1. How React Router Works?</h2>
                <p><strong>Answer:</strong> React router is used for building single page application.It 
                    navigates the user to different components of a website which works like a page.A react 
                    router can load multiple components instead of page 
                    without having a need to reload the browser window.</p>
            </section>
            <section>
                <h2>2. How ContextAPI works?</h2>
                <p><strong>Answer:</strong>React Context API is an alternative to props drilling between
                granparents to child and parents.Context API allows the react application to produce global
                variables that can be passed between multiple trees of an application.React.createContext() is all 
                that requires to use the Context API.It returns a consumer and a provider.
                 </p>
            </section>
            <section>
                <h2>3. How useRef Works?</h2>
                <p><strong>Answer:</strong>useRef is a react hook that accepts an argument as the initial value
                and returns a reference.Reference is a object that has a special property current.The value of reference stays 
                the same between the re-rendering of the components.
                </p>
            </section>
        </div>
    );
};

export default Blogs;