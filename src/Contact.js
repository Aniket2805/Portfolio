import React from "react";
import { Zoom } from "react-reveal";
function Contact() {
  return (
    <section id="Contact">
      <div className="container">
        <h1>
          <span>C</span>ontact Me
        </h1>
        <div className="row contact-box">
          <div className="col-lg-6 contact-left">
            <Zoom top>
              <div className="reach-box">
                <div className="reach-box-l">
                  <a
                    href="https://goo.gl/maps/uJgEGGM9LhpiCjXu9"
                    target="_blank"
                  >
                    <i
                      className="fa-solid fa-location-dot fa-2x contact-icon"
                      style={{
                        color: "white",
                        width: "4.2rem",
                        height: "4.2rem",
                        textAlign: "center",
                      }}
                    ></i>
                  </a>
                </div>
                <div className="reach-box-r">
                  <h4>Address</h4>
                  <p>0-49, Back Side Chanakya Place-2, New Delhi-110059</p>
                </div>
              </div>
            </Zoom>
            <Zoom left>
              <div className="reach-box">
                <div className="reach-box-l">
                  <i className="fa-solid fa-phone-volume fa-2x contact-icon"></i>
                </div>
                <div className="reach-box-r">
                  <h4>Phone</h4>
                  <p>8800139664</p>
                </div>
              </div>
            </Zoom>
            <Zoom bottom>
              <div className="reach-box">
                <div className="reach-box-l">
                  <i className="fa-solid fa-envelope fa-2x contact-icon"></i>
                </div>
                <div className="reach-box-r">
                  <h4>Email</h4>
                  <p>aniketkumar2025it@gmail.com</p>
                </div>
              </div>
            </Zoom>
          </div>
          <Zoom right>
            <div className="col-lg-6 contact-right" style={{ padding: "40px" }}>
              <form
                action="mailto:aniketrocks2468@gmail.com"
                method="post"
                enctype="text/plain"
              >
                <h2>Write us</h2>
                <div className="inputbox">
                  <input type="text" name="Name" id="" required="required" />
                  <span>Full Name</span>
                </div>
                <div className="inputbox">
                  <input type="email" name="Email" id="" required="required" />
                  <span>Email</span>
                </div>
                <div className="inputbox">
                  <input
                    type="number"
                    name="Mobile"
                    id=""
                    required="required"
                  />
                  <span>Mobile number</span>
                </div>
                <div className="inputbox">
                  <textarea
                    name="Message"
                    id="textarea"
                    cols="30"
                    rows="4"
                    required="required"
                  ></textarea>
                  <span>Your Message</span>
                </div>
                <div className="inputbox">
                  <input type="submit" value="Send" />
                </div>
              </form>
            </div>
          </Zoom>
        </div>
      </div>
    </section>
  );
}

export default Contact;
