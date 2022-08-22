import styles from "../styles/Content.module.css";
import {useState} from "react";

const MallContent = () => {
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

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleAddress1Change = (event) => {
    setAddress1(event.target.value);
  };
  const handleAddress2Change = (event) => {
    setAddress2(event.target.value);
  };
  const handleStateChange = (event) => {
    setState(event.target.value);
  };
  const handleZipcodeChange = (event) => {
    setZipcode(event.target.value);
  };
  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePositionChange = (event) => {
    setPosition(event.target.value);
  };
  const handleExperienceChange = (event) => {
    setExperience(event.target.value);
  };
  const handleMallLocationChange = (event) => {
    setMallLocation(event.target.value);
  };

  const applyForPosition = (pos) => {
    setPosition(pos);
    setShowForm(true);
  }

  const handleBackBtn = () => {
    setPosition("");
    setShowForm(false);
    window.scrollTo(0, 0);
  }

  return (
    <div className={[styles.container, styles.contact].join(" ")}>
      <h2
        className={styles.title}
        style={{ textTransform: "initial" }}
      >
        Job Opportunities at eDI Imaging
      </h2>
      <p>EDI Imaging owns and operates 5 seasonal photography businesses within
      malls in Virginia, Ohio, West Virginia and Pennsylvania. We are always
      looking for reliable, bright and bubbly people who enjoy the holidays. If you
      are looking for full or part time work starting in mid November and going
      through Christmas Eve and are also available three weeks prior to Easter
then please read on.</p>
      <p>Our holiday photo business are located within malls in Erie, PA, near
      Youngstown, OH, St Clairsville, OH, Spotsylvania, VA and Huntington
      WV.</p>
      <p>We are always looking for people to fill the following positions, if interested
      please fill out and send the brief application form and we will respond within
      24 hours.</p>

      <div className={!showForm || position === "Mall Santa" ? "jobDescriptionWrapper" : "hidden"}>
        <h3>Mall Santa</h3>
        <p>Looking for seasonal employment? Are you jolly and able to project a heart-
        felt Ho-Ho-Ho? Do people say that you look like and/or remind them of
        Santa Claus? If you answered yes to any of the above questions then you
        could be our next Mall Santa Claus.</p>
        <p>We commence operating in mid November and run through December 24 th .
        Natural white beard preferred but not essential, experience working with
        children preferred as ability to smile and talk with children and answer
        questions spontaneously is essential, ability to pose for photographs and be
        able to sit for extended periods of time, must be able to pass a criminal
        background check.</p>
        <p>We are looking for full and part-time help.</p>
        <p><strong>Competitive hourly rate offered dependent upon experience and
        location of mall.</strong></p>
        <p><strong>Pay $20.00 - $37.00 per hour.</strong></p>
        <div className="btn-container">
          <button className={showForm ? "hidden" : "button"} onClick={() => applyForPosition("Mall Santa")}>Apply</button>
        </div>
      </div>

      <div className={!showForm || position === "Mall Photographer" ? "jobDescriptionWrapper" : "hidden"}>
        <h3>Mall Photographers:</h3>
        <p>If you enjoy the Holidays, have a passion for photography and like to make children smile then you are just the person we are looking for.</p>
        <p>We are looking for people with bright and bubbly personalities who can work under pressure, who have basic knowledge of photography and
  computers, have good communication skills and are able to work well with
  others.</p>
        <p><strong>We are looking for full and part-time help.</strong></p>
        <p><strong>Pay $15.00 - $20.00 per hour, dependent on location of mall.</strong></p>
        <div className="btn-container">
          <button className={showForm ? "hidden" : "button"} onClick={() => applyForPosition("Mall Photographer")}>Apply</button>
        </div>
      </div>

      <div className={!showForm || position === "Customer Service/Computer Operator" ? "jobDescriptionWrapper" : "hidden"}>
        <h3>Customer Service/Computer Operator</h3>
        <p>If you enjoy the Holidays, are a people person and are looking for some extra money then you may be just the person we are looking for.</p>
        <p>We are looking for people with bright and bubbly personalities who can work under pressure, who have basic knowledge of computers, have good communication skills and are able to work well with others.</p>
        <p><strong>We are looking for full and part-time help.</strong></p>
        <p><strong>Pay $14.00 - $16.00 per hour, dependent on location of mall.</strong></p>
        <div className="btn-container">
          <button className={showForm ? "hidden" : "button"} onClick={() => applyForPosition("Customer Service/Computer Operator")}>Apply</button>
        </div>
      </div>

      <div className={!showForm || position === "Easter Bunny" ? "jobDescriptionWrapper" : "hidden"}>
        <h3>Easter Bunny</h3>
        <p>Are you a fun-loving energetic individual who enjoys interacting with
  children? Are you healthy under 6ft. tall and weigh less than 250lbs.</p>
        <p>If you answered yes to the above questions then you could be our next Mall
  Easter Bunny.</p>
        <p>We are looking for people of good mental and physical health who are able to sit for extended periods time and be able to handle a confined costume. Must be able to pass a criminal background check.</p>
        <p><strong>Pay $14.00 - $17.00 per hour, dependent on location.</strong></p>
        <div className="btn-container">
          <button className={showForm ? "hidden" : "button"} onClick={() => applyForPosition("Easter Bunny")}>Apply</button>
        </div>
      </div>

      <form className={showForm ? "" : "hidden" } action="https://formsubmit.co/info@ediimaging.com" method="POST">
        <input type="hidden" name="_subject" value={`${position} Job Application`} />
        <input type="hidden" name="_next" value="https://ediimaging.com/thanks"/>
        <input type="text" name="_honey" className="hidden"/>
        <div className="fieldWrapper">
          <label>Name </label>
          <br/>
          <input
            name="name"
            onChange={handleNameChange}
            value={name}
            required
          />
        </div>

        <div className="fieldWrapper">
          <label>Address 1</label>
          <br/>
          <input
            name="address1"
            onChange={handleAddress1Change}
            value={address1}
            required
          />
        </div>

        <div className="fieldWrapper">
          <label>Address 2 (optional)</label>
          <br/>
          <input
            name="address2"
            onChange={handleAddress2Change}
            value={address2}
          />
        </div>

        <div className="fieldWrapper">
          <div className="w-34">
            <label>State</label>
            <br/>
            <input
              name="state"
              onChange={handleStateChange}
              value={state}
              required
            />
          </div>

          <div className="w-66">
            <label>Zip Code</label>
            <br/>
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
          <br/>
          <input
            name="phoneNumber"
            onChange={handlePhoneNumberChange}
            value={phoneNumber}
            required
          />
        </div>

        <div className="fieldWrapper">
          <label>Email </label>
          <br/>
          <input
            name="email"
            onChange={handleEmailChange}
            value={email}
            required
          />
        </div>

        <div className="hidden">
          <label>Position </label>
          <br/>
          <input
            type="hidden"
            name="position"
            onChange={handlePositionChange}
            value={position}
            required
          />
        </div>

        <div className="fieldWrapper">
          <label>Experience (Optional - Maximum length: 250 characters) </label>
          <br/>
          <textarea
            maxLength="250"
            name="experience"
            onChange={handleExperienceChange}
            value={experience}
          />
        </div>

        <div className="fieldWrapper">
          <label>Preferred Mall Location </label>
          <br/>
          <select
            name="location"
            onChange={handleMallLocationChange}
            value={mallLocation}
            placeholder=""
          >
            <option value="Please select location">Please select location:</option>
            <option value="Eastwood Mall, Niles, OH">Eastwood Mall, Niles, OH</option>
            <option value="Ohio Valley Mall, St. Clairsville, OH">Ohio Valley Mall, St. Clairsville, OH</option>
            <option value="Millcreek Mall, Erie, PA">Millcreek Mall, Erie, PA</option>
            <option value="Hunington Mall, Barboursville, WV">Hunington Mall, Barboursville, WV</option>
            <option value="Spotsylvania Towne Centre, Spotsylvania, VA">Spotsylvania Towne Centre, Spotsylvania, VA</option>
          </select>
        </div>

        <div className="btn-container">
          <button className="button" type="submit">Submit Application</button>
        </div>

        <div className="backBtnContainer">
          <button
            type="button"
            className="button back-btn"
            onClick={() => handleBackBtn()}
          >
            <span className="heading">&lt; Back</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default MallContent;
