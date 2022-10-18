import React, { useState, useEffect } from "react";
import arr from "./Array";

const CartItems = () => {
  const [data, setData] = useState(arr);

const Addprice=()=>{
  let amount = 0;
  const[price, setPrice]= useState(price);
  const newPrice = amount + price;
  setPrice(newPrice);
  console.log(setPrice);
}


  const filterMen = (elm) => {
    const item = arr.filter((currElm) => {
      return currElm.category === elm;
    });
    setData(item);
  };
  const filterWomen = (elm) => {
    const item = arr.filter((currElm) => {
      return currElm.category === elm;
    });
    setData(item);
  };
  const filterBoy = (elm) => {
    const item = arr.filter((currElm) => {
      return currElm.category === elm;
    });
    setData(item);
  };
  const filterGirl = (elm) => {
    const item = arr.filter((currElm) => {
      return currElm.category === elm;
    });
    setData(item);
  };

  return (
    <>
      <div className=" mx-2">
        <div className="row mt-5">
        <div className="col-md-2 sticky-sidebar">
            <h4>Categories</h4>
            <button
              className="btn btn-success w-100 mt-2"
              onClick={() => setData(arr)}
            >
              All
            </button>
            <button
              className="btn btn-success w-100 mt-2"
              onClick={() => filterMen("men's clothing")}
            >
              Men's clothing
            </button>
            <button
              className="btn btn-success w-100 mt-2"
              onClick={() => filterBoy("women's clothing")}
            >
              Women's clothing
            </button>
            <button
              className="btn btn-success w-100 mt-2"
              onClick={() => filterWomen("jewelery")}
            >
              Jewelery
            </button>

            <button
              className="btn btn-success w-100 mt-2"
              onClick={() => filterGirl("electronics")}
            >
              Electronics
            </button>
          </div>


          <div className="col-md-9">
            <div className="row">
              <div className="col-md-4">
                {data.map((value) => {
                  return (
                    <>
                      <div
                        className="maincard card mx-2 mb-5"
                        style={{ width: "18rem" }}
                      >
                        <img src={value.image} class="card-img-top" alt="img" />
                        <div className="card-body">
                          <h5 className="card-title">{value.title}</h5>
                          <p>Rs.{value.price}/-</p>
                          <p className="card-text">{value.description}</p>
                          <a href="#" class="btn mx-3 btn-success" onClick={()=>alert(value.price)}>
                            Buy Now
                          </a>
                          <a href="#" class="btn w-20 mx-3  btn-success">
                            Add Cart
                          </a>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItems;
