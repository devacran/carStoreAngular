import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-vehicle-card",
  templateUrl: "./vehicle-card.component.html",
  styleUrls: ["./vehicle-card.component.styl"]
})
export class VehicleCardComponent implements OnInit {
  constructor() {}
  @Input() data: any;
  ngOnInit(): void {}
}
