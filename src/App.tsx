import { Component, createSignal, Match, Show, Switch } from "solid-js";
import { Button, MatrixExample, RainbowExample } from "./components";
import styles from "./App.module.css";
import rabbit from "./assets/rabbit.png";

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
            onClick={() => {
              setExample("rainbow");
              setShowNext(true);
            }}
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
            <Button callback={handleNext} show={showNext()}>
              Show Next Example
            </Button>
          </Show>
        </main>
      </div>
      <footer>
        <div class={styles.author}>
          <span>Made by </span>
          <a href="https://github.com/StillScripts" target="_blank">
            @StillScripts
            {/* <img
              src={rabbit}
              width={28}
              height={28}
              style={{ "border-radius": "100%" }}
            /> */}
          </a>
        </div>
        <div class={styles.docs}>
          <a
            href="https://github.com/StillScripts/solid-typer-examples"
            target="_blank"
          >
            Source Code
          </a>
          <a href="https://github.com/StillScripts/solid-typer" target="_blank">
            Documentation
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;
