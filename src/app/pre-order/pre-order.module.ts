import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PreOrderRoutingModule } from "./pre-order-routing.module";
import { VehicleCardComponent } from "./vehicle-card/vehicle-card.component";
import { PreOrderComponent } from "./pre-order/pre-order.component";
import { MaterialModule } from "../material/material.module";

@NgModule({
  declarations: [VehicleCardComponent, PreOrderComponent],
  imports: [CommonModule, PreOrderRoutingModule, MaterialModule]
})
export class PreOrderModule {}
