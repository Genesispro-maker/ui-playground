import { AudioVisualizer } from "./components/apple-music-player/audio-visualizer";

import { Header } from "./components/header";
import { Illustration } from "./components/illustration/Illustration";
import { WebPassport } from "./components/passport/web-passport";

function App(){
   return (
    <>
     <Header />
     <Illustration />
     <AudioVisualizer />
     <WebPassport />
    </>
   )
}

export default App;
