import { Tetrimino } from "./Tetrimino";

export class GameController {
  private point: number;
  private time = 0; // 시간, 분, 초
  private tetriminoWaitingList: Tetrimino[] = []; // 큐로 구현

  /**
   * 게임 시작
   * - 보드 생성하고
   * - 테트리미노 생성하고(보통 다음에 어떤 테트리미노가 나올지 2개 정도 미리 보여줌) -> 테트리미노는 랜덤으로 생성
   *   - 이걸 따로 객체로 만들어서 생성하는게 좋을듯 (일단 여기서 구현)
   */
  startGame() {}

  /**
   * 게임 일시정지
   * - 시간 정지
   * - 테트리미노 이동 정지
   */
  pauseGame() {}

  /**
   * 게임 종료
   * - 게임 종료 메시지 출력
   * - 게임 종료 시간 출력
   * - 게임 종료 시 점수 출력
   *
   * - 게임 종료 시 게임 초기화
   * - 게임 종료 시 게임 재시작할 수 있는 창 띄우기
   */
  endGame() {}
}
