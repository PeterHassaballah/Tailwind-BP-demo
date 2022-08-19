import { Card, Row, Col } from 'antd'
import React from 'react'
import 'antd/dist/antd.css'

const AntCard = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide)
  }

  return (
    <>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <h1>Ad Spaces</h1>

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
    </>
  )
}

export default AntCard
