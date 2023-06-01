import { useState } from "react";
import ShoppingItem from "../ShoppingItem/ShoppingItem";

function ShoppingList (props) {
    console.log(props)

    const [buy, setBuy] = useState(false)

    return (
        <div id='shopping-list'>
            <button>Reset</button>
            <button>Clear</button>
            {props.groceryList.map(item => (
                    <ShoppingItem key={item.item} item={item} />
            )
            )}
        </div>
    )
}

export default ShoppingList;