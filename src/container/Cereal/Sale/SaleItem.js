import React from "react";
import "./SaleItem.css";
import saleData from "./SaleData.json";

class SaleItem extends React.Component {
  constructor(props) {
    super(props);
  }

  nameFormatter(name) {
    let strArr = name.split("_");
    let capArr = strArr.map((i) => i[0].toUpperCase() + i.slice(1));
    return capArr.join(" ");
  }

  renderStar(rating) {
    var starNum = 0;
    if (rating >= 5) {
      starNum = 5;
    } else if (rating < 5 && rating >= 4) {
      starNum = 4;
    } else if (rating < 4 && rating >= 3) {
      starNum = 3;
    } else if (rating < 3 && rating >= 2) {
      starNum = 2;
    } else if (rating < 2 && rating >= 1) {
      starNum = 1;
    }

    var stars = [];
    for (let i = 0; i < starNum; i++) {
      stars.push(<span className="fa fa-star checked" key={`checked- + ${i}`}></span>);
    }
    for (let j = 0; j < 5 - starNum; j++) {
      stars.push(<span className="fa fa-star" key={`star- + ${j}`}></span>);
    }

    return stars;
  }

  render() {
    var curData = this.props.name
      ? saleData[this.props.name]
      : saleData["honey_nut_cheerios"];

    let curCereal = this.nameFormatter(this.props.name);

    return (
      <div className="row justify-content-between sale-item">
        <div className="col-md-2 cur-cereal">
          <div className="rank-label">{curData.rank}</div>
          <img
            src={require(`../Data/img/${
              this.props.name ? this.props.name : "honey_nut_cheerios"
            }.png`)}
          ></img>
        </div>
        <div className="col-md-7">
          <div className="sale-item-intro">
            <div className="rank">{curData.rank}</div>
            <div className="divider"></div>
            <div className="intro-text-wrapper">
              <h3>{curCereal}</h3>
            </div>
          </div>

          <h4>{curData.heading}</h4>
          <small className="author">
            {curData.author} on <span>{curData.dateOfRating}</span>
          </small>
          <p>{curData.desc}</p>
        </div>
        <div className="divider-rating"></div>
        <div className="col-md-2">
          <div className="rating">
            <div className="rating-num">{curData.rating}</div>
            <div className="star-group" aria-label="rating star">
              {this.renderStar(curData.rating)}
            </div>
            <small className="rating-info">
              {curData.numOfRating} ratings by Aug, 2020
            </small>
          </div>
        </div>
      </div>
    );
  }
}

export default SaleItem;
