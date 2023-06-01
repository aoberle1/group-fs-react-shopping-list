import { useState } from "react";
import axios from "axios";

function PostFood(props) {
    
    let [newFoodName, setNewFoodName] = useState('');
    let [newFoodQuantity, setNewFoodQuantity] = useState('');
    let [newFoodUnit, setNewFoodUnit] = useState('');

    const addFood = () => {
        axios.post('/groceries', { name: newFoodName, quantity: newFoodQuantity, unit: newFoodUnit })
        .then(response => {
          // clear inputs
          setNewFoodName('');
          setNewFoodQuantity('');
          setNewFoodUnit('');
  
          props.getGroceryList();
        })
        .catch(err => {
          alert('Balls! Error Adding Item to Cart!');
          console.log(err);
        })
    };  

    
    const handleSubmit = (event) => {
        event.preventDefault();
        if (newFoodName, newFoodQuantity, newFoodUnit) {
          addFood();
        }
        else {
          alert('Missing input fields!');
        }
      }
    
    return(
        <form onSubmit={handleSubmit}>
        <label>Food Item: </label>
        <input
          type="text"
          placeholder="Food Item"
          value={newFoodName}
          onChange={(evt) => setNewFoodName(evt.target.value)}
        />
        <label>Quantity: </label>
        <input
          type="text"
          placeholder="Quantity"
          value={newFoodQuantity}
          onChange={(evt) => setNewFoodQuantity(evt.target.value)}
        />
        <label>Unit: </label>
        <input
          type="text"
          placeholder="Unit"
          value={newFoodUnit}
          onChange={(evt) => setNewFoodUnit(evt.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    );
}

export default PostFood;