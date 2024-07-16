import { Board } from "./jw/Board";
import styles from "./app.module.css";
import clsx from "clsx";
import { TetriminoFactory } from "./jw/TetriminoFactory";

export const App = () => {
  const board = new Board();

  const createTetrimino = () => {
    console.log("createTetrimino");
    const tetrimino = TetriminoFactory.createTetrimino();
    console.log(tetrimino);
  };

  return (
    <div>
      <button onClick={createTetrimino}>테트리미노 만들기</button>
      <ul className={styles["grid-container"]}>
        {board.nodes.reverse().map((row, i) =>
          row.map((node, j) => (
            <li
              key={j}
              className={clsx(
                styles["grid-item"],
                node.checkLightOn() && styles["light-on"]
              )}
              style={{
                gridColumnStart: j + 1,
                gridColumnEnd: j + 2,
                gridRowStart: i + 1,
                gridRowEnd: i + 2,
              }}
            >
              {JSON.stringify(node)}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};
