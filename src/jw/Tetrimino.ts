import { Node } from "./Node";

type Orientation = "clockwise" | "counterclockwise";

/**
 * **전략 패턴**
 * 전략 패턴을 사용하여 Tetrimino 클래스를 추상화하고, 각각의 Tetrimino 클래스를 구현한다.
 * - 테트리미노 7종은 공유하는 동작도 있겠지만, 같은 동작에 대해 각각의 테트리미노는 다르게 동작할 수 있다.
 * - 이런 경우 전략 패턴을 사용하여 공통된 동작을 추상화하고,
 * 각각의 테트리미노 클래스에서 구체적인 동작을 구현하는 편이 이후에 새로운 기능이 추가 되었을 때도 변경에 유리하지 않을까.
 *
 * **커맨드 패턴**
 * - 테트리미노의 이동, 회전, 소프트 드롭, 하드 드롭 등의 동작을 커맨드 패턴으로 구현할 수 있을 것 같은데
 * - 너무 과하려나?
 * - 이점이 있을까?
 */
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
