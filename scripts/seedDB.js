const mongoose = require('mongoose');
const ObjectID = require('mongodb').ObjectID;
const db = require('../models');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/madagascardb');

const postSeed = [
  {
    mood: 'Sad',
    post: 'I feel lonely.',
    date: new Date(Date.now()),
    sent: false,
  },
  {
    mood: 'Calm',
    post: 'I feel peaceful',
    date: new Date(Date.now()),
    sent: false,
  },
  {
    mood: 'Mad',
    post: 'I feel annoyed.',
    date: new Date(Date.now()),
    sent: false,
  },
  {
    mood: 'Scared',
    post: 'I feel helpless.',
    date: new Date(Date.now()),
    sent: false,
  },
  {
    mood: 'Happy',
    post: 'I feel energetic.',
    date: new Date(Date.now()),
<<<<<<< HEAD
    sent: false,
=======
    sent: true
>>>>>>> master
  },
  {
    mood: 'Strong',
    post: 'I feel confident.',
    date: new Date(Date.now()),
<<<<<<< HEAD
    sent: false,
=======
    sent: true
>>>>>>> master
  },
  {
    mood: 'Lonely',
    post: 'I feel alone.',
    date: new Date(Date.now()),
    sent: true,
<<<<<<< HEAD
    reply: '5ee19956e8f55c23a6f7eb2c'
=======
    reply: mongoose.Types.ObjectId('5ee27130a90b1edeed22fbd9')
>>>>>>> master
  }
];

db.Post.remove({})
  .then(() => db.Post.collection.insertMany(postSeed))
  .then((data) => {
    console.log(data.result.n + ' records inserted!');
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
