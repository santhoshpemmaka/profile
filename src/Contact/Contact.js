import React from "react";
import "./Contact.css";
import image_profile from "../imges/contactPage.jpg";
function Contact() {
  return (
    <div style={{ backgroundColor: "#474747" }} className="Contact_header">
      <div className="Container">
        <div className="Container_row">
          <div className="column_row">
            <div className="image_row">
              <div className="image">
                <img src={image_profile} alt="me" />
              </div>
            </div>
          </div>
          <div className="column_row">
            <br />
            <h1
              style={{ color: "white", fontFamily: "Poppins, helvetica" }}
              className="Contact"
            >
              Contact Me
            </h1>
            <br />
            <a href="/">
              <button className="btn btn_secondary">Profile</button>
            </a>
            <br />
            <br />
            <a
              target="_blank"
              href="https://www.linkedin.com/in/santhoshpemmaka-b6573912a/"
            >
              <button className="btn btn_secondary">Linkedin</button>
            </a>
            <br />
            <br />
            <a target="_blank" href="mailto:santhosh.pemmaka@gmail.com">
              <button className="btn btn_secondary">Email</button>
            </a>
            <br />
            <br />
            <a target="_blank" href="https://github.com/santhoshpemmaka/">
              <button className="btn btn_secondary">Github</button>
            </a>
            <br />
            <br />
            <a target="_blank" href="https://twitter.com/SanthoshPemmaka">
              <button className="btn btn_secondary">Twitter</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
