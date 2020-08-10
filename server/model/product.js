const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;
 
const ProductSchema = new Schema({
//   author: ObjectId,
	name: { type: String, required: true, max:[60, '最大60文字までです。'] },
	price: Number,
	description: String,
	coverImage: String,
	heading1: String,
	heading2: String,
	heading3: String,
	headtext1: String,
	headtext2: String,
	headtext3: String
});

module.exports = mongoose.model('Product', ProductSchema);