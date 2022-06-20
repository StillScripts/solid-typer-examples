import { Component, createSignal, onMount, Show } from "solid-js";
import { SolidTyper } from "solid-typer";

const DadJokesExample: Component = () => {
  const [joke, setJoke] = createSignal("");
  const [laugh, setLaugh] = createSignal(false);

  onMount(async () => {
    const data = await getJoke();
    setJoke(data.joke);
  });

  async function getJoke() {
    const response = await fetch("https://icanhazdadjoke.com", {
      headers: {
        Accept: "application/json",
      },
    });
    return response.json();
  }
  return (
    <div style={{ "min-height": "2rem", "max-width": "600px" }}>
      <Show fallback={<p>loading...</p>} when={joke()}>
        <h2>
          <SolidTyper
            text={joke()}
            typingSpeed={80}
            cursor
            cursorClassName="cursor"
            onFinish={() => setLaugh(true)}
          />
          <Show when={laugh()}>😂</Show>
        </h2>
      </Show>
    </div>
  );
};

export default DadJokesExample;
