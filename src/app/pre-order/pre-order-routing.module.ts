import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PreOrderComponent } from "./pre-order/pre-order.component";

const routes: Routes = [
  {
    path: "",
    component: PreOrderComponent
  },
  {
    path: ":name",
    component: PreOrderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreOrderRoutingModule {}
