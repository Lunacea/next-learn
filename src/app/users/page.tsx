'use client';

import { useState, useEffect } from 'react';

export default async function Users() {

  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch('/api/users');
      const data = await res.json();
      setUsers(data);
    };
    fetchUsers();
    /*
    * fetch('/api/users')
    * .then(res => res.json())
    * .then(data => setUsers(data))
    */
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user: any) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
