import "./ShoppingList.css";
import { useState } from "react";
import ShoppingItem from "../ShoppingItem/ShoppingItem";
import ResetBtn from "../ResetBtn/ResetBtn";

function ShoppingList (props) {
    console.log(props);

    return (
        <>
        <ResetBtn getGroceryList={props.getGroceryList}/>
        <br></br>
        <div id='shopping-list'>
            {props.groceryList.map(item => (
                    <ShoppingItem key={item.item} item={item} getGroceryList={props.getGroceryList} />
            )
            )}
        </div>
        </>
    )
}

export default ShoppingList;