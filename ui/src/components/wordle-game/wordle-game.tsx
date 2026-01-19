import { SAMPLE, WORDS } from "../../utils/game";
import { GuessInput } from "./GuessInput";
import { Header } from "./header";

const answer = SAMPLE(WORDS)
console.log({answer})

export function WORDLE(){
    return (
        <>
          <Header />
          <GuessInput />
        </>
    )
}