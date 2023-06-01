import "./ShoppingList.css";

function ShoppingList(props) {
  console.log(props);

  return (
    <div id="shopping-list">
      <button>Reset</button>
      <button>Clear</button>
      {props.groceryList.map((item) => (
        <div className="grocery-item" id={item.id}>
          {item.item} <br></br> {item.quantity}&nbsp;{item.unit}
          <br></br>
          <button className="buy-btn">Buy</button>
          <button className="remove-btn">Remove</button>
import { useState } from "react";
import ShoppingItem from "../ShoppingItem/ShoppingItem";
import ResetBtn from "../ResetBtn/ResetBtn";

function ShoppingList (props) {
    console.log(props)

    const [buy, setBuy] = useState(false)

    return (
        <div id='shopping-list'>
            <ResetBtn groceryList={props.groceryList}/>
            {props.groceryList.map(item => (
                    <ShoppingItem key={item.item} item={item} />
            )
            )}
        </div>
      ))}
    </div>
  );
}

export default ShoppingList;
