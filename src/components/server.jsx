// server.jsx
import axios from 'axios';
import { useState, useEffect } from 'react';

function ServerComponent() {
  const [data, setData] = useState([]);

  
const fetchData = async () => {
  const response = await axios.get('http://127.0.0.1:5000/');
  setData(response.data);
};
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {data}
    </div>
  );
}

export default ServerComponent;