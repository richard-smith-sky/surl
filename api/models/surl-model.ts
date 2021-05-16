import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Surl = new Schema({
	fullUrl: { type: String, required: true },
	shortUrl: { type: String, required: true }
});

export default mongoose.model('surl', Surl);
