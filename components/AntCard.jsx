import { Card, Row, Col, Avatar } from 'antd'
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
          <div className="mb-4">
            <span className="p-1 text-6xl text-blue-900 dark:text-blue-200 sm:p-4">Ad Spaces</span>
          </div>
          <Card title="">
            <Card.Grid className="bg-[#C0FFEE] text-center">
              <Avatar
                size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                src="https://images.pexels.com/photos/2422404/pexels-photo-2422404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <br></br>
              Billboards
            </Card.Grid>
            <Card.Grid className="text-center">
              <Avatar
                size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                src="https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <br></br>
              Digital Screens
            </Card.Grid>
            <Card.Grid className="text-center">
              <Avatar
                size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                src="https://scontent.fcai16-1.fna.fbcdn.net/v/t39.30808-6/288381481_1431225163990971_3641542336354012229_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=PDVG2f8OjnMAX93oGdo&_nc_ht=scontent.fcai16-1.fna&oh=00_AT9Q_e1gST6qU7Nryb1kktB9ZITvbTj27JNwGkFCDoALCQ&oe=630C1371"
              />
              <br></br>
              Transit Media
            </Card.Grid>

            <Card.Grid className="text-center">
              <Avatar
                size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                src="https://images.pexels.com/photos/258420/pexels-photo-258420.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <br></br>
              Metro{' '}
            </Card.Grid>
            <Card.Grid className="text-center">
              <Avatar
                size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                src="https://images.pexels.com/photos/1661496/pexels-photo-1661496.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <br></br>
              Street
            </Card.Grid>
            <Card.Grid className="text-center">
              <Avatar
                size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                src="https://images.pexels.com/photos/6253/city-street-typography-design.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <br></br>
              Place Based Media
            </Card.Grid>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default AntCard
