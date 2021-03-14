import React from "react";
import "./Intro.css";

const Intro = () => {
  return (
    <section className="cereal-intro-section">
      <div className="cereal-intro-text">
        <h1>What’s in Your Cereal?</h1>
        <p className="cereal-intro-p">
          People often stand in front of the shelves at a grocery store trying to make decisions out of the overwhelming choices of cereals. Maybe you have always picked the one you liked, but have  you ever thought about some other cereals that may taste the same but has lower calories? We thought about doing a project to make better decisions about cereal choices as we were facing them in the store. 
        </p>
        <p className="cereal-intro-p">
          We collected information on 60 common cereal brands using a dataset from Kaggle which included information such as the amount of fiber and protein contained in each product. We also wanted to show you some interesting facts about this well-liked food, <strong>so you will explore the history of cereals, look at the sales data, and play with the nutrition details of each product.</strong> Do sweeter cereals always tend to have higher calories? What’s a cereal with more protein and a cheaper price? Continue reading from here, and you will find an answer. 
        </p>
      </div>
    </section>
  );
};

export default Intro;
