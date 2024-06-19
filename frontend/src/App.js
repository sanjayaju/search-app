import React from 'react';
import Search from './components/Search';
import AddItem from './components/AddItem';

const App = () => {
    return (
        <div>
            <h1>MERN Search Application</h1>
            <Search />
            <AddItem />
        </div>
    );
};

export default App;
