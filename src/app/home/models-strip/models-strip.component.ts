import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-models-strip",
  templateUrl: "./models-strip.component.html",
  styleUrls: ["./models-strip.component.styl"]
})
export class ModelsStripComponent implements OnInit {
  constructor() {}

  data = [
    {
      id: "123",
      imgSrc: "Corolla20_262x95_01.png",
      name: "Corolla 2020",
      price: "25000"
    },
    {
      id: "124",
      imgSrc: "render_camrry_3-4_0.png",
      name: "Camrry",
      price: "25000"
    },
    {
      id: "125",
      imgSrc: "YarisSedan18_34_450X180_02.png",
      name: "Yaris Sedan",
      price: "25000"
    },
    {
      id: "126",
      imgSrc: "YarisHB_Menu3-4.png",
      name: "Yaris HB",
      price: "25000"
    },
    {
      id: "127",
      imgSrc: "YarisHB_Menu3-4.png",
      name: "Yaris HB",
      price: "25000"
    }
  ];
  ngOnInit(): void {}
}
