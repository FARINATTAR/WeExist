import React, { useState } from "react";
import "./Donate.css";

function Donate() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        amount: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to handle form submission
        console.log(formData);
        alert("Thank you for your donation!");
    };

    return (
        <div className="donate-page">
            <h1>Support Our Cause</h1>
            <p>Your contributions help us make a difference.</p>
            
            <form onSubmit={handleSubmit} className="donation-form">
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="amount">Donation Amount:</label>
                    <input
                        type="number"
                        name="amount"
                        value={formData.amount}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="message">Message (optional):</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                    />
                </div>

                <button type="submit" className="btn">Donate Now</button>
            </form>
        </div>
    );
}

export default Donate;
