import {useState} from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import Body from './components/pages/Body.jsx';

function App() {
    const [count, setCount] = useState(0)

    return (
        <BrowserRouter>
            <div className="flex flex-col min-h-screen">
                <Body className="flex-grow"/>
            </div>
        </BrowserRouter>

    )
}

export default App
