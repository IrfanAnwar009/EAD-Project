import React from 'react';

const About = () => {
  return (
    <div className="container">
      <h2>About Our School</h2>

      <section className="about-section">
        <p>
          <strong>Welcome to Our School!</strong> We are committed to delivering quality education from 
          <strong> Early Childhood Education (ECE) to 12th Grade</strong>. Our mission is to nurture students 
          with academic excellence, character building, and leadership skills.
        </p>

        <h3>Our Vision</h3>
        <p>
          To empower every student with the knowledge, skills, and values to become responsible 
          global citizens and lifelong learners.
        </p>

        <h3>Our Mission</h3>
        <ul>
          <li>Deliver holistic education in a safe, inclusive environment</li>
          <li>Encourage creativity, critical thinking, and innovation</li>
          <li>Promote moral, cultural, and social development</li>
          <li>Prepare students for academic and real-life success</li>
        </ul>

        <h3>Core Values</h3>
        <div className="core-values">
          <div className="value-card">Integrity</div>
          <div className="value-card">Excellence</div>
          <div className="value-card">Discipline</div>
          <div className="value-card">Respect</div>
          <div className="value-card">Teamwork</div>
        </div>

        <h3>Principal's Message</h3>
        <p>
          "At our school, we believe that every child has unique potential. Our dedicated team of 
          educators ensures that students not only succeed academically, but also grow into 
          compassionate and confident individuals ready to face the future." <br />
          <em>– Principal</em>
        </p>
      </section>
    </div>
  );
};

export default About;
