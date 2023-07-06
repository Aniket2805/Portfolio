import { Zoom } from "react-reveal";
import Fade from 'react-reveal/Fade';
function About() {
    return (
        <section id="About">
            <div className="container">
                <div className="row">
                    <Zoom>
                        <div className="col-lg-4 col-md-5 col-l">
                            <img src="/aniket.png" alt="" />
                        </div>
                    </Zoom>
                    <Fade right>
                        <div className="col-lg-8 col-md-7 aboutme">
                            <h1>About <span>Me</span></h1>
                            <p>I am <span>Aniket Kumar</span> and currently pursuing Bachelor of Technology from Netaji Subhas
                                University of Technology, New Delhi. I am a Web Developer and passionate programmer with a deep love for coding and problem-solving, driven by the desire to create efficient and elegant software solutions</p>
                            <table>
                                <tr>
                                    <td style={{padding: "2px"}}>
                                        <div className="about-tabs">
                                            <p className="about-links active-link">Education</p>
                                        </div>
                                        <div className="about-content active-content" id="education">
                                            <ul>
                                            <li><span>Currently</span><br />Pursuing B.Tech in Information Technology from Netaji Subhas University of Technology.
                                                </li>
                                                <li><span>2021</span><br />12th from Rajkiya Pratibha Vikas Vidyalaya(RPVV), Sector-5
                                                    Dwarka,New Delhi.</li>
                                                <li><span>2019</span><br />10th from Govt.Co-Ed.Sr.Sec.School, Sector-2 Dwarka, New Delhi.</li>
                                                
                                                
                                            </ul>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="about-tabs">
                                            <p className="about-links active-link">Experience</p>
                                        </div>
                                        <div className="about-content active-content" id="experience">
                                            <ul>
                                                <li><span>Projects</span><br></br>Done many projects.</li>
                                                <li><span>Hackathons</span><br></br>Participated in many Hackathons.</li>
                                                <li><span>Coder</span><br></br>Solved many DSA Problems on various platform like <a href="https://leetcode.com/aniket8800/" target={"_blank"} style={{textDecoration: "none"}}>LeetCode</a> and <a href="https://auth.geeksforgeeks.org/user/aniketrorb1x/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user" target={"_blank"} style={{textDecoration: "none"}}>GeeksForGeeks</a>.</li>
                                                <li><span>Contest</span><br></br>Given many Contest on <a href="https://www.codechef.com/users/aniket28kumar" target={"_blank"} style={{textDecoration: "none"}}>CodeChef</a></li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </Fade>
                </div>
            </div>
        </section>
    )
}

export default About;