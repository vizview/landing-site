import React from "react";
import "./Timeline.css";
import cereal from "../../VizView/img/thumbnails/cereal.png";

const Timeline = () => {
  return (
    <div>
      <div className="timeline">
        <div className="timeline_intro">
          <h2>Cereal in History</h2>
          <p>
            [History Placeholder ]Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco
          </p>
        </div>
        <div id="timeline_bar" className="scroll_container">
          <div className="year">
            <h3>1939</h3>
          </div>
          <div className="timeline_spot_wrapper">
            <div className="timeline_spot"></div>
          </div>
          <div className="timeline_item_wrapper">
            <img src={cereal} />
            <h4>heading heading</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </p>
          </div>

          <div className="timeline_spot_wrapper">
            <div className="timeline_spot"></div>
          </div>
          <div className="timeline_item_wrapper">
            <img src={cereal} />
            <h3>1939</h3>
            <h4>heading heading</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </p>
          </div>

          <div className="timeline_spot_wrapper">
            <div className="timeline_spot"></div>
          </div>
          <div className="timeline_item_wrapper">
            <img src={cereal} />
            <h3>1939</h3>
            <h4>heading heading</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </p>
          </div>

          <div className="timeline_spot_wrapper">
            <div className="timeline_spot"></div>
          </div>

          <div className="timeline_item_wrapper">
            <img src={cereal} />
            <h4>heading heading</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </p>
          </div>
          <div className="timeline_item_wrapper">
            <img src={cereal} />
            <h3>1939</h3>
            <h4>heading heading</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
