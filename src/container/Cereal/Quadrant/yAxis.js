import React, {
    Component
} from 'react';
import * as d3 from "d3";

export default class YAxis extends Component {
    componentDidMount() {
        this.renderYAxis()
    }
    componentDidUpdate() {
        this.renderYAxis()
    }
    renderYAxis() {
        const yProps = d3.axisLeft(this.props.yScale).tickSizeOuter(0)
        const axis = d3.select(this.axisElement).call(yProps)
        axis.selectAll('.tick text').attr('font-size', 16).attr('fill', '#E4493A')
        axis
            .selectAll('.tick line')
            .remove()

        axis.select('.domain').attr('stroke', '#DFCBB6')
    }

    render() {

        return (<g
            className='cereal-quadrant-yAxis'
            ref={
                el => {
                    this.axisElement = el;
                }
            }
            transform={this.props.transform}
        />
        )
    }
}