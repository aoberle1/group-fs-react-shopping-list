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
        </div>
      ))}
    </div>
  );
}

export default ShoppingList;
