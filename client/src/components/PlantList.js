import React, { Component } from "react";
import axios from "axios";

export default class PlantList extends Component {
  
  constructor() {
    super();
    this.state = { 
      plants: []
    };
  }

  componentDidMount() {
    axios
    .get("http://localhost:3333/plants")
    .then(res => {
      this.setState({
        plants: res.data.plantsData
      });
    console.log(this.state.plants)
    })
    .catch(err => console.log("There is an error.", err))
  }


  render() {
    return (
      <main className="plant-list">
        {this.state?.plants?.map((plant) => (
          <div className="plant-card" key={plant.id}>
            <img className="plant-image" src={plant.img} alt={plant.name} />
            <div className="plant-details">
              <h2 className="plant-name">{plant.name}</h2>
              <p className="plant-scientific-name">{plant.scientificName}</p>
              <p>{plant.description}</p>
              <div className="plant-bottom-row">
                <p>${plant.price}</p>
                <p><span role="img" aria-label="sunshine">☀️</span> {plant.light}</p>
                <p><span role="img" aria-label="water">💦</span> {plant.watering}x/month</p>
              </div>
              <button
                className="plant-button"
                onClick={() => this.props.addToCart(plant)}
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </main>
    );
  }
}
