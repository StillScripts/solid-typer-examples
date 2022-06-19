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
      <div>
        <header>
          <button
            class={styles.link}
            style={
              example() === "matrix"
                ? {
                    color: "rgba(255, 255, 255, 0.9)",
                    "text-decoration": "underline",
                    "text-decoration-color": "#2DD623",
                  }
                : {}
            }
            onClick={() => setExample("matrix")}
          >
            Matrix
          </button>
          <button
            class={styles.link}
            style={
              example() === "rainbow"
                ? {
                    color: "rgba(255, 255, 255, 0.9)",
                    "text-decoration": "underline",
                    "text-decoration-color": "#2DD623",
                  }
                : {}
            }
            onClick={() => setExample("rainbow")}
          >
            Rainbow
          </button>
        </header>
        <main>
          <Switch
            fallback={<MatrixExample callback={() => setShowNext(true)} />}
          >
            <Match when={example() === "matrix"}>
              <MatrixExample callback={() => setShowNext(true)} />
            </Match>
            <Match when={example() === "rainbow"}>
              <RainbowExample />
            </Match>
          </Switch>
          <Show when={showNext()}>
            <div>
              <Button callback={handleNext} show={showNext()}>
                Show Next
              </Button>
            </div>
          </Show>
        </main>
      </div>
      <footer>
        <div>Made by Daniel Still</div>
        <div>
          <a href="https://github.com/StillScripts/solid-typer" target="_blank">
            Source Code
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;
