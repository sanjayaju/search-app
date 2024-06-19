import React, { useState } from 'react';
import axios from 'axios';

const AddItem = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${window.location.origin}/api/add`, {
                name,
                description
            });
            console.log('Item added:', response.data);
        } catch (err) {
            console.error('Error adding item:', err);
        }
    };

    return (
        <div>
            <h2>Add Item</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    required
                />
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description"
                    required
                />
                <button type="submit">Add Item</button>
            </form>
        </div>
    );
};

export default AddItem;
