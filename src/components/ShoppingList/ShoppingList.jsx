import { useState } from "react";

function ShoppingList (props) {
    console.log(props)

    const [buy, setBuy] = useState(false)

    return (
        <div id='shopping-list'>
            <button>Reset</button>
            <button>Clear</button>
            {props.groceryList.map(item => (
                <div className='grocery-item' id={item.id}>
                    {item.item} 
                    <br></br> 
                    {item.quantity}
                    {item.unit}
                    <br></br>
                    <button onClick={() => setBuy(!buy)}>
                        { buy ? 'Purchased' : 'Buy' }
                    </button>
                    <button>Remove</button></div>
            )
            )}
        </div>
    )
}

export default ShoppingList;