//import React from 'react';

const Analyser = (answer, guess) => {
    var guessInt = parseInt(guess, 10);
    return(answer===guessInt ? "Correct"
        : 
        (Math.abs(answer-guessInt)<=4) ? "Hot"
            : 
            Math.abs(answer-guessInt)<=15 ? "Warm"
                : "Cold"
    );
}
export default Analyser;