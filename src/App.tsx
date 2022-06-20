import { Component, createSignal, For, Match, Show, Switch } from "solid-js";
import {
  Button,
  DadJokesExample,
  MatrixExample,
  MemeExample,
  RainbowExample,
} from "./components";
import styles from "./App.module.css";

type Example = "matrix" | "jokes" | "meme" | "rainbow";
const examples: Example[] = ["matrix", "jokes", "rainbow"];

const App: Component = () => {
  const [example, setExample] = createSignal<Example>("matrix");
  const [showNext, setShowNext] = createSignal(false);

  const handleNext = () => {
    switch (example()) {
      case "matrix":
        setExample("jokes");
        break;
      case "jokes":
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
          <For each={examples}>
            {(item) => (
              <button
                class={example() === item ? styles.activeLink : styles.link}
                onClick={() => {setShowNext(true); setExample(item)}}
              >
                {item[0].toUpperCase()+item.substring(1)}
              </button>
            )}
          </For>
        </header>
        <main>
          <Switch
            fallback={<MatrixExample callback={() => setShowNext(true)} />}
          >
            <Match when={example() === "matrix"}>
              <MatrixExample callback={() => setShowNext(true)} />
            </Match>
            <Match when={example() === "jokes"}>
              <DadJokesExample />
            </Match>
            <Match when={example() === "meme"}>
              <MemeExample />
            </Match>
            <Match when={example() === "rainbow"}>
              <RainbowExample />
            </Match>
          </Switch>
          <Show when={showNext()}>
            <Button callback={handleNext} show={showNext()}>
              Next Example
            </Button>
          </Show>
        </main>
      </div>
      <footer>
        {/* <div>
          Made by
          <a href="https://github.com/StillScripts" target="_blank">
            @StillScripts
          </a>
        </div> */}
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
