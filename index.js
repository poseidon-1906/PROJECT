
// // // document.getElementById("count").innerText = 5
// // // javascript
let count = document.getElementById("count");
let ans = 0
function increment(){
ans = ans + 1; 
count.innerText = ans;
}
console.log(ans)
let savep = document.getElementById("save")
 function save(){
     let countStr = ans + " - ";
     savepo.textContent += countStr;
     ans = 0;
     count.textContent = ans;
 }

// let username = "per";
// let message = "You have tree new notification";
// console.log(message + " ", username );