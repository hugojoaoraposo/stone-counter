let counter = 0;

document.getElementById("increaseBtn").onclick =

function increase(){

counter += 1
document.getElementById("countLabel").innerHTML = counter

}

document.getElementById("resetBtn").onclick =

function reset(){

counter = 0
document.getElementById("countLabel").innerHTML = counter

}

document.getElementById("decreaseBtn").onclick =

function decrease(){
    
  counter -= 1
  document.getElementById("countLabel").innerHTML = counter
}