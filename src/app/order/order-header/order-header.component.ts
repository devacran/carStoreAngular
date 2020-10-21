import { Component, OnInit, Input } from "@angular/core";
import { Vehicle } from "../../core/models/vehicle.model";
@Component({
  selector: "app-order-header",
  templateUrl: "./order-header.component.html",
  styleUrls: ["./order-header.component.styl"]
})
export class OrderHeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @Input() resume: boolean;
  @Input() data: Vehicle;
  @Input() handleClick: any;
}
