export class Product {
	public name: string;
	public price: number;
	public category: string;

	constructor(data: { name: string; price: number; category: string }) {
		this.name = data.name;
		this.price = data.price;
		this.category = data.category;
	}
}
