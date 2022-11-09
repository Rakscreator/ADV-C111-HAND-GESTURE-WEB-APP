//https://teachablemachine.withgoogle.com/models/ykEQ3UWQJ/
Webcam.set({
    width: 350,
    Height:300,
    image_format: "png",
    png_quality: 1000
})

camera = document.getElementById("#camera")
Webcam.attach("#camera")

function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id='resultimg' src='"+data_uri+"'>"
    })
    check()
}

console.log("ml5 version:",ml5.version)
classiflier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/ykEQ3UWQJ/model.json",modelloaded)

function modelloaded(){
    console.log("model is loaded")
}