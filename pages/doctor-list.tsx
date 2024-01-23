import React, { useEffect, useState } from 'react';
import DoctorList from '../components/DoctorList';

const DoctorListPage: React.FC = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch('/api/doctors');
        const data = await response.json();
        setDoctors(data);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };

    fetchDoctors();
  }, []);

  return (
    <div>
      <h1>List of Doctors</h1>
      <DoctorList doctors={doctors} />
    </div>
  );
};

export default DoctorListPage;
