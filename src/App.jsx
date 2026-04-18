import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import DefaultPage from './components/DefaultPage';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <DefaultPage/>,
    },

    {
      path: "/about",
      element: <h1>About Page</h1>,
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
