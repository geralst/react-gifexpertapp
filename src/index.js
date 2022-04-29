//Como se realiza actualmente con REACT 18

import React from 'react';
import { createRoot }from 'react-dom/client'; //ahora se importa createRoot de react-dom/client para renderisarlo en el html
import GifExpertApp from './GifExpertApp';
import './index.css'

const divRoot = document.querySelector('#root');
const root = createRoot(divRoot);// se crea una const root para renderizar

root.render(<GifExpertApp />);//ya no se necesita mandar el divroot como antes y se llama al root


