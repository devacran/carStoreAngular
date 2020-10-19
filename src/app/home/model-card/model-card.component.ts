import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-model-card",
  templateUrl: "./model-card.component.html",
  styleUrls: ["./model-card.component.styl"]
})
export class ModelCardComponent implements OnInit {
  constructor() {}

  @Input() data: any;
  ngOnInit(): void {}
}
