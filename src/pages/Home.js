import React, { useState, useEffect } from 'react';
import './Home.css';

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [statsVisible, setStatsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({
    students: 0,
    faculty: 0,
    programs: 0,
    years: 0
  });

  const heroSlides = [
    {
      image: "/paste1.jpg",
      title: "Excellence in Education",
      subtitle: "Shaping Tomorrow's Leaders"
    },
    {
      image: "/paste1.jpg", // You can add more images
      title: "Innovation & Research",
      subtitle: "Pioneering the Future"
    },
    {
      image: "/paste1.jpg",
      title: "Global Community",
      subtitle: "Connecting Minds Worldwide"
    }
  ];

  const stats = [
    { label: "Students", value: 5000, icon: "👨‍🎓" },
    { label: "Faculty", value: 250, icon: "👨‍🏫" },
    { label: "Programs", value: 35, icon: "📚" },
    { label: "Years of Excellence", value: 25, icon: "🏆" }
  ];

  const features = [
    {
      icon: "🎓",
      title: "Academic Excellence",
      description: "World-class education with internationally recognized programs"
    },
    {
      icon: "🔬",
      title: "Research & Innovation",
      description: "Cutting-edge research facilities and innovation labs"
    },
    {
      icon: "🌍",
      title: "Global Network",
      description: "International partnerships and exchange programs"
    },
    {
      icon: "💼",
      title: "Career Development",
      description: "Strong industry connections and placement support"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Ahmed",
      role: "Alumni, Class of 2020",
      quote: "Sukkur IBA transformed my perspective and opened doors I never imagined possible."
    },
    {
      name: "Dr. Muhammad Ali",
      role: "Professor, Computer Science",
      quote: "Teaching here allows me to shape the next generation of innovators and leaders."
    }
  ];

  // Auto-rotate hero slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  // Animate stats when they come into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !statsVisible) {
          setStatsVisible(true);
          // Animate numbers
          stats.forEach((stat, index) => {
            let count = 0;
            const increment = stat.value / 50;
            const timer = setInterval(() => {
              count += increment;
              if (count >= stat.value) {
                count = stat.value;
                clearInterval(timer);
              }
              setAnimatedStats(prev => ({
                ...prev,
                [stat.label.toLowerCase().replace(' ', '')]: Math.floor(count)
              }));
            }, 30);
          });
        }
      },
      { threshold: 0.5 }
    );

    const statsElement = document.querySelector('.stats-section');
    if (statsElement) observer.observe(statsElement);

    return () => observer.disconnect();
  }, [statsVisible]);

  return (
    <div className="home-container">
      {/* Hero Section with Slider */}
      <section className="hero-section">
        <div className="hero-slider">
          {heroSlides.map((slide, index) => (
            <div 
              key={index}
              className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="hero-overlay">
                <div className="hero-content">
                  <h1 className="hero-title">{slide.title}</h1>
                  <p className="hero-subtitle">{slide.subtitle}</p>
                  <button className="cta-button">Explore Programs</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="slider-indicators">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* Founding Father Section */}
      <section className="founding-section">
        <div className="section-container">
          <div className="founding-content">
            <div className="founding-image">
              <img src="/paste1.jpg" alt="Founding Father" />
            </div>
            <div className="founding-text">
              <h2>Our Founding Father</h2>
              <h3>Sir. Nisar Ahmed Siddiqui</h3>
              <div className="quote-container">
                <div className="quote-mark">"</div>
                <p className="founding-quote">
                  My message is quite simple but implies continuous struggle for change.
                  On every "to-day" we should dream of better "tomorrow".
                  Sukkur IBA is determined to become the center of Excellence for achieving
                  the goal of betterment of Sindh, prosperity of Pakistan and welfare of the world at large.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="section-container">
          <h2 className="section-title">Our Impact</h2>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">
                  {stat.label === 'Students' && animatedStats.students}
                  {stat.label === 'Faculty' && animatedStats.faculty}
                  {stat.label === 'Programs' && animatedStats.programs}
                  {stat.label === 'Years of Excellence' && animatedStats.yearsofexcellence}
                  +
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="section-container">
          <h2 className="section-title">Why Choose Sukkur IBA?</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="section-container">
          <h2 className="section-title">What Our Community Says</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-quote">"{testimonial.quote}"</div>
                <div className="testimonial-author">
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="section-container">
          <div className="cta-content">
            <h2>Ready to Begin Your Journey?</h2>
            <p>Join thousands of students who have chosen excellence at Sukkur IBA</p>
            <div className="cta-buttons">
              <button className="btn-primary" onClick={() => window.location.href='/admission'}>Apply Now</button>
              <button className="btn-secondary">Visit Campus</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
