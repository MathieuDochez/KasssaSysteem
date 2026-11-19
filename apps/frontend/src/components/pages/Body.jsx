import {Routes, Route} from 'react-router-dom';
import Home from './Home.jsx';

function Body() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </div>
    )
}