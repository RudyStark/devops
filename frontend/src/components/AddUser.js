import React, { useState } from 'react';

const AddUser = ({ onUserAdded }) => {
    const [name, setName] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name }),
            });
            const newUser = await response.json();
            onUserAdded(newUser);
            setName('');
        } catch (error) {
            console.error('Error adding user:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter name"
            />
            <button type="submit">Add User</button>
        </form>
    );
};

export default AddUser;
