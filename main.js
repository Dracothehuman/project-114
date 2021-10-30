mouthX = 0;
mouthY = 0;



function preload(){
    creeper_aw_man = loadImage("https://i.postimg.cc/tCrHG2Rf/220px-Pikachu-artwork-for-Pok-mon-Red-and-Blue-webp.png");
}
function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    posenet=ml5.poseNet(video, modalLoaded);
    posenet.on('pose', gotPoses);
}