import React, { Component } from 'react'
import { Row, Col } from 'antd'

export default class ImagePlaceholder extends Component {
    render() {
        return (
            <Row gutter={[24, 16]} >
                <Col span={12}>
                    <svg>
                        <rect width="96px" height="126px" fill='#DFCBB6' />
                    </svg>

                </Col>
                <Col span={12}>
                    <svg>
                        <rect width="80px" height="18px" fill='#DFCBB6' />
                        <rect width="100px" height="12px" fill='#DFCBB6' transform="translate(0, 40)" />
                        <rect width="100px" height="12px" fill='#DFCBB6' transform="translate(0, 68)" />
                        <rect width="100px" height="12px" fill='#DFCBB6' transform="translate(0, 96)" />
                    </svg>
                </Col>
            </Row>
        )
    }
}