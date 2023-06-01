import axios from 'axios';
function ResetBtn({getGroceryList}){

    const resetButton = (event) =>{
        event.preventDefault();
        axios.put('/groceries')
            .then(response => {
                getGroceryList();
            }).catch(error =>{
                console.log('Problems with the resetButton =>', error);
            })
    }

    const clearButton = (event) =>{
        event.preventDefault();
        axios.delete('/groceries')
            .then(response =>{
                getGroceryList();
            }).catch(error =>{
                console.log('Issues in our clearButton =>', error);
            })
    }




    return(
        <>
            <button onClick = {resetButton}>Reset</button>
            <button onClick = {clearButton}>Clear</button>
        </>
    )
}

export default ResetBtn;