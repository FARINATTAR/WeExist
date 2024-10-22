import React from "react"
import Header from "../components/Header";
import Footer from "../components/Footer";
import homepageImg from "../assets/homeimg.jpeg";
import aboutimg from "../assets/aboutimg.jpg";
import "./Home.css"

function Home(){
    return (
        <div>
        <Header />
      
        <div className="hero-img">
          <img src={homepageImg} alt="Donating people image" />
          <div className="overlay-text">
            <h1>Together We Thrive, Together We Exist</h1>
            <p>Support communities in need by donating today.</p>
            <button className="cta-button">Donate Now</button>
          </div>
        </div>
      
        {/* Ensure sections are properly separated */}
        <section className="hero-section-background">
            <div className="hero-content">
                <h1>Welcome to WeExist!</h1>
                <p>We’re on a mission to make a real difference. Join us in our journey to provide immediate relief and long-term support to those in need.</p>
                <div className="hero-cta-buttons">
                    <button className="hero-cta-button Dodonate-btn">Donate Now</button>
                    <button className="hero-cta-button join-btn">Join Us</button>
                </div>
            </div>
        </section>

      


        <section className="our-vision">
            <h2>Our Vision: A Movement in the Making</h2>
            <p>We’re not just another organization—we’re a movement on the rise. *WeExist* is built on the belief that change starts small but grows fast when driven by purpose and people who care.</p>
            <p>We’re just getting started, but we’re dreaming big. Our mission? To spark a ripple effect that transforms lives, one small act of kindness at a time. Think of us as the launchpad for something bigger—a community-driven wave of support, fueled by the power of unity.</p>
            
            <div className="vision-cards">
                <div className="vision-card">
                    <h3>Join the Movement</h3>
                    <p>Be part of the founding community that turns ideas into action and passion into progress.</p>
                </div>
                    <div className="vision-card">
                        <h3>Make an Impact</h3>
                        <p>Help us create a better world by contributing to our mission and spreading the word.</p>
                    </div>
                        <div className="vision-card">
                            <h3>Lead Change</h3>
                            <p>Take the lead in making a difference. Your involvement can inspire others to join the cause.</p>
                        </div>
            </div>
            
            <div className="vision-cta">
                <button>Be a Founding Member</button>
            </div>
        </section>
        <section className="about-us">
          <h2>Our Mission</h2>
          <p>
            At WeExist, we are dedicated to making a difference in the lives of those
            in need. Our mission is to provide immediate relief and long-term support
            to underprivileged communities.
          </p>
          <img src={aboutimg} alt="Community support image" />
          <p>
            Founded on the principles of empathy and solidarity, we work tirelessly to
            ensure that no one is left behind. Join us in our mission to create a
            better world.
          </p>
          <button className="cta-button">Learn More</button>
        </section>
      
        <Footer />
      </div>
      

    );
};

export default Home