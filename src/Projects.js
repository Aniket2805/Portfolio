import React from "react";
import { Zoom } from "react-reveal";

function Projects() {
  return (
    <section id="Projects">
      <div className="container">
        <Zoom left>
          <h1>
            <span>P</span>rojects
          </h1>
        </Zoom>
        <div className="row">
          <Zoom left>
            <div className="col-lg-4">
              <div className="data">
                <img src="/fashion.jpg" alt="" />
                <div className="projectinfo">
                  <h3>Ecommerce Web App</h3>
                  <p>
                    FashionFusion is a sleek and user-friendly ecommerce website
                    that offers a wide range of trendy clothing.
                  </p>
                  <a
                    href="https://fashionfusion2023.netlify.app/"
                    target="_blank"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </div>
              </div>
            </div>
          </Zoom>
          <Zoom top>
            <div className="col-lg-4">
              <div className="data">
                <img src="/flixpedia.jpg" alt="" />
                <div className="projectinfo">
                  <h3>Movie Details Web App</h3>
                  <p>
                    Flixpedia is your go-to movie detail website, providing
                    comprehensive information on films, including plot
                    summaries, cast and crew details, ratings, and user reviews.
                  </p>
                  <a href="https://flixpedia.netlify.app/" target="_blank">
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </div>
              </div>
            </div>
          </Zoom>
          <Zoom right>
            <div className="col-lg-4">
              <div className="data">
                <img src="/videoverse.webp" alt="" />
                <div className="projectinfo">
                  <h3>VideoVerse Web App</h3>
                  <p>
                    Discover and play an extensive range of videos, from
                    entertaining vlogs to informative tutorials, all in one
                    user-friendly hub.
                  </p>
                  <a
                    href="https://explorevideoverse.netlify.app/"
                    target="_blank"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </div>
              </div>
            </div>
          </Zoom>
        </div>
        <a href="" className="btn">
          See more
        </a>
      </div>
    </section>
  );
}

export default Projects;
