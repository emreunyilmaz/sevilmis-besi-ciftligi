import './App.css';
import * as React from "react";
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './routes';
import ScrollToTop from "./components/scrollToTop";


function App({children}) {
   return (
      <div className="App">
         <BrowserRouter>
            <ScrollToTop />

                  <div className="flex flex-col">
                     <AppRouter />
                  </div>
         </BrowserRouter>
        
      </div>
   )
}

export default App
