import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { OrderRoutingModule } from "./order-routing.module";
import { OrderComponent } from "./order/order.component";
import { MaterialModule } from "../material/material.module";
import { OrderModalComponent } from "./order-modal/order-modal.component";
import { OrderHeaderComponent } from "./order-header/order-header.component";

@NgModule({
  declarations: [OrderComponent, OrderModalComponent, OrderHeaderComponent],
  imports: [CommonModule, OrderRoutingModule, MaterialModule]
})
export class OrderModule {}
