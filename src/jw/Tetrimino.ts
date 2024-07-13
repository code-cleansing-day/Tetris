import { Node } from "./Node";

type Orientation = "clockwise" | "counterclockwise";

export abstract class Tetrimino {
  protected nodes: Node[] = [];
  backgroundColor: string;

  abstract move(x: number, y: number): void;
  abstract rotate(orientation: Orientation): void;
  softDrop() {}
  hardDrop() {}
}

export class TetriminoI extends Tetrimino {
  backgroundColor = "cyan";

  move(x: number, y: number): void {
    throw new Error("Method not implemented.");
  }
  rotate(orientation: Orientation): void {
    throw new Error("Method not implemented.");
  }
  constructor() {
    super();
    this.nodes = [
      new Node(0, 19),
      new Node(0, 18),
      new Node(0, 17),
      new Node(0, 16),
    ];
  }
}

export class TetriminoJ extends Tetrimino {
  backgroundColor = "blue";

  move(x: number, y: number): void {
    throw new Error("Method not implemented.");
  }
  rotate(orientation: Orientation): void {
    throw new Error("Method not implemented.");
  }
  constructor() {
    super();
    this.nodes = [
      new Node(1, 19),
      new Node(1, 18),
      new Node(1, 17),
      new Node(0, 17),
    ];
  }
}

export class TetriminoL extends Tetrimino {
  backgroundColor = "orange";

  move(x: number, y: number): void {
    throw new Error("Method not implemented.");
  }
  rotate(orientation: Orientation): void {
    throw new Error("Method not implemented.");
  }
  constructor() {
    super();
    this.nodes = [
      new Node(0, 19),
      new Node(0, 18),
      new Node(0, 17),
      new Node(1, 17),
    ];
  }
}

export class TetriminoO extends Tetrimino {
  backgroundColor = "yellow";

  move(x: number, y: number): void {
    throw new Error("Method not implemented.");
  }
  rotate(orientation: Orientation): void {
    throw new Error("Method not implemented.");
  }
  constructor() {
    super();
    this.nodes = [
      new Node(0, 19),
      new Node(0, 18),
      new Node(1, 19),
      new Node(1, 18),
    ];
  }
}

export class TetriminoS extends Tetrimino {
  backgroundColor = "green";

  move(x: number, y: number): void {
    throw new Error("Method not implemented.");
  }
  rotate(orientation: Orientation): void {
    throw new Error("Method not implemented.");
  }
  constructor() {
    super();
    this.nodes = [
      new Node(1, 19),
      new Node(2, 19),
      new Node(1, 18),
      new Node(0, 18),
    ];
  }
}

export class TetriminoT extends Tetrimino {
  backgroundColor = "purple";

  move(x: number, y: number): void {
    throw new Error("Method not implemented.");
  }
  rotate(orientation: Orientation): void {
    throw new Error("Method not implemented.");
  }
  constructor() {
    super();
    this.nodes = [
      new Node(0, 19),
      new Node(1, 19),
      new Node(2, 19),
      new Node(1, 18),
    ];
  }
}

export class TetriminoZ extends Tetrimino {
  backgroundColor = "red";

  move(x: number, y: number): void {
    throw new Error("Method not implemented.");
  }
  rotate(orientation: Orientation): void {
    throw new Error("Method not implemented.");
  }
  constructor() {
    super();
    this.nodes = [
      new Node(0, 19),
      new Node(1, 19),
      new Node(1, 18),
      new Node(2, 18),
    ];
  }
}
