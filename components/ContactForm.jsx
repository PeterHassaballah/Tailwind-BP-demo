import React, { Component } from 'react'
import { Row, Col, Button, message, Form, Input } from 'antd'
import { UserOutlined, MailOutlined } from '@ant-design/icons'

import emailjs from '@emailjs/browser'
const { TextArea } = Input

const showSuccess = () => {
  // TODO: Show a success message or navigate to a success page.
  console.log(`form submitted successfully`)
  message.success('Thanks for contacting us, We will get back to you soon')
}

const showError = (error) => {
  // TODO: Show an error message to the user
  console.log(`There was an error submitting the form`)
  message.error('Service Busy, please try contacting us via any of the methods above')
  console.log(error)
}
class ContactForm extends Component {
  formRef = React.createRef()
  constructor(props) {
    super(props)
    this.state = {
      message: 'Please enter your message',
      name: 'Please enter your name',
      email: 'Please enter your email',
      phone: 0,
    }
  }

  handleSubmit = (values) => {
    console.log('values', values)

    emailjs
      .send('service_rarfxes', 'template_a70j0se', values, 'WAxvEYqKJuSTgvXPh')
      .then(() => showSuccess())
      .catch((error) => showError(error))
    this.formRef.current.resetFields()
  }

  render() {
    return (
      <div>
        <Row justify="space-around">
          <Col xs={22} sm={18} md={16} lg={8}>
            {/*
                    This defines how your form is setup for the Netlify bots.
                    Users will not see or interact with this form.
                */}
            <h4>
              Our 24/7 operational Control Center is always ready to dispatch a QRF if needed.
              {this.props.text}
            </h4>

            <Form
              name="cf"
              method="post"
              onFinish={this.handleSubmit}
              layout="vertical"
              id="myForm"
              ref={this.formRef}
            >
              {/* This is the hidden field that the netlify-honeypot uses. */}
              {/* <Form.Item
                                label="Don't fill this out"
                                className={`hidden`}
                                style={{ display: `none` }}
                                name="bot-field"
                            >
                                <input type="hidden" name="form-name" value="contact" />
                            </Form.Item> */}

              <Form.Item
                label="Name"
                rules={[{ required: true, message: this.state.name }]}
                name="name"
              >
                <Input
                  placeholder="Name"
                  prefix={<UserOutlined className="site-form-item-icon" />}
                />
              </Form.Item>

              <Form.Item
                label="Email"
                rules={[{ required: true, type: `email`, message: this.state.email }]}
                name="email"
              >
                <Input
                  placeholder="Your Email"
                  prefix={<MailOutlined className="site-form-item-icon" />}
                />
              </Form.Item>
              <Form.Item
                name="phone"
                label="Phone Number"
                rules={[
                  {
                    required: true,
                    message: 'Please input your phone number!',
                  },
                ]}
              >
                <Input
                  style={{
                    width: '100%',
                  }}
                />
              </Form.Item>

              <Form.Item
                label="Message"
                rules={[{ required: true, message: this.state.message }]}
                name="message"
              >
                <TextArea placeholder="Your Message" rows={6} />
              </Form.Item>

              <Form.Item>
                <Button type="danger" htmlType="submit" disabled={false}>
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
    )
  }
}
export default ContactForm
