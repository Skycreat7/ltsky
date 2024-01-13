import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

import { useAuth } from './AuthContext';

const Dashboard = () => {
    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        try {
            const response = await fetch('/Dashboard');
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

            const dataItems = await response.json();

            if (!Array.isArray(dataItems)) throw new Error('Data is not an array');

            setItems(dataItems);
        } catch (error) {
            console.error('Could not fetch data:', error.message);
            setItems([]);
        }
    };

    const { isLoggedIn } = useAuth();

    if (!isLoggedIn) {
        return <Navigate to="/Login" />;
    }

    return (
        <section>
            {items.map((item) => (
                <div>
                    <p>{item.name}</p>
                    <p>{item.msg}</p>
                    <p>{item.username}</p>
                </div>
            ))}
        </section>
    );
};

export default Dashboard;
