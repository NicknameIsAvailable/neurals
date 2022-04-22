let soundClassifier;
let resultP

function preload() {
    let options = {probabilityThreshold: 0.95};
    soundClassifier = ml5.soundClassifier('SpeechCommands18w', options);
}

function setup() {
    createCanvas(400, 400);
    resultP = createP('Подождите')
    resultP.style('font-size', '32px')
    soundClassifier.classify(gotResults)
}

function gotResults(error, results) {
    if(error) {
        console.log(error)
    } 
    resultP.html(`${results[0].label} : ${results[0].confidence}`)
}