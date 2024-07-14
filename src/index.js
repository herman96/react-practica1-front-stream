import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Directorio from './views/directorio';
import FormStream from './views/formulario';
import Player from './components/player/player';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import movies from './data/movies';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/Catalogo",
    element: <Directorio />
  },
  {
    path: "/Formulario/:movieId",
    element: <FormStream movies={movies}/>
  },
  {
    path: "Catalogo/Details/:movieId",
    element: <Player movies={movies}/>
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
