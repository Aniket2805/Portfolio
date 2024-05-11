import React from "react";
import Fade from "react-reveal/Fade";

function Skills() {
  return (
    <section id="Skills">
      <div className="container">
        <Fade left>
          <h1>
            <span>S</span>kills
          </h1>
        </Fade>
        <div className="row">
          <div className="col-lg-6 skills-l" style={{ padding: "2rem" }}>
            <Fade duration="1000" delay="500">
              <h3>C/C++</h3>
            </Fade>
            <Fade bottom delay="500">
              <div className="progress" style={{ height: "25px" }}>
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "90%" }}
                  aria-valuenow="90"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  90%
                </div>
              </div>
            </Fade>
            <Fade duration="1000" delay="1000">
              <h3>HTML5/CSS3</h3>
            </Fade>
            <Fade bottom delay="1000">
              <div className="progress" style={{ height: "25px" }}>
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "88%" }}
                  aria-valuenow="88"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  88%
                </div>
              </div>
            </Fade>

            <Fade duration="1000" delay="1500">
              <h3>Bootstrap</h3>
            </Fade>
            <Fade bottom delay="1500">
              <div className="progress" style={{ height: "25px" }}>
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "80%" }}
                  aria-valuenow="80"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  80%
                </div>
              </div>
            </Fade>

            <Fade duration="1000" delay="2000">
              <h3>Javascript</h3>
            </Fade>
            <Fade bottom delay="2000">
              <div className="progress" style={{ height: "25px" }}>
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "80%" }}
                  aria-valuenow="80"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  80%
                </div>
              </div>
            </Fade>

            <Fade duration="1000" delay="2500">
              <h3>MySql</h3>
            </Fade>
            <Fade bottom delay="2500">
              <div className="progress" style={{ height: "25px" }}>
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "90%" }}
                  aria-valuenow="90"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  90%
                </div>
              </div>
            </Fade>
            <Fade duration="1000" delay="3000">
              <h3>React</h3>
            </Fade>
            <Fade bottom delay="3000">
              <div className="progress" style={{ height: "25px" }}>
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "80%" }}
                  aria-valuenow="80"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  80%
                </div>
              </div>
            </Fade>
          </div>
          <Fade right>
            <div className="col-lg-6 skills-r">
              <img src="/skills.gif" alt="skillsimage" />
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}

export default Skills;
