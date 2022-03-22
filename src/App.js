import {BrowserRouter, Routes, Route} from "react-router-dom";

import {ImageList, ImageDetail} from './pages'
import './App.css';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<ImageList/>}/>
                    <Route path=":imageId" element={<ImageDetail/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
