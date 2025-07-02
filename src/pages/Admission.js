// import React, { useState } from 'react';

// function Admission() {
//   const [form, setForm] = useState({
//     fullName: '',
//     email: '',
//     phone: '',
//     course: '',
//     message: '',
//   });

//   const [errors, setErrors] = useState({});
//   const [submitted, setSubmitted] = useState(false);

//   const validate = () => {
//     const errs = {};
//     if (!form.fullName.trim()) errs.fullName = 'Full name is required';
//     if (!form.email.trim()) {
//       errs.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(form.email)) {
//       errs.email = 'Email is invalid';
//     }
//     if (!form.phone.trim()) {
//       errs.phone = 'Phone number is required';
//     } else if (!/^\d{10,15}$/.test(form.phone)) {
//       errs.phone = 'Phone number is invalid';
//     }
//     if (!form.course.trim()) errs.course = 'Please select a course';
//     return errs;
//   };

//   const handleChange = (e) => {
//     setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
//     setErrors(prev => ({ ...prev, [e.target.name]: '' }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const errs = validate();
//     if (Object.keys(errs).length > 0) {
//       setErrors(errs);
//     } else {
//       setSubmitted(true);
//       // Here you can add actual submission logic, e.g. API call
//       console.log('Form submitted:', form);
//       setForm({ fullName: '', email: '', phone: '', course: '', message: '' });
//     }
//   };

//   return (
//     <>
//       <h1>Admission Form</h1>
//       {submitted && (
//         <div style={{
//           backgroundColor: '#d4edda',
//           color: '#155724',
//           padding: '12px 20px',
//           borderRadius: '8px',
//           marginBottom: '20px',
//           fontWeight: '600',
//           border: '1px solid #c3e6cb'
//         }}>
//           Your admission form was submitted successfully!
//         </div>
//       )}
//       <form onSubmit={handleSubmit} noValidate style={{ maxWidth: '500px' }}>
//         <label>
//           Full Name:
//           <input
//             type="text"
//             name="fullName"
//             value={form.fullName}
//             onChange={handleChange}
//             style={{ width: '100%', padding: '10px', marginTop: '6px', marginBottom: '8px', borderRadius: '6px', border: errors.fullName ? '1.5px solid #dc3545' : '1.5px solid #ced4da' }}
//             placeholder="Enter your full name"
//           />
//           {errors.fullName && <p style={{ color: '#dc3545', margin: '4px 0' }}>{errors.fullName}</p>}
//         </label>

//         <label>
//           Email:
//           <input
//             type="email"
//             name="email"
//             value={form.email}
//             onChange={handleChange}
//             style={{ width: '100%', padding: '10px', marginTop: '6px', marginBottom: '8px', borderRadius: '6px', border: errors.email ? '1.5px solid #dc3545' : '1.5px solid #ced4da' }}
//             placeholder="Enter your email"
//           />
//           {errors.email && <p style={{ color: '#dc3545', margin: '4px 0' }}>{errors.email}</p>}
//         </label>

//         <label>
//           Phone:
//           <input
//             type="tel"
//             name="phone"
//             value={form.phone}
//             onChange={handleChange}
//             style={{ width: '100%', padding: '10px', marginTop: '6px', marginBottom: '8px', borderRadius: '6px', border: errors.phone ? '1.5px solid #dc3545' : '1.5px solid #ced4da' }}
//             placeholder="Enter your phone number"
//           />
//           {errors.phone && <p style={{ color: '#dc3545', margin: '4px 0' }}>{errors.phone}</p>}
//         </label>

//         <label>
//           Course Interested:
//           <select
//             name="course"
//             value={form.course}
//             onChange={handleChange}
//             style={{ width: '100%', padding: '10px', marginTop: '6px', marginBottom: '8px', borderRadius: '6px', border: errors.course ? '1.5px solid #dc3545' : '1.5px solid #ced4da' }}
//           >
//             <option value="">Select a course</option>
//             <option value="Computer Science">Computer Science</option>
//             <option value="Business Administration">Business Administration</option>
//             <option value="Engineering">Engineering</option>
//             <option value="Mathematics">Mathematics</option>
//             {/* Add courses as needed */}
//           </select>
//           {errors.course && <p style={{ color: '#dc3545', margin: '4px 0' }}>{errors.course}</p>}
//         </label>

//         <label>
//           Message (optional):
//           <textarea
//             name="message"
//             value={form.message}
//             onChange={handleChange}
//             rows="4"
//             style={{ width: '100%', padding: '10px', marginTop: '6px', borderRadius: '6px', border: '1.5px solid #ced4da' }}
//             placeholder="Write any questions or notes here"
//           />
//         </label>

//         <button
//           type="submit"
//           style={{
//             backgroundColor: '#0056b3',
//             color: 'white',
//             padding: '12px 25px',
//             borderRadius: '8px',
//             border: 'none',
//             fontWeight: '600',
//             fontSize: '1rem',
//             cursor: 'pointer',
//             marginTop: '12px',
//             transition: 'background-color 0.3s ease',
//           }}
//           onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#003d80')}
//           onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#0056b3')}
//         >
//           Submit
//         </button>
//       </form>
//     </>
//   );
// }

// export default Admission;
import React, { useState } from 'react';

const Admission = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    dob: '',
    classLevel: '',
    message: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Admission form submitted successfully!\nWe'll contact you soon.");
    console.log(form);
  };

  return (
    <div className="container">
      <h2>Admission Form</h2>
      <form className="admission-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="text" name="name" placeholder="Student Name" required onChange={handleChange} />
          <input type="email" name="email" placeholder="Parent Email" required onChange={handleChange} />
        </div>
        <div className="form-group">
          <input type="tel" name="phone" placeholder="Contact Number" required onChange={handleChange} />
          <input type="date" name="dob" placeholder="Date of Birth" required onChange={handleChange} />
        </div>
        <div className="form-group">
          <select name="classLevel" required onChange={handleChange}>
            <option value="">Select Class</option>
            <option value="ECE">ECE</option>
            <option value="Nursery">Nursery</option>
            <option value="KG">KG</option>
            {[...Array(12)].map((_, i) => (
              <option key={i + 1} value={`Grade ${i + 1}`}>Grade {i + 1}</option>
            ))}
          </select>
        </div>
        <textarea name="message" rows="4" placeholder="Any additional message (optional)" onChange={handleChange}></textarea>
        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
};

export default Admission;
