import "./ShoppingItem.css";
import { useState } from "react"

function ShoppingItem ({item}) {

    const [buy, setBuy] = useState(false)


    return (

        <div className='grocery-item' id={item.id}>
            {
                buy ? (
                    <div>
                    {item.item} 
                    <br></br> 
                    {item.quantity}
                    {item.unit}
                    <br></br>
                    PURCHASED!!!
                    </div>
                ) : (
                    <>
                    {item.item} 
                    <br></br> 
                    {item.quantity}
                    &nbsp;
                    {item.unit}
                    <br></br>
                    <button className='buy-btn' onClick={() => setBuy(!buy)}>
                        Buy
                    </button>
                    <button className='remove-btn'>Remove</button>
                    </>
                )
            }
        {/* {item.item}  */}
        {/* <br></br>  */}
        {/* {item.quantity} */}
        {/* {item.unit} */}
        {/* <br></br> */}
        {/* <button onClick={() => setBuy(!buy)}> */}
            {/* { item.purchased ? 'Purchased' : 'Buy' } */}
        {/* </button> */}
        {/* <button>Remove</button> */}
        </div>
    )

}

export default ShoppingItem