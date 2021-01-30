import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './products.model';

@Injectable()
export class ProductsService {
  products: Product[] = [];

  insertProduct(title: string, price: number) {
    const id = Math.random().toString();
    const newProduct = new Product(id, title, price);
    this.products.push(newProduct);
    return id;
  }

  getProducts() {
    return [...this.products];
  }

  getOneProduct(id: string) {
    const product = this.findProduct(id)[0];
    return {...product};
  }


  updateProduct(id: string, title: string, price: number) {
    const [product, index] = this.findProduct(id);
    const updatedProduct = {...product}
    if(title) {
      updatedProduct.title = title
    }
    if(price) {
      updatedProduct.price = price
    }

    this.products[index] = {...updatedProduct};
  }

  deleteProduct(id: string) {
    const index = this.findProduct(id)[1]
    this.products.splice(index,1)
  }

  private findProduct(id: string): [Product,number]{
    const productIndex = this.products.findIndex((prod) => prod.id == id)
    const product = this.products[productIndex]
    if(!product){
      throw new NotFoundException('Product not found');
    }
    return [product, productIndex];
  }

}
