import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../src/components/layouts/Main'
import Home from '../src/components/Home/Home'
import Qreact from './components/Quiz/Qreact/Qreact';
import Qjavascript from './components/Quiz/Qjavascript/Qjavascript';
import Qcss from './components/Quiz/Qcss/Qcss';
import Qgit from './components/Quiz/Qgit/Qgit';


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
          path:'/qreact',
          element:<Qreact></Qreact>
        },
        {
          path: 'qjavascript',
          element: <Qjavascript></Qjavascript>
        },
        {
          path: 'qcss',
          element:<Qcss></Qcss>
        },
        {
          path: 'qgit',
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
