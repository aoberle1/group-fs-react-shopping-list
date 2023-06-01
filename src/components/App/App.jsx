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

    return (
        <div className="App">
            <Header />
            <main>
                <p>Under Construction...</p>
                <PostFood getGroceryList={getGroceryList} />
                <ShoppingList groceryList={groceryList} getGroceryList={getGroceryList}/>
            </main>
        </div>
    );
}

export default App;
