import React from "react";
import "./Featured.css";
import cereal from "../../img/thumbnails/cereal.png";

export default class featured extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailValue: "",
    };
  }

  render() {
    return (
      <div className="featured">
        <h2>Featured Projects</h2>
        <div className="projects-sum">
          <div className="project-intro">
            <img src={cereal} />
            <h3>What’s in your cereal?</h3>
            <p>
              Come discover what is actually in your cereal. Play with cereal
              data!
            </p>
          </div>
          <div className="project-intro">
            <img src={cereal} />
            <h3>What’s in your cereal?</h3>
            <p>
              Come discover what is actually in your cereal. Play with cereal
              data!
            </p>
          </div>
          <div className="project-intro">
            <img src={cereal} />
            <h3>What’s in your cereal?</h3>
            <p>
              Come discover what is actually in your cereal. Play with cereal
              data!
            </p>
          </div>
        </div>
        <div className="subscribe">
          <p>Subscribe our mailing list to view the most updated projects!</p>
          <div className="sub-input">
            <div id="mc_embed_signup">
              <form
                action="https://gmail.us10.list-manage.com/subscribe/post?u=db541c297969feac61daf4a05&amp;id=5135837c8c"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                className="validate"
                target="_blank"
                noValidate
              >
                <div id="mc_embed_signup_scroll" className="sub-input">
                  <div className="mc-field-group">
                    <input
                      type="email"
                      value={this.state.emailValue}
                      name="EMAIL"
                      className="required email"
                      placeholder="Email"
                      id="mce-EMAIL"
                      onChange={(e) => {
                        this.setState({ emailValue: e.target.value });
                      }}
                    />
                  </div>
                  <div id="mce-responses" className="clear">
                    <div
                      className="response"
                      id="mce-error-response"
                      style={{ display: "none" }}
                    ></div>
                    <div
                      className="response"
                      id="mce-success-response"
                      style={{ display: "none" }}
                    ></div>
                  </div>
                  <div
                    style={{ position: "absolute", left: "-5000px" }}
                    aria-hidden="true"
                  >
                    <input
                      type="text"
                      name="b_db541c297969feac61daf4a05_5135837c8c"
                      tabIndex="-1"
                      value=""
                      onChange={()=>{}}
                    />
                  </div>
                  <div className="clear">
                    <input
                      type="submit"
                      value="Subscribe"
                      name="subscribe"
                      id="mc-embedded-subscribe"
                      className="button"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
