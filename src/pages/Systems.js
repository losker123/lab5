import React, { useState, useEffect } from 'react';
import '../styles/Systems.css'; 
import systemssData from './Systems.json'
import SystemItem from '../components/Systemitem'
const Systems = () => {
  const [systems, setSystems] = useState([]);

  useEffect(() => {
    setSystems(systemssData)
  }, []);

  return (
    <>
    <div className="systemPage-container">
        {systems.map(system => (
            <SystemItem key={system.id} system={system}/>
        ))}
    </div>
    
</>

  );
}

export default Systems;
