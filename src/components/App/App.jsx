import React, { useState } from 'react';

import Header from '../Header/Header.jsx'
import './App.css';


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

    
    return (
        <div className="App">
            <Header />
            
            
            <main>

            </main>
        </div>
    );
}

export default App;
