"use client";

import PortableTextComponent from "@/sanity/components/PortableText";
import { jobsDataTypes } from "@/sanity/lib/types";
import { PortableText } from "@portabletext/react";
import { useState } from "react";
import Link from "next/link";
import "../(site)/styles/jobs.css";

export const Jobs = (jobsDataRaw: jobsDataTypes) => {
  const jobData = jobsDataRaw.jobsData;

  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");
  const [experience, setExperience] = useState("");
  const [mallLocation, setMallLocation] = useState("");

  const handleNameChange = (event: any) => {
    setName(event.target.value);
  };
  const handleAddress1Change = (event: any) => {
    setAddress1(event.target.value);
  };
  const handleAddress2Change = (event: any) => {
    setAddress2(event.target.value);
  };
  const handleStateChange = (event: any) => {
    setState(event.target.value);
  };
  const handleZipcodeChange = (event: any) => {
    setZipcode(event.target.value);
  };
  const handlePhoneNumberChange = (event: any) => {
    setPhoneNumber(event.target.value);
  };
  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
  };
  const handlePositionChange = (event: any) => {
    setPosition(event.target.value);
  };
  const handleExperienceChange = (event: any) => {
    setExperience(event.target.value);
  };
  const handleMallLocationChange = (event: any) => {
    setMallLocation(event.target.value);
  };

  const applyForPosition = (pos: any) => {
    setPosition(pos);
    setShowForm(true);
  };

  const handleBackBtn = () => {
    setPosition("");
    setShowForm(false);
  };

  return (
    <>
      {jobData.map((job: any, i: number) => (
        <div
          id={job.title}
          key={i}
          className={
            !showForm || position === job.title
              ? "jobDescriptionWrapper"
              : "hidden"
          }
        >
          <h2>{job.title}</h2>

          <PortableText
            value={job?.content}
            components={PortableTextComponent}
          />
          <div className="btn-container">
            <button
              className={showForm ? "hidden" : "button"}
              onClick={() => applyForPosition(job.title)}
            >
              Apply
            </button>
          </div>
        </div>
      ))}

      <h2 className="formTitle">{`${position} Application`}</h2>
      <form
        className={showForm ? "jobForm" : "hidden"}
        action="https://formsubmit.co/info@ediimaging.com"
        method="POST"
      >
        <input
          type="hidden"
          name="_subject"
          value={`${position} Job Application`}
        />
        <input
          type="hidden"
          name="_next"
          value="https://ediimaging.com/thanks"
        />
        <input type="text" name="_honey" className="hidden" />

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
              <label>Address 1</label>
              <input
                name="address1"
                onChange={handleAddress1Change}
                value={address1}
                required
              />
            </div>

            <div className="fieldWrapper">
              <label>Address 2 (optional)</label>
              <input
                name="address2"
                onChange={handleAddress2Change}
                value={address2}
              />
            </div>

            <div className="fieldWrapper">
              <div className="w-34">
                <label>State</label>

                <input
                  name="state"
                  onChange={handleStateChange}
                  value={state}
                  required
                />
              </div>

              <div className="w-66">
                <label>Zip Code</label>

                <input
                  name="zipcode"
                  onChange={handleZipcodeChange}
                  value={zipcode}
                  required
                />
              </div>
            </div>

            <div className="fieldWrapper">
              <label>Phone Number </label>
              <input
                name="phoneNumber"
                onChange={handlePhoneNumberChange}
                value={phoneNumber}
                required
              />
            </div>
          </div>

          <div className="w-50">
            <div className="fieldWrapper">
              <label>Email </label>
              <input
                name="email"
                onChange={handleEmailChange}
                value={email}
                required
              />
            </div>

            <div className="hidden">
              <label>Position </label>
              <input
                type="hidden"
                name="position"
                onChange={handlePositionChange}
                value={position}
                required
              />
            </div>

            <div className="fieldWrapper">
              <label>Preferred Mall Location </label>
              <select
                name="location"
                onChange={handleMallLocationChange}
                value={mallLocation}
                required
              >
                <option value="">Please select location: </option>
                <option value="Eastwood Mall, Niles, OH">
                  Eastwood Mall, Niles, OH
                </option>
                <option value="Ohio Valley Mall, St. Clairsville, OH">
                  Ohio Valley Mall, St. Clairsville, OH
                </option>
                <option value="Millcreek Mall, Erie, PA">
                  Millcreek Mall, Erie, PA
                </option>
                <option value="Hunington Mall, Barboursville, WV">
                  Hunington Mall, Barboursville, WV
                </option>
                <option value="Spotsylvania Towne Centre, Spotsylvania, VA">
                  Spotsylvania Towne Centre, Spotsylvania, VA
                </option>
              </select>
            </div>

            <div className="fieldWrapper">
              <label>
                Experience (Optional - Maximum length: 250 characters){" "}
              </label>
              <textarea
                maxLength={250}
                name="experience"
                onChange={handleExperienceChange}
                value={experience}
              />
            </div>
          </div>
        </div>

        <div className="btn-container">
          <button className="button" type="submit">
            Submit Application
          </button>
        </div>
      </form>

      <div className="backBtnContainer">
        <Link
          className="button back-btn"
          onClick={() => handleBackBtn()}
          href={`/jobs#${position}`}
        >
          <span className="heading">&lt; Back</span>
        </Link>
      </div>
    </>
  );
};
