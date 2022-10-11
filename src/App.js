import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../src/components/layouts/Main'
import Home from '../src/components/Home/Home'
import Quizes from '../src/components/Quizes/Quizes'
function App() {
  const router = createBrowserRouter
  ([
    {
      path:'/',
      element:<Main></Main>,
      children: [
        {
        path:'/',
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        element:<Home></Home>
      },
      {
        path:'/quizes',
        element:<Quizes></Quizes>
      }      
      ]
    } 
  ])
  return (
    <div className="App">
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
