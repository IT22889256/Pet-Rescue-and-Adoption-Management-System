import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CreateTasks() {
  const [budget, setBudget] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBudget = async () => {
      try {
        const response = await axios.get('http://localhost:3000/donationManager/financial/budget');
        setBudget(response.data.budget);
      } catch (err) {
        setError('Error fetching budget data');
      } finally {
        setLoading(false);
      }
    };

    fetchBudget();
  }, []);

  return (
    <div className="w-64 bg-white p-4 rounded-md shadow-md border border-gray-200">
      <strong className="text-gray-700 font-medium text-lg mb-2">Budget</strong>
      <div className="mt-2">
        {loading ? (
          <p className="text-base text-gray-500">Loading...</p>
        ) : error ? (
          <p className="text-base text-red-500">{error}</p>
        ) : (
          <p className="text-2xl text-green-500">The current budget is ${budget}</p>
        )}
      </div>
    </div>
  );
}

export default CreateTasks;
