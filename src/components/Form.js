import axios from "axios";
import "./FormStyles.css";
import React, { useState } from 'react'

const Form = () => {
    const defaultEnquiry = {
        name: "",
        email: "",
        subject: "Service Request",
        message: "",
    };
    const [enquiryForm, setEnquiryForm] = useState(defaultEnquiry);

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setEnquiryForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted with data:", enquiryForm);
        axios
            .post(`http://localhost:5001/enquiry`, enquiryForm, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then(() => {
                setEnquiryForm(defaultEnquiry);
                alert("Your enquiry has been submitted successfully");
            })
            .catch((error) => {
                console.log(error);
                alert("Unable to submit the enquiry form");
            });
    };

    return (
        <div className="form">
            <form action="" onSubmit={onFormSubmit}>
                <label htmlFor="name">Your Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter your name"
                    min={2}
                    max={60}
                    autoComplete="off"
                    required
                    value={enquiryForm.name}
                    onChange={handleFormChange}
                />


                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    min={2}
                    max={60}
                    autoComplete="off"
                    required
                    value={enquiryForm.email}
                    onChange={handleFormChange}
                />


                <label htmlFor="subject">Subject</label>
                <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Enter your name"
                    min={2}
                    max={60}
                    autoComplete="off"
                    required
                    value={enquiryForm.subject}
                    onChange={handleFormChange}
                />


                <label htmlFor="message">Message</label>
                <textarea
                    rows="6"
                    placeholder="Type your message here"
                    type="text"
                    name="message"
                    id="message"
                    autoComplete="off"
                    minLength={3}
                    maxLength={200}
                    required
                    value={enquiryForm.message}
                    onChange={handleFormChange}

                />
                <button className="btn">Submit</button>
            </form>
        </div>
    )
}

export default Form