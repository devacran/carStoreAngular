import { Component, OnInit } from "@angular/core";
import { Params, ActivatedRoute } from "@angular/router";
import { ProductsService } from "../../core/services/products.service";
@Component({
  selector: "app-order",
  templateUrl: "./order.component.html",
  styleUrls: ["./order.component.styl"]
})
export class OrderComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private products: ProductsService
  ) {}
  data: any;
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: Params) => {
      console.log(params.params.id);
      this.data = this.products.getProduct(params.params.id);
    });
  }
}
