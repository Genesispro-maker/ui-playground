import { AudioVisualizer } from "./components/audio-visualizer";
import { Drawer } from "./components/drawer";
import { Header } from "./components/header";
import { Illustration } from "./components/Illustration";
function App(){
   return (
    <>
     <Header />
     <Illustration />
     <AudioVisualizer />
     <Drawer initialValue={0}/>
    </>
   )
}

export default App;
