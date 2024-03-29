import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LayoutComponent } from "./layout/layout.component";

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () => import("./home/home.module").then(m => m.HomeModule)
      },
      {
        path: "preorder",
        loadChildren: () =>
          import("./pre-order/pre-order.module").then(m => m.PreOrderModule)
      },
      {
        path: "order",
        loadChildren: () =>
          import("./order/order.module").then(m => m.OrderModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
