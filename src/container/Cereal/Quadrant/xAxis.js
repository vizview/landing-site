import React, {
    Component
} from 'react';
import * as d3 from "d3";

export default class xAxis extends Component {
    componentDidMount() {
        this.renderXAxis()
    }
    componentDidUpdate() {
        this.renderXAxis()
    }
    renderXAxis() {

    }

    render() {
        return (<g
            className='cereal-quadrant-xAxis'
            ref={
                el => {
                    this.axisElement = el;
                }
            }
            transform={
                this.props.translate
            }
        />
        )
    }
}