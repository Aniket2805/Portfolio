import React from "react"
import Typed from "typed.js";
import { Zoom } from "react-reveal"
import Bounce from 'react-reveal/Bounce';
function Header() {
    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Software Engineer", "Front End Developer"],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true
        });
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <section id="header">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light" style={{ paddingBottom: "13px" }}>
                    <Bounce left>
                        <a className="brand" href="index.html"><span className="A"
                            style={{ color: "#E90064", fontSize: "4rem" }}>A</span>niket</a>
                    </Bounce>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav" style={{ marginLeft: "auto" }}>
                            <Bounce right>
                                <li className="nav-item">
                                    <a className="nav-link active" id="topmenue" href="index.html">Home</a>
                                </li>
                            </Bounce>
                            <Bounce right delay="200">
                                <li className="nav-item">
                                    <a className="nav-link active" id="topmenue" href="#About">About</a>
                                </li>
                            </Bounce>
                            <Bounce right delay="400">
                                <li className="nav-item">
                                    <a className="nav-link active" id="topmenue" href="#Skills">Skills</a>
                                </li>
                            </Bounce>
                            <Bounce right delay="600">
                                <li className="nav-item">
                                    <a className="nav-link active" id="topmenue" href="#Projects">Projects</a>
                                </li>
                            </Bounce>
                            <Bounce right delay="800">
                                <li className="nav-item">
                                    <a className="nav-link active" id="topmenue" href="#Contact">Contact</a>
                                </li>
                            </Bounce>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className="container">
                <div className="row">
                    <Zoom left>
                        <div className="col-lg-6 col-md-6 h2 fw-bold">
                            <div className="aboutme">
                                <h3>Hello, It's Me</h3>
                                <p style={{ fontSize: "5.2rem" }}>Aniket Kumar</p>
                                <h3>And I'm a <span className="text-highlight" ref={el}></span></h3>
                                <p className="h5" style={{ margin: "2rem 0rem" }}>I'm a creative and motivated individual, combining my imagination with technical skills to develop innovative solutions that leave a lasting impression.</p>
                            </div>
                            <div className="social-media">
                                <a href="https://www.facebook.com/profile.php?id=100055321989829" target={"_blank"}><i
                                    className="fa-brands fa-facebook-f"></i></a>
                                <a href="https://twitter.com/AniketK66947378" target={"_blank"}><i
                                    className="fa-brands fa-twitter"></i></a>
                                <a href="https://www.instagram.com/aniket28_kumar/" target={"_blank"}><i
                                    className="fa-brands fa-instagram"></i></a>
                                <a href="https://www.linkedin.com/in/aniket-kumar-1b01a3237/" target={"_blank"}><i
                                    className="fa-brands fa-linkedin-in"></i></a>
                                <a href="https://github.com/Aniket2805" target={"_blank"}><i class="fa-brands fa-github"></i></a>
                            </div>
                            <div className="cv">
                                <a href="/Resume.pdf" className="download-cv" style={{textDecoration:"none"}}><i className="fa-solid fa-circle-arrow-down" style={{marginRight:"2px"}}></i>
                                    Download CV</a>
                            </div>
                        </div>
                    </Zoom>

                    <Zoom right>
                        <div className="col-lg-6 col-md-6 myimage">
                            <img src="/formal.png" className="box up-down"></img>
                        </div>
                    </Zoom>

                </div>
            </div>
        </section>);
}

export default Header;