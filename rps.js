const choices = ['Rock', 'Paper', 'Scissors']


function rock() {
    let output = choices[Math.floor(Math.random() * choices.length)];

    if (output == 'Rock') {
        document.getElementById('output').innerHTML = output
        const resultShowTie = 'It\'s a Tie.'
        const resultShowTieColor = resultShowTie.fontcolor('yellow');
        document.getElementById('result').innerHTML = resultShowTieColor
    }
    else if (output == 'Paper') {
        document.getElementById('output').innerHTML = output
        const resultShowLose = 'You Lose.'
        const resultShowLoseColor = resultShowLose.fontcolor('red');
        document.getElementById('result').innerHTML = resultShowLoseColor
    }
    else if (output == 'Scissors') {
        document.getElementById('output').innerHTML = output
        const resultShowWin = 'You Win!';
        const resultShowWinColor = resultShowWin.fontcolor('green');
        document.getElementById('result').innerHTML = resultShowWinColor
    }
}


function paper() {
    let output = choices[Math.floor(Math.random() * choices.length)];

    if (output == 'Rock') {
        document.getElementById('output').innerHTML = output
        const resultShowWin = 'You Win!';
        const resultShowWinColor = resultShowWin.fontcolor('green');
        document.getElementById('result').innerHTML = resultShowWinColor
    }
    else if (output == 'Paper') {
        document.getElementById('output').innerHTML = output
        const resultShowTie = 'It\'s a Tie.'
        const resultShowTieColor = resultShowTie.fontcolor('yellow');
        document.getElementById('result').innerHTML = resultShowTieColor
    }
    else if (output == 'Scissors') {
        document.getElementById('output').innerHTML = output
        const resultShowLose = 'You Lose.'
        const resultShowLoseColor = resultShowLose.fontcolor('red');
        document.getElementById('result').innerHTML = resultShowLoseColor
        
    }
}


function scissors() {
    let output = choices[Math.floor(Math.random() * choices.length)];

    if (output == 'Rock') {
        document.getElementById('output').innerHTML = output
        const resultShowLose = 'You Lose.'
        const resultShowLoseColor = resultShowLose.fontcolor('red');
        document.getElementById('result').innerHTML = resultShowLoseColor
    }
    else if (output == 'Paper') {
        document.getElementById('output').innerHTML = output
        const resultShowWin = 'You Win!';
        const resultShowWinColor = resultShowWin.fontcolor('green');
        document.getElementById('result').innerHTML = resultShowWinColor
    }
    else if (output == 'Scissors') {
        document.getElementById('output').innerHTML = output
        const resultShowTie = 'It\'s a Tie.'
        const resultShowTieColor = resultShowTie.fontcolor('yellow');
        document.getElementById('result').innerHTML = resultShowTieColor
    }

}