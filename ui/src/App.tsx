import { AudioVisualizer } from "./components/audio-visualizer";

import { Header } from "./components/header";
import { Illustration } from "./components/Illustration";
import { WORDLE } from "./components/wordle-game/wordle-game";
function App(){
   return (
    <>
     <Header />
     <Illustration />
     <AudioVisualizer />
     <WORDLE />
    </>
   )
}

export default App;
