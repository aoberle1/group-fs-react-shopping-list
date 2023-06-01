import "./ShoppingItem.css";
import axios from 'axios';

function ShoppingItem (props) {
 let item = props.item;

    const setBuy = () =>{

        axios.put(`/groceries/${item.id}`, {purchased: true})
            .then(response =>{
                props.getGroceryList();
            }).catch(error=>{
                console.log('problems',error);
            })
    }

    const removeBtn = () =>{
        axios.delete(`/groceries/${item.id}`)
            .then(response =>{
                props.getGroceryList();
            }).catch(error=>{
                console.log('removeBtn PROBLEMS', error);
            })
    }


    return (

        <div className='grocery-item' id={item.id}>
            {
                item.purchased ? (
                    <div>
                    {item.item} 
                    <br></br> 
                    {item.quantity}
                    &nbsp;
                    {item.unit}
                    <br></br>
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
                    <button className='buy-btn' onClick={() => setBuy()}>
                        Buy
                    </button>
                    <button className='remove-btn'onClick={()=> removeBtn()}>Remove</button>
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