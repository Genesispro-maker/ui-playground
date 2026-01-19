import { useState } from "react";
import { SAMPLE, WORDS } from "../../utils/game";
import { GuessInput } from "./guess-Input";
import { GuessResult } from "./guess-result";
import { Header } from "./header";

const answer = SAMPLE(WORDS)
console.log({answer})

export function WORDLE(){
    return (
        <>
          <Header />
          <GuessResult />
          <GuessInput />
        </>
    )
}