import React from "react";
import "./Sale.css";
import SaleData from "./SaleData.json";
import SaleItem from "./SaleItem.js";
const cerealsArr = Object.keys(SaleData);

class Sale extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curCereal: "honey_nut_cheerios",
    };
  }

  renderOtherImages(curCereal) {
    let otherCereals = cerealsArr.filter((el) => el !== curCereal);
    var imgArr = [];
    for (let i = 0; i < otherCereals.length; i++) {
      imgArr.push(
        <div className="other-cereal-wrapper" key={i}>
          <div className="rank-label">{SaleData[otherCereals[i]].rank}</div>
          <input
            className="other-cereal"
            key={otherCereals[i]}
            type="image"
            alt={otherCereals[i]}
            src={require(`../Data/img/${otherCereals[i]}.png`)}
            onClick={(e) => this.selectCereal(otherCereals[i], e)}
          />
        </div>
      );
    }
    return imgArr;
  }

  selectCereal(target, e) {
    this.setState({ curCereal: target });
  }

  render() {
    this.renderOtherImages(this.state.curCereal);
    let cur = this.state.curCereal;
    return (
      <section className='cereal-section'>
        <h2>Best Selling Cereals</h2>
        <div className="container">
          <SaleItem name={cur}></SaleItem>
          <div className="row justify-content-between other-cereals-container flex-nowrap">
            {this.renderOtherImages(this.state.curCereal)}
          </div>
        </div>
      </section>
    );
  }
}

export default Sale;
