import { Injectable } from "@angular/core";
import { Vehicle } from "../models/vehicle.model";
import { products, models } from "./api";

@Injectable({
  providedIn: "root"
})
export class ProductsService {
  constructor() {}
  productList: Vehicle[] = products;

  models: any = models;

  getProduct(id: string): Vehicle {
    return this.productList.filter((item: Vehicle) => item.id === id).shift();
  }
  getProducts(name: string): Vehicle[] {
    return this.productList.filter((item: Vehicle) => item.name === name);
  }
  getAllProducts(): Vehicle[] {
    return this.productList;
  }
  getAllModels(): Vehicle[] {
    return this.models;
  }
  //necesitas crear un api que contenga todos los modelos y versiones y otra que solo tenga los modelos basicos
}
