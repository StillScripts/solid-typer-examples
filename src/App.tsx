import { Component, createSignal, Match, Show, Switch } from "solid-js";
import { Button, MatrixExample, RainbowExample } from "./components";
import styles from "./App.module.css";

const App: Component = () => {
  const [example, setExample] = createSignal<"matrix" | "rainbow">("matrix");
  const [showNext, setShowNext] = createSignal(false);

  const handleNext = () => {
    switch (example()) {
      case "matrix":
        setExample("rainbow");
        break;
      case "rainbow":
        setExample("matrix");
        break;
      default:
        break;
    }
  };

  return (
    <div class={styles.container}>
      <main class={styles.examples}>
        <Switch fallback={<MatrixExample callback={() => setShowNext(true)} />}>
          <Match when={example() === "matrix"}>
            <MatrixExample callback={() => setShowNext(true)} />
          </Match>
          <Match when={example() === "rainbow"}>
            <RainbowExample />
          </Match>
        </Switch>
        <Show when={showNext()}>
          <Button callback={handleNext} show={showNext()}>
            Show Next
          </Button>
        </Show>
      </main>
      <footer class={styles.example}>
        <div>Made by Daniel Still</div>
        <div><a href="https://github.com/StillScripts/solid-typer" target="_blank">Source Code</a></div>
      </footer>
    </div>
  );
};

export default App;
