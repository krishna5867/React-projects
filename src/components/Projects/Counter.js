import React, { useState } from "react";

import {
  Row,
  Col,
  Button,
} from "reactstrap";

const Counter = () => {
  const [count, setCount] = useState(0);



  return (
    <div>
      <Row className="" style={{ height: "340px" }}>
        <Col className="text-center">
          <h3 className="mt-3">Increament/Decreament</h3>
          <div className="Container fluid">
            <Button
              className="px-4 bg-primary"
              onClick={() => setCount(count - 1)}
            >
              -
            </Button>
            <span className="px-5">{count}</span>
            <Button
              className="px-4 bg-primary"
              onClick={() => setCount(count + 1)}
            >
              +
            </Button>
            <div>
              <Button className="btn-success" onClick={() => setCount(0)}>
                Reset
              </Button>
            </div>
          </div>
        </Col>

        {/* ------------------------2nd Project------------------------- */}

      </Row>
      </div>
  )
};
 export default Counter;