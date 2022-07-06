let classifier;
let video;
let resultsP;

function setup() {
  noCanvas(); 
  video = createCapture(VIDEO); 
  classifier = ml5.imageClassifier('MobileNet', video, modelReady); 
  resultsP = createP('Подгрузка сети и видео'); 
}

function modelReady() {
  console.log('Model Ready'); 
  classifyVideo(); 
}

function classifyVideo() {
  classifier.classify(gotResult); 
}

function gotResult(err, results) {
  if ( err ) {
   	console.log( err );
  } else {
  	resultsP.html( results[0].label + ' ' + nf(results[0].confidence, 0, 2) ); 
  	classifyVideo();
    // console.log(results) 
  }
}
