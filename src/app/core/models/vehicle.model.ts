enum Corolla2015Colors {
  Red,
  Gray
}
export interface Vehicle {
  id: string;
  img: string;
  name: string;
  price: number;
}
export interface Corolla2015 extends Vehicle {
  color: Corolla2015Colors;
}
