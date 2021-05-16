import mongoose from 'mongoose';

mongoose.connect('mongodb://mongodb:27017/surl', { useNewUrlParser: true, useUnifiedTopology: true }).catch((e) => {
	console.error('Connection error', e.message);
});

// local: mongodb://127.0.0.1:27017

const db = mongoose.connection;

export default db;
