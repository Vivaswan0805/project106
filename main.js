var dog = 0; 
var cat = 0; 
var lion = 0; 
var cow = 0; 
function startclassification(){
    navigator.mediaDevices.getUserMedia({audio:true}); 
    classifier = ml5.soundclassifier('https://teachablemachine.withgoogle.com/models/bFcq5oMjq/model.json', modelReady); 
}
function modelReady(){
    classifier.classify(gotResults); 
} 
function gotResults(error, results){
    if(error){
        console.error(error); 
    } 
    else{
        console.log(results); 
        randomnumber_r = Math.floor(Math.random()*255) + 1; 
        randomnumber_g = Math.floor(Math.random()*255) + 1; 
        randomnumber_b = Math.floor(Math.random()*255) + 1; 
        document.getElementById("detected") .innerHTML = "Detected Dog -"+dog+", Detected Cat - "+cat+", Detected Lion - "+lion+", Detected Cow - "+cow;
        document.getElementById("animalvoices").style.color ="rgb("+randomnumber_r+","+randomnumber_g+","+randomnumber_b+")";
        img = document.getElementById("animalimg"); 
        if(results[0].label == "barking"){
            img.src= "https://topdogwebdesigns.com/images/hai-chi-dog-barking.gif" 
            dog = dog+1; 
        } 
        else if(results[0].label == "meowing"){
            img.src = "https://i.gifer.com/NAk7.gif" 
            cat = cat+1
        } 
        else if(results[0].label == "roaring"){
            img.src = "https://cdn.weasyl.com/static/media/16/9c/8b/169c8b2ee9d2424c23d9f3c798aa883b0b06758d6f1a4039ff8bfc6b0302fcb9.gif" 
            lion = lion+1
    } 
    else if(results[0].label == "mooing"){
        img.src = "https://i.gifer.com/Za9e.gif" 
        cow = cow+1
} 
} 
}