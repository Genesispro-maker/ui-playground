import { ApplePlayer } from "./components/apple-music-player/apple.music.player";
import { useMorph } from "./utils/morph";
import { Header } from "./components/header/header";
import { Illustration } from "./components/illustration/Illustration";
import { TextData } from "./utils/data";


function App(){
   const morph = useMorph(TextData)
   
   return (
    <>
     <Header />
     <div className="herotext">
        <h3>welcome to my <span style={{color: TextData[morph].color, transform: "scale(1)", transition: "transform 0.5s ease-in-out"}}>{TextData[morph].text}</span> where i put my UI engineering skills to work</h3>
     </div>
     <Illustration />
     <ApplePlayer />
    </>
   )
}

export default App;
