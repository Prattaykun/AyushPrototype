import React, { useState } from 'react';
import { db } from '../Firebase';
import { collection, addDoc } from 'firebase/firestore';

const Dashboard = () => {
  const [startupName, setStartupName] = useState('');
  const [document, setDocument] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'startups'), {
        name: startupName,
        documentUrl: document.name
      });
      alert('Registration Submitted');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="container">
      <h2>Submit Your Registration</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={startupName} 
          onChange={(e) => setStartupName(e.target.value)} 
          placeholder="Startup Name" 
        />
        <input 
          type="file" 
          onChange={(e) => setDocument(e.target.files[0])} 
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Dashboard;
