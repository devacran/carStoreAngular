import { Component, OnInit } from "@angular/core";
import { ProductsService } from "../../core/services/products.service";
import { Vehicle } from "../../core/models/vehicle.model";
@Component({
  selector: "app-models-strip",
  templateUrl: "./models-strip.component.html",
  styleUrls: ["./models-strip.component.styl"]
})
export class ModelsStripComponent implements OnInit {
  constructor(private products: ProductsService) {}

  data: Vehicle[];
  ngOnInit(): void {
    this.data = this.products.getAllModels();
  }
}
