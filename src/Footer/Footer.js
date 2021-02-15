import React from "react";
import "./Footer.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import MailIcon from "@material-ui/icons/Mail";
function Footer() {
  return (
    <div className="Footer">
      <hr className="Footer_hr" />
      <div className="Container">
        <ul className="Container_ul">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
        </ul>
        <p className="Container_p">Copyright @2021 PSK Web development</p>
        <ul className="Container_social">
          <li style={{ paddingLeft: "0px" }}>
            <a
              href="https://www.linkedin.com/in/santhoshpemmaka-b6573912a/"
              target="_blank"
            >
              <i className="Social_itag">
                <LinkedInIcon
                  className="Social_icon"
                  style={{ height: "1rem" }}
                />
              </i>
            </a>
          </li>
          <li>
            <a href="mailto:santhosh.pemmaka@gmail.com" target="_blank">
              <i className="Social_itag">
                <MailIcon className="Social_icon" style={{ height: "1rem" }} />
              </i>
            </a>
          </li>
          <li>
            <a href="https://github.com/santhoshpemmaka" target="_blank">
              <i className="Social_itag">
                <GitHubIcon
                  className="Social_icon"
                  style={{ height: "1rem" }}
                />
              </i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/SanthoshPemmaka" target="_blank">
              <i className="Social_itag">
                <TwitterIcon
                  className="Social_icon"
                  style={{ height: "1rem" }}
                />
              </i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
