import { Node } from "./Node";

export class Board {
  private _nodes: Node[][] = [];

  get nodes() {
    const newNodes = [...this._nodes];
    return newNodes;
  }

  constructor() {
    for (let i = 0; i < 20; i++) {
      this._nodes.push([]);
      for (let j = 0; j < 10; j++) {
        this._nodes[i].push(new Node(j, i));
      }
    }
  }
}
