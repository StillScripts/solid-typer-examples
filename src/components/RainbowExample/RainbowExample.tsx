import { Component, createSignal } from "solid-js";
import { SolidTyper } from "solid-typer";

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
    <h2>
      Rainbow:{" "}
      <span style={{ color: `${rainbowColors[colorIndex() % 7]}` }}>
        <SolidTyper
          text={rainbowWords}
          cursor
					cursorClassName="cursor"
          loop
          onBackspaceEnd={() => {
            setColorIndex(colorIndex() + 1);
          }}
        />
      </span>
    </h2>
  );
};

export default RainbowTypewriter;