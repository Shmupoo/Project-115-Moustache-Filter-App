function preload() {

}

function setup() {
    canvas = createCanvas(500, 400);
    canvas.center();
    canvas.position(450, 250);
    video = createCapture(VIDEO);
    video.size(500, 400);
    canvas.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        console.log('Nose x = ' + results[0].pose.nose.x);
        console.log('Nose y = ' + results[0].pose.nose.y);
    }
}

function draw() {
    image(VIDEO, 0, 0, 500, 400);
}

function take_snapshot() {
    save('myFilterSelfie.png');
}