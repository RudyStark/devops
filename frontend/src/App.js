import React, { useState } from 'react';

const App = () => {
    const [response, setResponse] = useState(null);

    const testAddUser = async () => {
        try {
            const res = await fetch('/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: 'Utilisateur Test' }),
            });
            const data = await res.json();
            setResponse(data);
        } catch (error) {
            setResponse({ error: 'Erreur lors de l\'ajout de l\'utilisateur' });
        }
    };

    const testListUsers = async () => {
        try {
            const res = await fetch('/api/users');
            const data = await res.json();
            setResponse(data);
        } catch (error) {
            setResponse({ error: 'Erreur lors de la récupération des utilisateurs' });
        }
    };

    return (
        <div>
            <h1>Tester les Routes de l'API</h1>
            <button onClick={testAddUser}>Tester Ajouter Utilisateur</button>
            <button onClick={testListUsers}>Tester Lister Utilisateurs</button>
            <pre>{JSON.stringify(response, null, 2)}</pre>
            <h1>User Management</h1>
            <p>Curl pour tester ajout utilisateur:</p>
            <pre>curl -X POST http://localhost:5000/api/users -H "Content-Type: application/json" -d &#123;&quot;name&quot;:&quot;Utilisateur Test&quot;&#125;</pre>
            <p>Curl pour tester liste des utilisateurs:</p>
            <pre>curl http://localhost:5000/api/users</pre>
        </div>
    );
};

export default App;
