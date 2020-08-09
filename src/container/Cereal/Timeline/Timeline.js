import React from "react";
import "./Timeline.css";

import first from "./img/first_cereal_box.png";
import cornFlakes from "./img/corn_flakes.png";
import quaker from "./img/quaker_logo.png";
import kellogg from "./img/kelloggs_logo.png";
import general from "./img/general_mill_logo.png";
import cheerios from "./img/cheerios_logo.png";
import kid from "./img/kid.png";
import astronaut from "./img/astronaut.png";
import kashi from "./img/kashi_logo.png";

/*

TODO:
* Make components responsive 
* make components instead of using pure div
* create another json file used for pure text only
* simply import process
* animation
*/

const Timeline = () => {
  return (
    <section className="timeline-section">
      <h2>Cereal in History</h2>
      <p>
        Here’s a journey through the history of cereal with some fun facts you
        may haven’t heard of yet.
        <small className="timeline-instruction"> Scroll Down &darr; </small>
      </p>
      <div id="timeline" className="timeline-graph">
        <div className="timeline-item-container bottom">
          <div className="year-container">
            <h3 className="cereal-year">1863</h3>
          </div>
          <div className="spot"></div>
          <div className="timeline-content-container">
            <img alt="first cereal box image" src={first} />
            <div className="timeline-content-text-wrapper">
              <h4>“Granula” – The Beginning of Breakfast Cereal</h4>
              <p>
                In 1863, James Caleb Jackson invented the first breakfast cereal
                and named it “granula”. It was made of baked graham flour and
                had to be soaked in milk overnight before serving.
              </p>
            </div>
          </div>
        </div>
        <div className="timeline-item-container top">
          <div className="year-container">
            <h3 className="cereal-year">1894</h3>
          </div>
          <div aria-hidden className="spot"></div>
          <div className="timeline-content-container">
            <img alt="corn flakes cereal box" src={cornFlakes} />
            <div className="timeline-content-text-wrapper">
              <h4>Corn Flakes</h4>
              <p>
                Dr. John Harvey Kellogg invented Kellogg’s Corn Flakes in 1894.
                It was also the first breakfast cereal to use prizes as a
                marketing method.
              </p>
            </div>
          </div>
        </div>
        <div className="timeline-item-container bottom">
          <div className="year-container">
            <h3 className="cereal-year">1901</h3>
          </div>
          <div className="spot"></div>
          <div className="timeline-content-container">
            <img alt="quaker logo" src={quaker} />
            <div className="timeline-content-text-wrapper">
              <h4>Quaker Oats Company</h4>
              <p>
                In 1901, the large cereal company American Cereal officially
                changed its name to the Quaker Oats Company. It later introduced
                some convenience products, such as the Quaker Instant Oatmeal,
                that are still popular among consumers today.
              </p>
            </div>
          </div>
        </div>
        <div className="timeline-item-container top">
          <div className="year-container">
            <h3 className="cereal-year">1906</h3>
          </div>
          <div className="spot"></div>
          <div className="timeline-content-container center-item">
            <img alt="kellogg's logo" src={kellogg} />
            <div className="timeline-content-text-wrapper">
              <h4>Kellogg’s</h4>
              <p>
                In 1906, W.K. Kellogg started his business, the Battle Creek
                Toasted Corn Flake Company, which later became the famous cereal
                brand Kellogg's. At the time, the company invested heavily in
                advertising campaigns.
              </p>
            </div>
          </div>
        </div>
        <div className="timeline-item-container bottom">
          <div className="year-container">
            <h3 className="cereal-year">1928</h3>
          </div>
          <div className="spot"></div>
          <div className="timeline-content-container center-item">
            <img alt="General Mills logo" src={general} />
            <div className="timeline-content-text-wrapper">
              <h4>General Mills</h4>
              <p>
                General Mills was founded in 1928, and its stocks were first
                traded on the New York Stock Exchange later that same year.
              </p>
            </div>
          </div>
        </div>
        <div className="timeline-item-container top">
          <div className="year-container">
            <h3 className="cereal-year">1941</h3>
          </div>
          <div aria-hidden className="spot"></div>
          <div className="timeline-content-container">
            <img alt="Cheerios cereal logo" src={cheerios} />
            <div className="timeline-content-text-wrapper">
              <h4>Cheerios</h4>
              <p>
                In 1941, General Mills introduced the Cheerioats cereal, which
                is renamed to Cheerios in 1945. It has been one of the best
                selling cereals in the US.
              </p>
            </div>
          </div>
        </div>
        <div className="timeline-item-container bottom">
          <div className="year-container">
            <h3 className="cereal-year">1945</h3>
          </div>
          <div className="spot"></div>
          <div className="timeline-content-container">
            <img alt="Cartoon Drawing about kid" src={kid} />
            <div className="timeline-content-text-wrapper">
              <h4>More Sugar for Children?</h4>
              <p>
                After World War II, companies started adding more sugar to their
                cereal products, and they began targeting children in their
                advertisement campaigns.
              </p>
            </div>
          </div>
        </div>
        <div className="timeline-item-container top">
          <div className="year-container">
            <h3 className="cereal-year">1969</h3>
          </div>
          <div aria-hidden className="spot"></div>
          <div className="timeline-content-container">
            <img alt="Cartoon Drawing aobut an astronaut" src={astronaut} />
            <div className="timeline-content-text-wrapper">
              <h4>From Dining Table to the Moon</h4>
              <p>
                During the first moon landing in 1969, Corn Flakes traveled on
                Apollo 11 as a space food for the astronauts. It was compressed
                and served with water.
              </p>
            </div>
          </div>
        </div>
        <div className="timeline-item-container bottom">
          <div className="year-container">
            <h3 className="cereal-year">2000</h3>
          </div>
          <div className="spot"></div>
          <div className="timeline-content-container center-item">
            <img alt="Kashi logo" src={kashi} />
            <div className="timeline-content-text-wrapper">
              <h4>Kashi – Natural and Organic Products</h4>
              <p>
                Kellogg’s acquired Kashi in 2000 to expand its product line to
                more natural and organic foods. Consumers are paying more
                attention to the ingredients and nutrition in their cereals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
