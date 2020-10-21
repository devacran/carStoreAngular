import { Component, OnInit } from "@angular/core";
import { Params, ActivatedRoute } from "@angular/router";
import { ProductsService } from "../../core/services/products.service";
import { Vehicle } from "../../core/models/vehicle.model";
import { Order } from "../../core/models/order.model";
import { MatButtonToggleChange } from "@angular/material/button-toggle";
import { OrderModalComponent } from "../order-modal/order-modal.component";
import { MatDialog } from "@angular/material/dialog";
@Component({
  selector: "app-order",
  templateUrl: "./order.component.html",
  styleUrls: ["./order.component.styl"]
})
export class OrderComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private products: ProductsService,
    public dialog: MatDialog
  ) {
    this.openDialog = this.openDialog.bind(this);
  }

  data: Vehicle;

  //this is provisional since there isn't an API
  carImages: Object = {
    black: "YS_CVT_GrisMetalico_03_0.png",
    silver: "YS_CVT_Plata_02_0.png",
    red: "YS_CVT_Rojo_05_0.png",
    blue: "YS_CVT_AzulMetalico_06_0.png"
  };

  selectedColor: string = "black";
  selectedView: string = "exterior";
  carImg: string = this.carImages[this.selectedColor];

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: Params) => {
      console.log(params.params.id);
      this.data = this.products.getProduct(params.params.id);
    });
    console.log("data en init", this.data);
  }
  toggleVehicleColor(evn: MatButtonToggleChange): void {
    this.selectedColor = evn.value;
    this.carImg = this.carImages[this.selectedColor];
    console.log(this.carImg, this.selectedColor);
  }
  toggleView(evn: MatButtonToggleChange) {
    console.log(evn.value);
    this.selectedView = evn.value;
  }
  openDialog(): void {
    const data: Order = {
      ...this.data,
      imgSrc: this.carImg
    };
    const dialogRef = this.dialog.open(OrderModalComponent, {
      width: "500px",
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
      console.log(result);
      // this.animal = result;
    });
  }
}
