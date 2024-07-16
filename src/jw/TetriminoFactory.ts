import {
  TetriminoI,
  TetriminoJ,
  TetriminoL,
  TetriminoO,
  TetriminoS,
  TetriminoT,
  TetriminoZ,
} from "./Tetrimino";

/**
 * **팩토리 메서드 패턴**
 * 테트리미노 생성을 담당하는 팩토리 클래스
 */
export class TetriminoFactory {
  static readonly TETRIMINO_TYPES = [
    TetriminoJ,
    TetriminoL,
    TetriminoO,
    TetriminoI,
    TetriminoS,
    TetriminoT,
    TetriminoZ,
  ];

  static createTetrimino() {
    const index = Math.floor(
      Math.random() * TetriminoFactory.TETRIMINO_TYPES.length
    );

    return new TetriminoFactory.TETRIMINO_TYPES[index]();
  }
}
