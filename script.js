function increaseCount() {
  var count = document.getElementById("number").innerText;
  count++;  
  document.getElementById("number").innerText = count;
}

function decreaseCount() {
  var count = document.getElementById("number").innerText;
  if(count > 0) count--;  
  document.getElementById("number").innerText = count;
}

function resetCount() {        document.getElementById("number").innerText = 0;
}

document.getElementById("increase").addEventListener("click", increaseCount);
document.getElementById("reset").addEventListener("click", resetCount);
document.getElementById("decrease").addEventListener("click", decreaseCount);