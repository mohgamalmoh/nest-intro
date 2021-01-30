import { Controller, Post, Body, Get, Param, Patch, Delete } from "@nestjs/common";

import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController{
    constructor(private readonly productsService: ProductsService){}
    @Post()
    addProduct(
        @Body('title') prodTitle: string,
        @Body('price') prodPrice: number
        ){
        const newId = this.productsService.insertProduct(prodTitle, prodPrice);
        return { id: newId};
    }

    @Get()
    getAllProducts(){
        return this.productsService.getProducts();
    }

    @Get(':id')
    getProduct(@Param('id') id: string){
        return this.productsService.getOneProduct(id);
    }

    @Patch(':id')
    updateProduct(@Param('id') id: string,
    @Body('title') prodTitle: string,
    @Body('price') prodPrice: number
        ){
        this.productsService.updateProduct(id,prodTitle,prodPrice);
        return true;
    }

    @Delete(':id')
    deleteProduct(@Param('id') id: string){
         this.productsService.deleteProduct(id);
         return true
    }
}