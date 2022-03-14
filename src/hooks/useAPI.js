import React, {useState, useEffect} from 'react';
import axios from 'axios';

const useAPI = (endpoint) => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    axios.get(endpoint).then((response) => setData(response));
  }, [endpoint]);

  return data
}

export default useAPI;