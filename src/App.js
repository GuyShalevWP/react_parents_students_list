import React from 'react';
import Students from './Students';

const App = () => {
    const students = [
        { name: 'waga', email: 'waga@waga.com', color: 'red' },
        { name: 'baga', email: 'baga@baga.com', color: 'blue' },
        { name: 'taga', email: 'taga@taga.com', color: 'green' },
    ];
    return <Students students={students} />;
};

export default App;
