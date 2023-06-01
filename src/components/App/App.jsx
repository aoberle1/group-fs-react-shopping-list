import React, {useState, useEffect} from 'react';

import Header from '../Header/Header.jsx'
import './App.css';
import axios from 'axios';
import ShoppingList from '../ShoppingList/ShoppingList';

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

    return (
        <div className="App">
            <Header />
            <main>
                <p>Under Construction...</p>
                <ShoppingList groceryList={groceryList}/>
            </main>
        </div>
    );
}

export default App;
