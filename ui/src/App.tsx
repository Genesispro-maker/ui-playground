import { AudioVisualizer } from "./components/audio-visualizer";
import { Charts } from "./components/charts";
import { Header } from "./components/header";
import { Illustration } from "./components/Illustration";
function App(){
   return (
    <>
     <Header />
     <Illustration />
     <AudioVisualizer />
     {/* <Charts /> */}
    </>
   )
}

export default App;
