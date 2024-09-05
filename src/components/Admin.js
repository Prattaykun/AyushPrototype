import React, { useEffect, useState } from 'react';
import { db } from '../Firebase';
import { collection, getDocs } from 'firebase/firestore';

const Admin = () => {
  const [startups, setStartups] = useState([]);

  useEffect(() => {
    const fetchStartups = async () => {
      const querySnapshot = await getDocs(collection(db, 'startups'));
      setStartups(querySnapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })));
    };
    fetchStartups();
  }, []);

  return (
    <div className="container admin-dashboard">
      <h2>Admin Dashboard</h2>
      <ul>
        {startups.map(startup => (
          <li key={startup.id}>
            <span>{startup.data.name}</span> - {startup.data.documentUrl}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;
