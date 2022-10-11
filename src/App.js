import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../src/components/layouts/Main'
import Home from '../src/components/Home/Home'
import Qjavascript from './components/Quiz/Qjavascript/Qjavascript';
import Qcss from './components/Quiz/Qcss/Qcss';
import Qgit from './components/Quiz/Qgit/Qgit';
import Qrct from './components/Quiz/Qrct/Qrct';


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
          path:'React',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz/1'),
          element: <Qrct></Qrct>
        },
        {
          path: 'javascript',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz/2'),
          element: <Qjavascript></Qjavascript>
        },
        {
          path: 'css',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz/4'),
          element:<Qcss></Qcss>
        },
        {
          path: 'git',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz/5'),
          element: <Qgit></Qgit>
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
