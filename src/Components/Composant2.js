import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Composant1 = () => {
  const [formData, setFormData] = useState({
    matricule: '',
    marque: '',
    dateMiseCirculation: '',
    couleur: '',
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setSubmittedData(formData);
  };

  return (
    <div className='w-50 m-auto p-4'>
      <h1 className='text-center'>Gestion Voitures</h1>
      <div>
        <b>Matricule:</b>
        <input 
          className='form-control'
          type="text"
          name="matricule"
          value={formData.matricule}
          onChange={handleChange}
        />
      </div>
      <div>
        <b>Marque:</b>
        <input 
          className='form-control'
          type="text"
          name="marque"
          value={formData.marque}
          onChange={handleChange}
        />
      </div>
      <div>
        <b>Date de mise en circulation:</b>
        <input 
          className='form-control'
          type="date"
          name="dateMiseCirculation"
          value={formData.dateMiseCirculation}
          onChange={handleChange}
        />
      </div>
      <div>
        <b>Couleur:</b>
        <input 
          className='form-control'
          type="text"
          name="couleur"
          value={formData.couleur}
          onChange={handleChange}
        />
      </div>
      <button onClick={handleSubmit} className='btn btn-primary w-100'>Confirmer</button>

      {submittedData && (
        <div className='p-3'>
          <h2 align='center'>Récapitulatif des informations</h2>
          <b>Matricule:</b> {submittedData.matricule} <br />
          <b>Marque:</b> {submittedData.marque} <br />
          <b>Date Mise en circulation:</b> {submittedData.dateMiseCirculation} <br />
          <b>Couleur:</b> {submittedData.couleur} <br />
        </div>
      )}
    </div>
  );
};

export default Composant1;