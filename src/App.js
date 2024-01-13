import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { AuthProvider } from './components/AuthContext';

import Nav from './components/Nav';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Login from './components/Login';

function App() {
    return (
        <AuthProvider>
            <Router>
                <div className="App">
                    <header className="App-header">
                        <Nav />
                        <Routes>
                            <Route path="/" exact Component={Home}></Route>
                            <Route path="/Dashboard" exact Component={Dashboard}></Route>
                            <Route path="/Login" exact Component={Login}></Route>
                        </Routes>
                    </header>
                </div>
            </Router>
        </AuthProvider>
    );
}

export default App;
