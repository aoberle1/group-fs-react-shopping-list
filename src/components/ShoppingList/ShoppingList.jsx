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
    )
}

export default ShoppingList;