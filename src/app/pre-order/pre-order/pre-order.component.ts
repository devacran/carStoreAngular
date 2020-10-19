import { Component, OnInit } from "@angular/core";
import { Params, ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-pre-order",
  templateUrl: "./pre-order.component.html",
  styleUrls: ["./pre-order.component.styl"]
})
export class PreOrderComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: Params) => {
      console.log(params.id);
    });
  }
}
