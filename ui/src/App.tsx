import { AudioVisualizer } from "./components/apple-music-player/audio-visualizer";
import { useMorph } from "./utils/morph";
import { Header } from "./components/header/header";
import { Illustration } from "./components/illustration/Illustration";
import { WebPassport } from "./components/passport/web-passport";


const Textdata: Array<string> = ["turf", "Nuclear-Testsite", "Artillery", "Den"]


function App(){
   const morph = useMorph(Textdata)
   
   return (
    <>
     <Header />
     <div className="herotext">
        <h3>welcome to my <span>{Textdata[morph]}</span></h3>
     </div>
     <Illustration />
     <AudioVisualizer />
     <WebPassport />
    </>
   )
}

export default App;
