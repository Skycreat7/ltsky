import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <div>
                <Link to="/">Home</Link>
                <br></br>
                <Link to="/Dashboard">Dashboard</Link>
                <br></br>
                {/* <Link to="/Login">Login</Link> */}
            </div>
        </nav>
    );
}

export default Nav;
