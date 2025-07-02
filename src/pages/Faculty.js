// pages/Faculty.js
import React from 'react';

const facultyData = [
  { name: 'Saleem Ahmed Mahar', image: '/SALEEM.jpg', role: 'Lecturer/ Supervisor Computer Science' },
  { name: 'Qurat ul Ain', image: '/AINI.jpg', role: 'Lecturer Computer Science' },
  //{ name: 'Aslam Jogi', image: '/ASLAM.jpg', role: 'Professor' },\
  { name: 'Shabir Ahmed', image: '/SHABIR.jpg', role: 'Lecturer Pakistan Studies' },
  { name: 'Mufti Aziz ur Rehman', image: '/AZIZ.jpg', role: 'Lecturer Islamic Studies' },
  
  { name: 'Sajid Ali', image: '/SAJID.jpg', role: 'Lecturer English ' },
  { name: 'Fazal ur Rehman', image: '/Fazal.jpg', role: 'Lecturer Sindhi' },
  { name: 'Juraid Jani', image: '/JURAID.jpg', role: 'Lecturer Mathematics' },
  { name: 'Javed Ahmed ', image: '/JAVED.jpg', role: 'Lecturer General Science' },
  // add more based on your images and data
];

function Faculty() {
  return (
    <>
      <h1>Faculty</h1>
      <p>Meet our esteemed faculty members:</p>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill,minmax(180px,1fr))',
        gap: '25px',
        marginTop: '25px',
      }}>
        {facultyData.map(({ name, image, role }, idx) => (
          <div key={idx} style={{
            boxShadow: '0 4px 15px rgba(0, 86, 179, 0.15)',
            borderRadius: '12px',
            overflow: 'hidden',
            backgroundColor: 'white',
            textAlign: 'center',
            transition: 'transform 0.3s ease',
            cursor: 'default',
          }}
          onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <img src={image} alt={name} style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
            <div style={{ padding: '15px 10px' }}>
              <h3 style={{ color: '#003d80', margin: '10px 0 6px' }}>{name}</h3>
              <p style={{ fontWeight: '600', color: '#0056b3', margin: 0 }}>{role}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Faculty;
