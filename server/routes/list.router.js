const express = require('express');
const router = express.Router();


const pool = require('../modules/pool');

//GET router to get our shopping cart
router.get('/', (req, res)=>{
    let queryText = 'SELECT * FROM groceries';
    pool.query(queryText)
        .then(result => {
            res.send(result.rows);
        })
        .catch(error =>{
            console.log('PROBLEMS IN THE GET=>', error);
            res.sendStatus(500);
        })
})

//POST router to add items to our shopping cart
router.post('/', (req,res)=>{
    const newItem = req.body;
    console.log('new item on our grocery list:', newItem);
    let queryText = `INSERT INTO groceries ("item", "quantity", "unit")
                     VALUES($1, $2, $3);`;
    const values = [newItem.item, newItem.quantity, newItem.unit];
    pool.query(queryText, values)
        .then(result=>{
            res.sendStatus(201);
        })
        .catch(error=>{
            console.log('ERROR IN OUR POST =>', error);
            res.sendStatus(500);
        })
})

//PUT router to change the status from not purchased to purchased! 
router.put('/:id', (req,res)=>{
    let idToUpdate = req.params.id;
    console.log('just checking our ID to Update:', idToUpdate);
    let queryText = `UPDATE groceries SET "purchased" = true WHERE "id" = $1`;

    pool.query(queryText, [idToUpdate])
        .then(result =>{
            res.sendStatus(200);
        }).catch(error =>{
            res.sendStatus(500);
        })
});

//DELETE router to remove ONE item from the shopping list
router.delete('/:id', (req, res)=>{
    let idToDelete = req.params.id;
    console.log('checking ID to delete:', idToDelete);
    let queryText = 'DELETE FROM groceries WHERE "id"=$1';

    pool.query(queryText, [idToDelete])
        .then(result =>{
            console.log('task deleted');
            res.sendStatus(200);
        }).catch(error=>{
            console.log('issues in our DELETE router =>', error);
            res.sendStatus(500);
        })
})

//DELETE all table
router.delete('/', (req,res) =>{
    let queryText = 'DELETE FROM "groceries"'
    pool.query(queryText)
    .then(result =>{
        console.log('table deleted');
        res.sendStatus(200);
    }).catch(error =>{
        console.log('error in delete all router', error)
        res.sendStatus(500)
    })
})

//PUT to update false
router.put('/', (req,res)=>{

    let queryText = `UPDATE groceries SET "purchased" = false `;
    pool.query(queryText)
    .then(result =>{
        res.sendStatus(200);
    }).catch(error=>{
        res.sendStatus(500);
    })
    });


module.exports = router;