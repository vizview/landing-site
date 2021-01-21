import React, { Component } from 'react'
import { Row, Col } from 'antd'

export default class DisplayShelf extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="dispalyshelf" style={{
                marginBottom: 20, paddingBottom: 14, border: '#DFCBB6', borderStyle: 'solid', borderWidth: '1px', borderTop: 'none', borderLeft: 'none', borderRight: 'none'
            }
            }>
                <Row gutter={[16, 16]}>
                    <Col span={12}>
                        <img src={require(`../Data/img/${this.props.data.img}.png`)} width={96} span={12} />
                    </Col>

                    <Col span={12}>
                        <div>
                            <p style={{ fontSize: 14, fontWeight: 700, textAlign: 'left', marginBottom: 24 }}>{this.props.data.display_name}</p>
                            <p style={{ fontSize: 12 }}>Brand: </p>
                            <p style={{ fontSize: 12 }}>Calories: {this.props.data.calories} kcal</p>
                            <p style={{ fontSize: 12 }}>Protein: {this.props.data.protein} g</p>
                            <p style={{ fontSize: 12 }}>Fiber: {this.props.data.fiber} g</p>
                            <p style={{ fontSize: 12 }}>Sugars: {this.props.data.sugars} g</p>
                        </div>
                    </Col>




                </Row>
            </div >
        )
    }
}