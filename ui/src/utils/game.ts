const WORDS : string[]= [
  'AGENT',
  'WORLD',
  'ABOUT',
  'HEART',
  'WATER',
  'SIXTY',
  'BOARD',
  'MONTH',
  'MUSIC',
  'PARTY',
  'PIANO',
  'MOUTH',
  'WOMAN',
  'SUGAR',
  'AMBER',
  'DREAM',
  'LAUGH',
  'TIGER',
  'EARTH',
  'MONEY',
  'WORDS',
  'SMILE',
  'LEMON',
  'SOUTH',
  'AFTER',
  'STONE',
  'THING',
  'LIGHT',
  'STORY',
  'POWER',
  'TODAY',
  'RANGE',
  'PEARL',
  'VENOM',
  'PROXY',
  'ROUND',
  'HOVER',
  'CANDY',
  'ABOVE',
  'PHONE',
  'OTHER',
  'SMART',
  'BLACK',
  'MAGIC',
  'FRUIT',
  'RADIO',
  'ROYAL',
  'HONEY',
  'FLAKE',
  'SOUND',
];

const NUM_OF_GUESSES = 6

const SAMPLE = (arr: string[]) => {
  return arr[Math.floor(Math.random() * arr.length)]
}

const range = (start: number, end: number, step = 1) : void => {

  const output = []

  if(typeof end === "undefined"){
    end = start
    start = 0
  }

  for(let i = start; i < end; i += step){
    output.push(i)
  }
}



   function checkGuess(guess: string, answer: string){
      const SOLVED_CHAR = "correct"

      if(!guess){
        return null
      }

      const guessChar = guess.toUpperCase().split("")
      const answerChar = answer.split("")

      const result = []

      for(let i = 0; i < guessChar.length; i++){
         if(guessChar[i] === answerChar[i]){
           result[i] = {
            letter: guessChar[i],
            status: "correct",
           }
         }
      }


      for(let i = 0; i < guessChar.length; i++){
        if(guessChar[i] === SOLVED_CHAR){
          continue
        }

        let status = "incorrect"

        const misplacedIndex = answerChar.findIndex(char => char === guessChar[i])

        if(misplacedIndex >= 0){
          status = "misplaced";
          answerChar[misplacedIndex] = SOLVED_CHAR
        }

        result[i] = {
          letter: guessChar[i],
          status,
        }
      }


   }


export {WORDS, NUM_OF_GUESSES, SAMPLE, range, checkGuess}