import { Axis } from "./Axis";

export class Node {
  private axis: Axis;
  private lightOn = false;

  constructor(x: number, y: number) {
    this.axis = new Axis(x, y);
  }

  checkLightOn() {
    return this.lightOn;
  }

  toggleLight() {
    this.lightOn = !this.lightOn;
  }
}
