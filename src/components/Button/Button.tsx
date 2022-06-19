import { Component, Show } from "solid-js";
import { Motion, Presence } from "@motionone/solid";

import styles from "./styles.module.css";

interface ButtonProps {
  children: string;
  show: boolean;
  callback: () => void;
}
const Button: Component<ButtonProps> = ({ children, show, callback }) => {
  return (
    <Presence exitBeforeEnter>
      <Show when={show}>
        <Motion.button
          class={styles.btn}
          onClick={callback}
          initial={{ opacity: 0, scale: 0.8, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {children}
        </Motion.button>
      </Show>
    </Presence>
  );
};

export default Button;
