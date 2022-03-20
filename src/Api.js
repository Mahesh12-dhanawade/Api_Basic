import React, { Component } from "react";

export default class Api extends Component {
    constructor() {
        super();
    this.state = {
      product: [],
    
     
    };
  }
  componentDidMount() {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        this.setState({
          product: result,
        });
      });
  }

  
  render() {
    
    return (
       
      <div>
        
        <h1>Fetching data</h1>
        
        {this.state.product.map((item, i) => {
          return (
            <div>
              <h1>id:{item.id}</h1>
              <h1>Title : {item.title}</h1>
              <h1>Price : {item.price}
                  category: {item.category}
              </h1>
              
              <h1>Category :{item.category}</h1>
              <img src={item.image} alt="Image not found" width="200px" />
              <h2>{item.rating.rate}</h2>
              
            </div>
          );
        })}
      </div>
    );
  }
}
