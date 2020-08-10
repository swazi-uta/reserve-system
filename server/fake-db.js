const Product = require('./model/product');
class FakeDb {
	constructor() {
		this.products = [
			{
				name: 'Phone XL',
				price: 799,
				description: 'A large phone with one of the best screens',
				coverImage: './assets/img/phone-cover.jpg',
				heading1: 'hogehoge1',
				heading2: 'hogehoge2',
				heading3: 'hogehoge3',
				headtext1: 'hugahuga1',
				headtext2: 'hugahuga2',
				headtext3: 'hugahuga3'
			},
			{
				name: 'Phone Mini',
				price: 699,
				description: 'A great phone with one of the best cameras',
				coverImage: './assets/img/phone-cover.jpg',
				heading1: 'hogehoge1',
				heading2: 'hogehoge2',
				heading3: 'hogehoge3',
				headtext1: 'hugahuga1',
				headtext2: 'hugahuga2',
				headtext3: 'hugahuga3'
			},
			{
				name: 'Phone Standard',
				price: 299,
				description: '',
				coverImage: './assets/img/phone-cover.jpg',
				heading1: 'hogehoge1',
				heading2: 'hogehoge2',
				heading3: 'hogehoge3',
				headtext1: 'hugahuga1',
				headtext2: 'hugahuga2',
				headtext3: 'hugahuga3'
			},
			{
				name: 'Phone Special',
				price: 999,
				description: '',
				coverImage: './assets/img/phone-cover.jpg',
				heading1: 'hogehoge1',
				heading2: 'hogehoge2',
				heading3: 'hogehoge3',
				headtext1: 'hugahuga1',
				headtext2: 'hugahuga2',
				headtext3: 'hugahuga3'
			}
		]
	};

	async	initDb() {
		await this.cleanDb();
		this.pushProductsToDb();
	}

	async cleanDb() {
		await Product.deleteMany({})
	}

	pushProductsToDb() {
		this.products.forEach(
			(product) => {
				const newProduct = new Product(product);
				newProduct.save();
			}
		)
	}

	seeDb() {
		this.pushProductsToDb();
	 }

}

module.exports = FakeDb