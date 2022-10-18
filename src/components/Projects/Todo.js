// import from 'bootstrap';
import React, { useState } from 'react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
    Row,
    Col,
    Container,
    Button,
    Input,
  } from "reactstrap";

const Todo = () => {

    const[todo, setTodo]= useState();
    const[newtodo, setNewTodo]= useState([]);

    const addToDo=()=>{
        const newData = {todo: todo};
        setNewTodo([...newtodo, newData]);
        toast.success("Added");

        setTodo("")
        // console.log(setNewTodo);
    }
    const clearTodo=(index)=>{
      var newlist = newtodo;
      newlist.splice(index, 1);
      setNewTodo([...newlist])

    }
  return (
    
<Container className='text-center border border-bottom-secondary' style={{height: '400px'}}>
    <Row>
        <Col className='todoapp'>
        <h3 className='my-3'>Todo App React</h3>
<div className='d-flex container w-100% mx-auto'>
<Input className='my-3 mx-5' style={{width: '400px'}}
type='text'
placeholder='Add Your Task'
value={todo}
onChange={(e) => setTodo(e.target.value)}
/>
        <Button className='btn-warning btn-lg mt-2'style={{height: '50px'}} onClick={addToDo}> Add Todo</Button>
</div>
        </Col>
    </Row>

    {
    newtodo.map((value, index)=>{
        return(
            <>
        <ToastContainer
         position="top-left"
         autoClose={1000}
/>

            <div className='todo w-50 mt-4'>
            <div className='border-bottom border-warning w=100'>{value.todo}</div>
            <Button className='btn btn-warning' style={{width: '115px'}} onClick={()=>clearTodo(index)}> Clear </Button>
            </div>
            </>
        )
    })
}
</Container>

  )
}

export default Todo
