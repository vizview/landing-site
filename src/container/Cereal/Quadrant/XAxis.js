import React, {
    Component
} from 'react';
import * as d3 from "d3";

export default class XAxis extends Component {
    componentDidMount() {
        this.renderXAxis()
    }
    componentDidUpdate() {
        this.renderXAxis()
    }
    renderXAxis() {
        const xProps = d3.axisBottom(this.props.xScale).tickSizeOuter(0)
        const axis = d3.select(this.axisElement).call(xProps)
        axis.selectAll('.tick text').attr('font-size', 16).attr('fill', '#E4493A')
        axis
            .selectAll('.tick line')
            .remove()

        axis.select('.domain').attr('stroke', '#DFCBB6')
    }

    render() {

        return (
            <g
                className='cereal-quadrant-xAxis'
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
