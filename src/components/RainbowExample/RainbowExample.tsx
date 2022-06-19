import { Component, createSignal } from "solid-js";
import { SolidTyper } from "solid-typer";
import styles from "./styles.module.css";

// Types and variables for the rainbow typing animation
type Rainbow =
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "indigo"
  | "violet";
const rainbowColors: Rainbow[] = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet",
];
const rainbowWords = rainbowColors.map((word) => `${word}...`);

const RainbowTypewriter: Component = () => {
  const [colorIndex, setColorIndex] = createSignal<number>(0);

  return (
    <h3>
      Rainbow typewriter:{" "}
      <span style={{ color: `${rainbowColors[colorIndex() % 7]}` }}>
        <SolidTyper
          text={rainbowWords}
          cursor
					cursorClassName={styles.cursor}
          loop
          onBackspaceEnd={() => {
            setColorIndex(colorIndex() + 1);
          }}
        />
      </span>
    </h3>
  );
};

export default RainbowTypewriter;