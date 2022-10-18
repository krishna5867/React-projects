import React from 'react'
import Signin from './Signin'
import { Container, Card, CardBody, CardHeader, CardText, CardTitle, Label, Input } from 'reactstrap'


const Signup = () => {
  return (
<div>
  <Container className='mt-3' style={{width: '28rem'}}>
    <Card className='mt-5'>
    <CardBody>
        <Label>Name</Label>
        <Input
        type='text'
        placeholder='Enter Your Full Name'
        />
      </CardBody>
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
        <button className='btn btn-success btn-lg col-12 mt-4'>SignUp</button>
      </CardBody>
    </Card>
  </Container>
</div>
  )
}

export default Signup
