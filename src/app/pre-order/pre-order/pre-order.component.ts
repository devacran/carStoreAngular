import { Component, OnInit } from "@angular/core";
import { Params, ActivatedRoute } from "@angular/router";
import { ProductsService } from "../../core/services/products.service";
import { Vehicle } from "../../core/models/vehicle.model";
@Component({
  selector: "app-pre-order",
  templateUrl: "./pre-order.component.html",
  styleUrls: ["./pre-order.component.styl"]
})
export class PreOrderComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private products: ProductsService
  ) {}
  data: Vehicle[];
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: Params) => {
      this.data = this.products.getProducts(params.params.name);
    });
  }
}
