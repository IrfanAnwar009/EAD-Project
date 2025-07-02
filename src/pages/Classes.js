import React from 'react';

const classesData = [
  { name: 'Saleem Ahmed Mahar', image: '/supervisor.jpg', role: 'Lecturer/ Supervisor' },
  { name: 'Saleem Ahmed Mahar', image: '/supervisor.jpg', role: 'Lecturer/ Supervisor' },
  { name: 'Saleem Ahmed Mahar', image: '/supervisor.jpg', role: 'Lecturer/ Supervisor' },
  { name: 'Saleem Ahmed Mahar', image: '/supervisor.jpg', role: 'Lecturer/ Supervisor' },  
 
  // add more based on your images and data
];

const classLevels = [
  "ECE - Early Childhood Education",
  "Nursery",
  "KG",
  "Grade 1",
  "Grade 2",
  "Grade 3",
  "Grade 4",
  "Grade 5",
  "Grade 6",
  "Grade 7",
  "Grade 8",
  "Grade 9",
  "Grade 10",
  "Grade 11 (1st Year)",
  "Grade 12 (2nd Year)"
];

const Classes = () => {
  return (
    <div className="container">
      <h2>Our Classes</h2>
      <ul className="class-card">
        {classLevels.map((cls, idx) => (
          <li key={idx}>{cls}</li>
        ))}
      </ul>
    </div>
  );
};
// //function Classes() {
//   return (
//     <>
//       <h1>Classes</h1>
//        <p>Information about classes, schedules, and subjects will appear here.</p>

//       <div style={{
//         display: 'grid',
//         gridTemplateColumns: 'repeat(auto-fill,minmax(180px,1fr))',
//         gap: '25px',
//         marginTop: '25px',
//       }}>
//         {classesData.map(({ name, image, role }, idx) => (
//           <div key={idx} style={{
//             boxShadow: '0 4px 15px rgba(0, 86, 179, 0.15)',
//             borderRadius: '12px',
//             overflow: 'hidden',
//             backgroundColor: 'white',
//             textAlign: 'center',
//             transition: 'transform 0.3s ease',
//             cursor: 'default',
//           }}
//           onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
//           onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
//           >
//             <img src={image} alt={name} style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
//             <div style={{ padding: '15px 10px' }}>
//               <h3 style={{ color: '#003d80', margin: '10px 0 6px' }}>{name}</h3>
//               <p style={{ fontWeight: '600', color: '#0056b3', margin: 0 }}>{role}</p>
//             </div>
//           </div>
//         ))}
//       </div>




//     </>
//   );
//}

export default Classes;
