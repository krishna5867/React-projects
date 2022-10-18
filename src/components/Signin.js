import React from 'react'
import { Container, Card, CardBody, Label, Input } from 'reactstrap'

const Signin = () => {

  return (
    <div>
    <Container className='mt-3' style={{width: '28rem'}}>
      <Card className='mt-5'>
        <CardBody>
          <Label>Email</Label>
          <Input
          type='text'
          placeholder='Enter Your Email'
          />
        </CardBody>
        <CardBody>
          <Label>Password</Label>
          <Input
          type='password'
          placeholder='Enter Your Password'
          />
          <button className='btn btn-success btn-lg col-12 mt-4'>SignIn</button>
        </CardBody>
      </Card>
    </Container>
  </div>
  )

}

export default Signin
