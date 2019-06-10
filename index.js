const mongoose = require('mongoose');
const dishes = require('./models/dishes');

const url = 'mongodb://localhost:27017/conFusion';
const connect = mongoose.connect(url)

connect.then((db)=> {
    console.log('connceted correctly to server');
    dishes.create({
        name: 'dahi wada',
        description: 'very tasty'
    }).then((dish)=> {
        console.log(dish, 'dish');
        return dishes.findByIdAndUpdate(dish._id, {
            $set: { description: 'Updated test'}
        },{ 
            new: true 
        })
        .exec();
    }).then((dish)=> {
        console.log(dish, 'dish after update');
        dish.comments.push({
            rating: 5,
            comment: 'I\'m getting a sinking feeling!',
            author: 'Leonardo di Carpaccio'
        });

        return dish.save();
      // return mongoose.connection.close()
    }).then((dish)=> {
        console.log(dish, 'dish with comment')
        return mongoose.connection.close()
    }).catch((error)=> {
        console.log(error, 'error')
    })
})