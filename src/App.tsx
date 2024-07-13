import { Board } from "./jw/Board";
import styles from "./app.module.css";
import clsx from "clsx";

export const App = () => {
  const board = new Board();

  return (
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
  );
};
