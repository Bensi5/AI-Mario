function preload() {
	world_start = loadSound("world_start.wav");
	jump = loadSound("jump.wav");
	Mcoins = loadSound("coin.wav");
	Mgameover = loadSound("gameover.wav");
	kick = loadSound("kick.wav");
	Mdie = loadSound("mariodie.wav")
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240, 336);
	canvas.parent("canvas");
	instializeInSetup(mario);


	video = createCapture(VIDEO);
	video.size(800, 400);
	video.parent('game_console');

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on("pose", getposes);
}

function draw() {
	game();


}
function modelLoaded() {
	console.log("model is loaded");
}

function getposes(results) {
	if (results.length > 0) {
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
		console.log(results);
	}
}





