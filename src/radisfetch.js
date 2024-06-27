import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RadisFetch = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define the async function to fetch data
    const fetchData = async () => {
      try {
        // Make the API request
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        
        // Update the state with the fetched data
        setData(response.data);
        setLoading(false);
      } catch (err) {
        // Handle the error
        setError(err);
        setLoading(false);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Fetched Data</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default RadisFetch;
