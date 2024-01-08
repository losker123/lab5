// Installations.js
import React, { useState, useEffect } from 'react';
import installationsData from '../pages/Installations.json';
import '../styles/Systems.css';
import Installationsitem from '../components/Installationsitem';
import Addpopup from '../components/Addpopup';

const Installations = () => {
  const [installations, setInstallations] = useState([]);
 
  const [newInstallation, setNewInstallation] = useState({
    operation_type: '',
    system_type:'',
    date_time: '',
    person: {
      years_of_experience: '',
      full_name: '',
      contact_information: '',
      photo: 'https://samara.pozitive.org/images/notebooki/tseni/samara.jpg'
    },
    address: ''
  });

  useEffect(() => {
    setInstallations(installationsData);
  }, []);

  const handleDeleteInstallation = (id) => {
    const updatedInstallations = installations.filter(installation => installation.id !== id);
    setInstallations(updatedInstallations);
  };
  const handleEditInstallation = (editedInstallation) => {
    const updatedInstallations = installations.map(installation => {
      if (installation.id === editedInstallation.id) {
        return editedInstallation;
      }
      return installation;
    });
    setInstallations(updatedInstallations);
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('person.')) {
      const personProperty = name.split('.')[1];
      setNewInstallation((prevState) => ({
        ...prevState,
        person: {
          ...prevState.person,
          [personProperty]: value
        }
      }));
    } else {
      setNewInstallation({
        ...newInstallation,
        [name]: value
      });
    }
  };

  const handleAddInstallation = () => {
    setInstallations([...installations, newInstallation]);
    setNewInstallation({
      operation_type: '',
      system_type: '',
      date_time: '',
      person: {
        years_of_experience: '',
        full_name: '',
        contact_information: '',
        photo: 'https://samara.pozitive.org/images/notebooki/tseni/samara.jpg'
      },
      address: ''
    });
  
  };

  return (
    <>
      <div className="systemPage-container">
        {installations.map((installation) => (
          <Installationsitem
            key={installation.id}
            installation={installation}
            onDelete={handleDeleteInstallation} 
            onEdit = {handleEditInstallation}
          />
        ))}
      </div>

        <Addpopup
          newInstallation={newInstallation}
          handleInputChange={handleInputChange}
          handleAddInstallation={handleAddInstallation}
        />
        
    </>
  );
};

export default Installations;
