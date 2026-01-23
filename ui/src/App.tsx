import { AudioVisualizer } from "./components/audio-visualizer";

import { Header } from "./components/header";
import { Illustration } from "./components/Illustration";
import { WebPassport } from "./components/web-passport";
import { WORDLE } from "./components/wordle-game/wordle-game";
function App(){
   return (
    <>
     <Header />
     <Illustration />
     <AudioVisualizer />
     <WORDLE />
     <WebPassport />
    </>
   )
}

export default App;
