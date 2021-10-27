let canvas = document.querySelector("#canvas")
let video = document.querySelector("#video");
let context = canvas.getContext("2d");

if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia){
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) =>{
    video.srcObject = stream;
    video.play();
    });
}

document.getElementById("snap").addEventListener("click", () =>{
  context.drawImage(video, 0, 0, 45, 45);

});
