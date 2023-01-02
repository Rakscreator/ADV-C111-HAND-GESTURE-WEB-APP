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
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/ykEQ3UWQJ/model.json",modelloaded)

function modelloaded(){
    console.log("model is loaded")
}
function check(){
    img = document.getElementById("resultimg")
    classifier.classify(img,gotresult)
}
function gotresult(error,results){
    if(error){
        console.error(error);
    }
    else if(results){
        console.log(results)
        prediction = results[0].label;
        document.getElementById("result_emotion_name").innerHTML = prediction;
        speak();
        if(prediction == "Amazing"){
            document.getElementById("update_emoji").innerHTML = "&#128076;"
        } 
        else if(prediction == "victory"){
            document.getElementById("update_emoji").innerHTML = "&#9996;"
        } 
        else if(prediction == "Aggre"){
            document.getElementById("update_emoji").innerHTML = "&#128077;"
        } 
        else if(prediction == "just a part"){
            document.getElementById("update_emoji").innerHTML = "&#128077;"
        }
        else if(prediction == "Swag"){
            document.getElementById("update_emoji").innerHTML = "&#129304;"
        }
        else if(prediction == "fingers crossed"){
            document.getElementById("update_emoji").innerHTML = "&#129310"
        }
        else if(prediction == "Disaggre"){
            document.getElementById("update_emoji").innerHTML = "&#128078;"
        }
    }
}