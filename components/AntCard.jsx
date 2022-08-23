import { Card, Row, Col, Avatar } from 'antd'
import React from 'react'
import 'antd/dist/antd.css'
import { AntDesignOutlined } from '@ant-design/icons'

const AntCard = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide)
  }

  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <div className="mb-4">
            <span className="p-1 text-6xl text-blue-900 dark:text-blue-200 sm:p-4">Ad Spaces</span>
          </div>
          <Card title="">
            <Card.Grid className="bg-[#C0FFEE] text-center">
              <Avatar
                size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                icon={<AntDesignOutlined />}
              />
              <br></br>
              Billboards
            </Card.Grid>
            <Card.Grid className="text-center">Digital Screens</Card.Grid>
            <Card.Grid className="text-center">Transit Media</Card.Grid>

            <Card.Grid className="text-center">National Parks</Card.Grid>
            <Card.Grid className="text-center">Restaurants</Card.Grid>
            <Card.Grid className="text-center">Power Stations and Substations</Card.Grid>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default AntCard
