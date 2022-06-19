import { Component } from "solid-js";
import { SolidTyper } from "solid-typer";
import styles from "./MatrixExample.module.css";

interface MatrixExampleProps {
  callback: () => void;
}
const MatrixExample: Component<MatrixExampleProps> = ({ callback }) => {
  return (
    <p class={styles.typer}>
      <SolidTyper
        text={[
          "Wake up, Neo...",
          "The Matrix has you...",
          "Follow the white rabbit.",
          "Knock, knock, Neo.",
        ]}
        backspaceSpeed={30}
        typingSpeed={100}
        onFinish={callback}
      />
    </p>
  );
};

export default MatrixExample;
