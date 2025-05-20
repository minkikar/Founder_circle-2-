import React, { useState } from 'react';
import './App.css';
import './index.css';
import logo from"../src/assets/logo.jpg";
import AboutImg from "./assets/about.jpg";
import FounderMatch from "./assets/founder.png";
import work from "./assets/work.png";
import Swap from"./assets/Swap.png";
import Signup from "./assets/signup.png";
import Explore from'./assets/explore.png';
import Connect from './assets/connect.png';
import Bulid from "./assets/image.png";
import Mail from "./assets/mail1.png";
import Linkedin from "./assets/linkedin1.png";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      {/* Navbar */}
       <header className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Founder Circle Logo" className="logo-img" />
      </div>

      {/* Hamburger icon */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Nav Links */}
      <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <a href="#home">Home</a>
        <a href="#about">About Us</a>
        <a href="#services">Services</a>
        <a href="#how-it-works">How it Works</a>
        <a href="#mission">Vision & Mission</a>
        <a href="#contact">Connect Us</a>
      </nav>

      <button className="join-btn">Login</button>
    </header>

      {/* Hero Section */}
      <section className="hero" id="home">
  <div className="hero-content">
    <div className="hero-text-container">
      <h2 className="hero-heading">Empowering Student Entrepreneurs</h2>
      <p className="hero-text">
        Join a community where ideas meet talent. Find co-founders, work under real startups,
        and build your dream venture.
      </p>
      <div className="hero-buttons">
        <button className="hero-btn">Join Now</button>
        <button className="hero-btn secondary">Learn More</button>
      </div>
    </div>
    <div className="hero-image-container">
      <img src={AboutImg} alt="Hero" className="hero-image" />
    </div>
  </div>
</section>


      
      {/* About Us */}
<section className="section about-section" id="about">
  <div className="about-content">
    <div className="about-image-container">
      <img src={AboutImg} alt="About Founder Circle" className="about-image" />
    </div>
    <div className="about-text-container">
      <h3 className="section-heading">Who We Are</h3>
      <p className="section-text">
        Founder Circle is a student-driven platform built to nurture innovation and collaboration. Whether you have a startup idea or want to gain real-world experience, we’re here to support your journey.
      </p>
    </div>
  </div>
</section>


      {/* Services */}
      <section className="services" id="services">
  <h3 className="section-heading">Our Services</h3>
  <div className="services-grid">
    <div className="service-card">
      <img src={FounderMatch} alt="Co-Founder Match" className="service-img" />
      <h4 className="service-title">Co-Founder Match</h4>
      <p>Find your perfect co-founder who shares your startup passion and complements your skills.</p>
    </div>
    <div className="service-card">
      <img src={work} alt="Work Under Founders" className="service-img" />
      <h4 className="service-title">Work Under Founders</h4>
      <p>Gain hands-on experience by contributing to exciting student-led startups.</p>
    </div>
    <div className="service-card">
      <img src={Swap} alt="Skill Swap" className="service-img" />
      <h4 className="service-title">Skill Swap Collaboration</h4>
      <p>Exchange skills with peers – developers, designers, marketers – and build together.</p>
    </div>
  </div>
</section>
      {/* How it Works */}
      <section className="how-it-works" id="how-it-works">
  <h3 className="section-heading">How It Works</h3>
  <div className="how-grid">
    <div className="how-card">
      <img src={Signup} alt="Sign up" className="how-img" />
      <h4 className="how-title">Step 1: Sign up</h4>
      <p>Sign up with your profile and interests.</p>
    </div>
    <div className="how-card">
      <img src={Explore} alt="Explore" className="how-img" />
      <h4 className="how-title">Step 2: Explore</h4>
      <p>Explore available co-founders or startup teams.</p>
    </div>
    <div className="how-card">
      <img src={Connect} alt="Connect" className="how-img" />
      <h4 className="how-title">Step 3: Connect</h4>
      <p>Connect, collaborate, and grow your idea.</p>
    </div>
    <div className="how-card">
      <img src={Bulid} alt="Build" className="how-img" />
      <h4 className="how-title">Step 4: Build</h4>
      <p>Build experience and scale your vision.</p>
    </div>
  </div>
</section>


      {/* Mission & Vision */}
      <section className="section" id="mission">
        <h3 className="section-heading">Vision & Mission</h3>
        <div className="mission-vision">
          <div className="mission-card">
            <h4 className="mission-title">Vision</h4>
            <p>To become India’s largest student-driven startup launchpad.</p>
          </div>
          <div className="vision-card">
            <h4 className="vision-title">Mission</h4>
            <p>Empower student founders by fostering meaningful collaboration, practical experience, and community-driven growth.</p>
          </div>
        </div>
      </section>

      {/* Connect Us */}
      
<section className="contact-section" id="contact">
  <div className="contact-container">
    <div className="contact-text">
      <h3 className="section-heading">Connect With Us</h3>
      <p className="section-subtext">We’d love to hear from you. Reach out anytime.</p>
      <div className="contact-details">
  <p>
   <a href="mailto:support@foundercircle.in"><img src={Mail} alt="Email" className="contact-icon" /></a>
  </p>
  <p>
    <a href="https://instagram.com/foundercircle.in" target="_blank" rel="noopener noreferrer"><img src="/icons/instagram-icon.svg" alt="Instagram" className="contact-icon" /></a>
  </p>
  <p>
    <a href="https://linkedin.com/company/founder-circle" target="_blank" rel="noopener noreferrer"><img src={Linkedin} alt="LinkedIn" className="contact-icon" /> </a>
  </p>
</div>

    </div>

    <form className="contact-form">
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea rows="5" placeholder="Your Message" required></textarea>
      <button type="submit">Send Message</button>
    </form>
  </div>
</section>



      {/* Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Founder Circle. All rights reserved.</p>
        
      </footer>
    </div>
  );
}

export default App;
