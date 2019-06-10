const mongoose = require('mongoose');
const dishes = require('./models/dishes');

const url = 'mongodb://localhost:27017/conFusion';
const connect = mongoose.connect(url)

connect.then((db)=> {
    console.log('connceted correctly to server');
    var newDish = dishes({
        name: 'Pani puri',
        description: 'very tasty'
    })

    newDish.save().then((dish)=> {
        console.log(dish, 'dish');
      return  dishes.find({}).exec();
    }).then((dishes)=> {
        console.log(dishes, 'all dishes');
       return mongoose.connection.close()
    }).catch((error)=> {
        console.log(error, 'error')
    })
})