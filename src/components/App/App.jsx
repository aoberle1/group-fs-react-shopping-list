<<<<<<< HEAD
import React, { useState } from 'react';

import Header from '../Header/Header.jsx'
import './App.css';
import PostFood from '../PostFood/PostFood.jsx';


function App() {
    const [itemInput, setItemInput] = useState('')
    const [item, setItem] = useState('')
    const [quantityInput, setQuantityInput] = useState('')
    const [quantity, setQuantity] = useState('')
    const [unitInput, setUnitInput] = useState('')
    const [unit, setUnit] = useState('') 

    const handleItemInputChange = (event) => {
        console.log('in handle item input change')
        setItemInput(event.target.value)

    }
    const handleQuantityInputChange = (event) => {
        console.log('in handle quantity input change')
        setQuantityInput(event.target.value)

    }
    const handleUnitInputChange = (event) => {
        console.log('in handle unit input change')
        setUnitInput(event.target.value)

    }
    const handleLockedChange =() => {
        console.log('in handle submit')
        setItem(itemInput)
       // ItemInput('') - clear input
       setQuantity(quantityInput)
       setUnit(unitInput)
    }

    
=======
import React, {useState, useEffect} from 'react';

import Header from '../Header/Header.jsx'
import './App.css';
import axios from 'axios';
import ShoppingList from '../ShoppingList/ShoppingList.jsx';
import PostFood from '../PostFood/PostFood.jsx';

function App() {

    const [groceryList, setGroceryList] = useState([]);

    const getGroceryList = () => {
        axios.get('/groceries').then(response => {
            setGroceryList(response.data);
        }).catch(error => {
            console.log('error is:', error)
            alert('Error with GET request')
        })
    }

    useEffect(() => {
        getGroceryList();
      }, []);

>>>>>>> 9448d8f5b26f6b8c9ca48933e9d1e89f19f925c0
    return (
        <div className="App">
            <Header />
            
            
            <main>
<<<<<<< HEAD
             <PostFood/>
=======
                <p>Under Construction...</p>
                <PostFood getGroceryList={getGroceryList} />
                <ShoppingList groceryList={groceryList}/>
>>>>>>> 9448d8f5b26f6b8c9ca48933e9d1e89f19f925c0
            </main>
        </div>
    );
}

export default App;
