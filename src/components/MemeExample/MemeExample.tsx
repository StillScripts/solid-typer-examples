import { Component, createSignal } from "solid-js";
import { SolidTyper } from "solid-typer";
import meme1 from "../../assets/memes/meme-1.jpg";
import meme2 from "../../assets/memes/meme-2.jpg";
import meme3 from "../../assets/memes/meme-3.jpg";
import meme4 from "../../assets/memes/meme-4.jpg";
import meme5 from "../../assets/memes/meme-5.jpg";
import styles from "./MemeExample.module.css";

const sentences = [
  "Incorrect Password...",
  "That IS My Password!",
  "Incorrect Password!!",
  "FINE! Reset My Password!",
  "New Password Cannot Be The Same As Old Password!!!",
];

const MemeExample: Component = () => {
  const [meme, setMeme] = createSignal(meme1);

  const handleSwitch = () => {
    setTimeout(() => {
      switch (meme()) {
        case meme1:
          setMeme(meme2);
          break;
        case meme2:
          setMeme(meme3);
          break;
        case meme3:
          setMeme(meme4);
          break;
        case meme4:
          setMeme(meme5);
          break;
        default:
          break;
      }
    }, 250);
  };

  return (
    <div>
      <h2 style={{ height: "2rem" }}>
        <SolidTyper
          text={sentences}
          backspaceSpeed={10}
          typingSpeed={50}
          onBackspaceEnd={handleSwitch}
          backspacePause={200}
        />
      </h2>
      <img class={styles.meme} src={meme()} alt="Password Reset Meme" />
    </div>
  );
};

export default MemeExample;
