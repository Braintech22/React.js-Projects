import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experiences from './pages/Experiences';
import Navbar from './components/Navbar';

function App() {
    return ( <
        div className = "App" >
        <
        Router >
        <
        Navbar / >
        <
        Routes >
        <
        Route path = '/'
        element = { < Home / > }
        /> <
        Route path = '/Projects'
        element = { < Projects / > }
        /> <
        Route path = '/Experiences'
        element = { < Experiences / > }
        /> <
        /Routes> <
        /Router>

        <
        /div>
    );
}

export default App;