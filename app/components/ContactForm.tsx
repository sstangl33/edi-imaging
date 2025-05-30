"use client";

import { useState } from "react";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (event: any) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
  };
  const handleSubjectChange = (event: any) => {
    setSubject(event.target.value);
  };
  const handleMessageChange = (event: any) => {
    setMessage(event.target.value);
  };

  return (
    <>
      <h2 className="formTitle">{`Message eDI Imaging ${
        !subject || subject === "General Interest" ? "" : `about ${subject}`
      }`}</h2>
      <form
        className="contactForm"
        action="https://api.web3forms.com/submit"
        method="POST"
      >
        {/* -- Replace with your Access Key -- */}
        <input
          type="hidden"
          name="access_key"
          value="6ae2f17b-5f47-4df5-b1d8-2919aa290c60"
        />

        {/* <!-- Optional: Can be type="hidden" or type="text" for subject --> */}
        <input type="hidden" name="subject" value={`${subject}`} />

        <input
          type="hidden"
          name="_subject"
          value={`Message about eDI ${
            subject === "General Interest" ? "Imaging" : subject
          }`}
        />
        <input
          type="hidden"
          name="_next"
          value="https://ediimaging.com/thanks"
        />

        {/* -- Honeypot Spam Protection -- */}
        <input type="checkbox" name="botcheck" className="hidden" />

        <div className="colWrapper">
          <div className="w-50">
            <div className="fieldWrapper">
              <label>Name </label>
              <input
                name="name"
                onChange={handleNameChange}
                value={name}
                required
              />
            </div>

            <div className="fieldWrapper">
              <label>Email </label>
              <input
                name="email"
                onChange={handleEmailChange}
                value={email}
                required
              />
            </div>

            <div className="fieldWrapper">
              <label>Subject of Message </label>
              <select
                name="location"
                onChange={handleSubjectChange}
                value={subject}
                required
              >
                <option value="">Please select subject of message: </option>
                <option value="Mall Seasonal Photography">
                  Mall Seasonal Photography
                </option>
                <option value="Sports Photography">Sports Photography</option>
                <option value="Preschool Photography">
                  Preschool Photography
                </option>
                <option value="Family Portraits">Family Portraits</option>
                <option value="Senior Portraits">Senior Portraits</option>
                <option value="Drone Photography">Drone Photography</option>
                <option value="General Interest">General/Other</option>
              </select>
            </div>
          </div>

          <div className="w-50">
            <div className="fieldWrapper">
              <label>Message (500 characters max) </label>
              <textarea
                maxLength={500}
                name="question"
                onChange={handleMessageChange}
                value={message}
              />
            </div>
          </div>
        </div>

        {/* -- Custom Confirmation / Success Page -- */}
        <input
          type="hidden"
          name="redirect"
          value="https://www.ediimaging.com/thanks"
        />

        <div className="btn-container">
          <button className="button" type="submit">
            Submit Form
          </button>
        </div>
      </form>
    </>
  );
};
