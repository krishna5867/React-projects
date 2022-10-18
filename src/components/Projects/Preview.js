import React, { useState } from "react";
import {
  Row,
  Col,
  Container,
  Card,
  CardBody,
  Button,
  Label,
  Input,
  Form,
} from "reactstrap";

const Preview = () => {
  const [name, setName] = useState();
  const [mob, setMob] = useState();
  const [item, setItem] = useState([]);

  const Submit = (e) => {
    e.preventDefault();
    const newData = { name: name, mob: mob };
    setItem([...item, newData]);
    setMob("");
    setName("");
  };

  const clear = (id) => {
    // let remove = item.filter((elm)=>{
    //   return elm.id != id;
    // })
    setItem([]);
    console.log(setItem);
  };
  return (
    <div  style={{height: '370px'}}>
      <Col>
        <div>
          <Container className="mt-3" style={{ width: "28rem" }}>
            <h3 className="text-center">See What You Type</h3>
            <Form onSubmit={Submit}>
              <Input
                type="text"
                value={name}
                placeholder="Name"
                className="my-4"
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                type="number"
                value={mob}
                placeholder="Mobile Number"
                onChange={(e) => setMob(e.target.value)}
              />
              <button
                type="submit"
                className="btn btn-success btn-lg col-12 mt-4"
              >
                Submit
              </button>
            </Form>
            <div className="d-flex justify-content-between text-center mt-3">
              <h4>Preview-</h4>
              <button className="clearprevbtn btn btn-success" onClick={clear}>
                Clear All Previw
              </button>
            </div>
          </Container>

          {item.map((value) => {
            return (
              <>
                <Container className="mt-3" style={{ width: "28rem" }}>
                  <h6>
                    Name: <b> {value.name} </b>
                    <br />
                    Mobile: <b> {value.mob}</b>
                  </h6>
                </Container>
              </>
            );
          })}
        </div>
      </Col>
    </div>
  );
};

export default Preview;
