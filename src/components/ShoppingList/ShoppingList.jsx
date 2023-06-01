import { useState } from "react";
import ResetBtn from "../ResetBtn/ResetBtn";

function ShoppingList (props) {
    console.log(props)

    const [buy, setBuy] = useState(false)

    return (
        <>
        <ResetBtn groceryList={props.groceryList}/>
        <div id='shopping-list'>
            
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
        </>
    )
}

export default ShoppingList;