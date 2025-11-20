var name = prompt("Hi! What is your name?");
console.log(name);
alert("Hi " + name);

var name_change=document.getElementById("page");
name_change.textContent=name +" is making this webpage.";

var list=document.getElementsByTagName("h2");
console.log(list);
console.log(list[0]);
console.log(list[1]);

var note = document.createElement("p");
note.textContent="Hi Mom how are you?";
document.body.appendChild(note);

var child = document.getElementById("page");
document.body.insertBefore(note, child);

note.setAttribute("class", "extraNote");
note.setAttribute("style", "fon-size:25px;");

note.style.backgroundColor="red";
note.removeAttribute("style");

var button = document.createElement ("button");
button.textContent="Click to increase size & change to blue";

button.addEventListener("click", function(){
    var p = document.getElementById("increase");
    p.setAttribute(
        "style",
        "background-color: blue; font-size: 50px;"
    );
});

document.body.appendChild(button);

var break1 = document.createElement("br");
document.body.appendChild(break1);

var button2 = document.createElement("button");
button2.textContent="Click to decrease size";

button2.addEventListener("click", function(){
    var p2 = document.getElementById("increase");
    p2.setAttribute(
        "style",
        "background-color: red; font-size: 15px;"
    );
});

document.body.appendChild(button2);

function change_colors(element){
    if(element.style.color ="blue"){
        element.style.color="yellow"
    }
    if(element.style.color ="red"){
        element.style.color="green"
    }
    if(element.style.color ="green"){
        element.style.color="orange"
    }
}
function getInfo(){
    console.log("Div has been clicked");
    var n =event.timeStamp;
    console.log(n);
}
document.body.addEventListener("keydown", changeColor);

function changeColor(event){
    if(document.body.style.backgroundColor=="white"){
        document.body.style.backgroundColor="blue";
    } else {
        document.body.style.backgroundColor="white";
    }
}

var i = 1;
function changeColor2(event){
    if(document.body.style.backgroundColor !="red"){
        document.body.style.backgroundColor ="red";
    }
    i++;
    if(i==5){
        clearInterval(inv=tervalID);
        console.log("This function ran 5 times")
    }
}
var intervalID = setInterval(changeColor2, 1000)

var box= document.getElementById("move");
var boxRight=0;
function slide(){
    console.log(box.style.right);
    console.log('is this working?');
    box.style.left = boxRight +"px";
    boxRight++;
    if(boxRight>500-50){
        clearInterval(timer);
    }
}

var timer = setInterval(slide, 40);