import { Component, OnInit } from "@angular/core";
import { OrderModalComponent } from "../order-modal/order-modal.component";
import { MatDialog } from "@angular/material/dialog";
@Component({
  selector: "app-order-header",
  templateUrl: "./order-header.component.html",
  styleUrls: ["./order-header.component.styl"]
})
export class OrderHeaderComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog(): void {
    const dialogRef = this.dialog.open(OrderModalComponent, {
      width: "500px",
      data: { name: "hola", animal: "mundo" }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
      console.log(result);
      // this.animal = result;
    });
  }
}
