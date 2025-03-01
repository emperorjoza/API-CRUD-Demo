import React, { useState, useEffect } from "react";
import axios from "axios";

const Button = ({ onClick, children, className }) => (
  <button onClick={onClick} className={`px-4 py-2 bg-blue-500 text-white rounded ${className}`}>
    {children}
  </button>
);

const API_URL = "https://jsonplaceholder.typicode.com/users";

const App = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState("");

  // GET - Fetch users
  useEffect(() => {
    axios.get(API_URL)
      .then(response => setUsers(response.data))
      .catch(error => console.error("Error fetching users:", error));
  }, []);

  // POST - Add a user
  const addUser = () => {
    if (!newUser) return;
    const user = { name: newUser };
    axios.post(API_URL, user)
      .then(response => setUsers([...users, response.data]))
      .catch(error => console.error("Error adding user:", error));
    setNewUser("");
  };

  // PUT - Update user
  const updateUser = (id) => {
    const updatedName = prompt("Enter new name:");
    if (!updatedName) return;

    axios.put(`${API_URL}/${id}`, { name: updatedName })
      .then(() => {
        setUsers(prevUsers => prevUsers.map(user => 
          user.id === id ? { ...user, name: updatedName } : user
        ));
      })
      .catch(error => console.error("Error updating user:", error));
  };

  // DELETE - Remove user
  const deleteUser = (id) => {
    axios.delete(`${API_URL}/${id}`)
      .then(() => {
        setUsers(users.filter(user => user.id !== id));
      })
      .catch(error => console.error("Error deleting user:", error));
  };

  return (
    <div className="p-4 text-center">
      <h1 className="text-xl font-bold">API Calls (CRUD) in React</h1>
      <div className="my-4">
        <input 
          type="text" 
          value={newUser} 
          onChange={(e) => setNewUser(e.target.value)} 
          placeholder="Enter new user name"
          className="border p-2 rounded"
        />
        <Button onClick={addUser} className="ml-2">Add User</Button>
      </div>
      <ul>
        {users.map(user => (
          <li key={user.id} className="p-2 border-b flex justify-between items-center">
            {user.name}
            <div>
              <Button onClick={() => updateUser(user.id)} className="mx-2">Edit</Button>
              <Button onClick={() => deleteUser(user.id)} className="bg-red-500">Delete</Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
