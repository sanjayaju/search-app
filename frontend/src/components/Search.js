import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`${window.location.origin}/api/search?q=${query}`);
            setResults(response.data);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search..."
                />
                <button type="submit">Search</button>
            </form>
            <ul>
                {results.map((item) => (
                    <li key={item._id}>
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Search;
