import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">

      {/* HERO SECTION */}
      <section className="about-hero">
        <div className="overlay">
          <h1>About SmartServe</h1>
          <p>
            Revolutionizing restaurant ordering with smart, fast, and contactless dining technology.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="about-section">
        <h2>Who We Are</h2>
        <p>
          SmartServe is a modern SaaS platform designed for restaurants to digitize their
          ordering system. We help restaurants replace traditional paper menus and manual
          ordering with a fast, QR-based digital experience.
        </p>
      </section>

      {/* STORY */}
      <section className="about-section dark">
        <h2>Our Story</h2>
        <p>
          Built with the vision of simplifying restaurant operations, SmartServe was created
          to solve real problems like slow service, order errors, and inefficient billing.
          Our platform connects customers and restaurants seamlessly using technology.
        </p>
      </section>

      {/* MISSION */}
      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          To empower restaurants with digital tools that improve speed, accuracy, and customer
          satisfaction while increasing their revenue and operational efficiency.
        </p>
      </section>

      {/* FEATURES */}
      <section className="features">
        <h2>What We Offer</h2>

        <div className="feature-grid">
          <div className="feature-card">
            <h3>⚡ Instant Ordering</h3>
            <p>Customers order directly from their table using QR codes.</p>
          </div>

          <div className="feature-card">
            <h3>📱 Digital Menu</h3>
            <p>Dynamic menu updates without printing costs or delays.</p>
          </div>

          <div className="feature-card">
            <h3>💳 Secure Payments</h3>
            <p>Integrated payment gateway for fast and safe transactions.</p>
          </div>

          <div className="feature-card">
            <h3>📊 Restaurant Dashboard</h3>
            <p>Track orders, revenue, and performance in real-time.</p>
          </div>

          <div className="feature-card">
            <h3>🔔 Live Order Updates</h3>
            <p>Real-time notifications for kitchen and staff coordination.</p>
          </div>

          <div className="feature-card">
            <h3>💼 Business Growth</h3>
            <p>Help restaurants increase efficiency and customer satisfaction.</p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        <div>
          <h3>500+</h3>
          <p>Restaurants</p>
        </div>
        <div>
          <h3>50K+</h3>
          <p>Orders Processed</p>
        </div>
        <div>
          <h3>10K+</h3>
          <p>Happy Customers</p>
        </div>
        <div>
          <h3>99%</h3>
          <p>Uptime</p>
        </div>
      </section>

      {/* VISION */}
      <section className="about-section dark">
        <h2>Our Vision</h2>
        <p>
          We aim to become the leading digital restaurant platform globally,
          helping every restaurant—from small cafés to large chains—go fully digital.
        </p>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Ready to Transform Your Restaurant?</h2>
        <p>Join SmartServe and bring your restaurant into the digital era.</p>
        <button>Get Started</button>
      </section>

    </div>
  );
};

export default About;