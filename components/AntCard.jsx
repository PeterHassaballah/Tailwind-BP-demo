import { Card, Row, Col } from 'antd'
import React from 'react'
import 'antd/dist/antd.css'

const AntCard = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide)
  }

  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <span className="p-1 text-6xl text-blue-900 dark:text-blue-200 sm:p-4">Ad Spaces</span>

          <Card title="Areas of Expertise">
            <Card.Grid className="gso">Billboards</Card.Grid>
            <Card.Grid className="gst">Digital Screens</Card.Grid>
            <Card.Grid className="gso">Transit Media</Card.Grid>

            <Card.Grid className="gst">National Parks</Card.Grid>
            <Card.Grid className="gso">Restaurants</Card.Grid>
            <Card.Grid className="gst">Power Stations and Substations</Card.Grid>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default AntCard
